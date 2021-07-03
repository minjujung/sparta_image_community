import React from "react";
import Post from "../components/Post";
import { Input } from "../elements";
import Comment from "../components/Comment";

const PostDetail = (props) => {
  return (
    <>
      <Post />
      <Input placeholder="댓글 내용을 입력하세요 :)" />
      <button>작성</button>
    </>
  );
};

export default PostDetail;
