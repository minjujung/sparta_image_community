import React, { useEffect, useState } from "react";

import { Input } from "../elements";
import Post from "../components/Post";
import Comment from "../components/Comment";
import CommentList from "../components/CommentList";
import Permit from "../shared/Permit";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const PostDetail = (props) => {
  const id = props.match.params.id;

  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.user);

  const post_list = useSelector((state) => state.post.list);
  const post_idx = post_list.findIndex((p) => p.id === id);
  const post = post_list[post_idx];

  useEffect(() => {
    if (post) {
      return;
    }

    dispatch(postActions.getOnePostFB(id));
  }, []);

  return (
    <>
      {post && (
        <Post {...post} is_me={post.user_info.user_id === user_info?.uid} />
      )}
      <Permit>
        <Comment post_id={id} />
      </Permit>
      <CommentList post_id={id} />
    </>
  );
};

export default PostDetail;
