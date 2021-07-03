import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Post from "../components/Post";
import InfinityScroll from "../shared/InfinityScroll";

import { actionCreators as postActions } from "../redux/modules/post";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user.user);
  const is_loading = useSelector((state) => state.post.is_loading);
  const paging = useSelector((state) => state.post.paging);

  console.log(post_list);
  console.log(user_info);

  useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, []);

  return (
    <>
      <InfinityScroll
        callNext={() => {
          dispatch(postActions.getPostFB(paging.next));
        }}
        is_Next={paging.next ? true : false}
        loading={is_loading}
      >
        {post_list.map((p, idx) => {
          if (user_info && p.user_info.user_id === user_info.uid) {
            return <Post key={p.id} {...p} is_me />;
          } else {
            return <Post key={p.id} {...p} />;
          }
        })}
      </InfinityScroll>
    </>
  );
};

export default PostList;
