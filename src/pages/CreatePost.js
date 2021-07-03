import React from "react";

import { Text, Button } from "../elements";

const CreatePost = (props) => {
  return (
    <>
      <Text bold size="32">
        게시글 작성
      </Text>
      <input type="file" />
      <button> 이미지 선택</button>
      <h2>미리보기</h2>
      <label>
        <Text>게시글 내용</Text>
        <textarea placeholder="게시글 작성" />
      </label>
      <Button text="게시글 작성"></Button>
    </>
  );
};

export default CreatePost;
