import React from "react";

import { Input } from "../elements";
import Post from "../components/Post";
import Comment from "../components/Comment";
import CommentList from "../components/CommentList";

const PostDetail = (props) => {
  return (
    <>
      <Post />
      <Comment />
      <CommentList />
    </>
  );
};

export default PostDetail;
