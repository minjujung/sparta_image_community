import React, { useState } from "react";

import { Input, Grid, Text, Button } from "../elements";

import { actionCreators as commentActions } from "../redux/modules/comment";
import { useSelector, useDispatch } from "react-redux";

const Comment = (props) => {
  const dispatch = useDispatch();
  const [comment_text, setCommentText] = useState();

  const { post_id } = props;

  const onChange = (e) => {
    setCommentText(e.target.value);
  };

  const write = () => {
    dispatch(commentActions.addCommentFB(post_id, comment_text));
    setCommentText("");
  };

  return (
    <Grid padding="16px" is_flex>
      <Input
        placeholder="댓글 내용을 입력하세요 :)"
        _onChange={onChange}
        value={comment_text}
        onSubmit={write}
        is_submit
      />
      <Button width="50px" margin="0px 5px" _onClick={write}>
        작성
      </Button>
    </Grid>
  );
};

export default Comment;
