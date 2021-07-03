import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Post from "../components/Post";

import { actionCreators as postActions } from "../redux/modules/post";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user.user);

  console.log(post_list);
  console.log(user_info);

  useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, []);

  return (
    <>
      {post_list.map((p, idx) => {
        if (user_info && p.user_info.user_id === user_info.uid) {
          return <Post key={p.id} {...p} is_me />;
        } else {
          return <Post key={p.id} {...p} />;
        }
      })}
    </>
  );
};

export default PostList;
