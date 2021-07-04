import React, { useEffect } from "react";

import { Image, Text, Grid } from "../elements";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentList = (props) => {
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comment.list);

  const { post_id } = props;

  useEffect(() => {
    if (!comment_list[post_id]) {
      dispatch(commentActions.getCommentFB(post_id));
    }
  }, []);

  if (!comment_list[post_id] || !post_id) {
    return null;
  }

  return (
    <Grid padding="16px">
      {comment_list[post_id].map((c) => {
        return <CommentItem key={c.id} {...c} />;
      })}
    </Grid>
  );
};

CommentList.defaultProps = {
  post_id: null,
};

const CommentItem = (props) => {
  const { user_profile, user_name, user_id, post_id, contents, insert_dt } =
    props;
  return (
    <Grid is_flex>
      <Grid is_flex width="auto">
        <Image />
        <Text bold>{user_name}</Text>
      </Grid>
      <Grid is_flex margin="0px 4px">
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
