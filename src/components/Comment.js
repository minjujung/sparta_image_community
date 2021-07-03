import React from "react";

import { Input, Grid, Text, Button } from "../elements";

const Comment = (props) => {
  return (
    <Grid padding="16px" is_flex>
      <Input placeholder="댓글 내용을 입력하세요 :)" />
      <Button width="50px" margin="0px 5px">
        작성
      </Button>
    </Grid>
  );
};

export default Comment;
