import React from "react";

import { Image, Text, Grid } from "../elements";
import user from "../redux/modules/user";

const CommentList = (props) => {
  return (
    <Grid padding="16px">
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </Grid>
  );
};

const CommentItem = (props) => {
  const { user_profile, user_name, user_id, post_id, contents, insert_dt } =
    props;
  return (
    <Grid is_flex>
      <Grid is_flex width="auto" margin="0px 5px">
        <Image />
        <Text margin="0px">{user_name}</Text>
      </Grid>
      <Grid is_flex margin="0px 10px">
        <Text margin="0px">{contents}</Text>
        <Text margin="0px">{insert_dt}</Text>
      </Grid>
    </Grid>
  );
};

CommentItem.defaultProps = {
  user_profile: "",
  user_name: "minju",
  user_id: "",
  post_id: 1,
  contents: "무민 뾰루퉁!!",
  insert_dt: "2021-07-02 15:00:00",
};

export default CommentList;
