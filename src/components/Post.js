import React from "react";
import moomin from "../images/화난무민.jpg";

import { Grid, Image, Text } from "../elements";

const Post = (props) => {
  return (
    <>
      <Grid>
        <Grid is_flex>
          <Image src={props.src} shape="circle" />
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src} />
        </Grid>
        <Grid padding="16px">
          <Text bold>댓글 {props.comment_cnt}개</Text>
        </Grid>
        <div>user profile / user name / indsert_dt </div>
        <div>contents</div>
        <div>image</div>
        <div>comment cnt</div>
      </Grid>
    </>
  );
};

//props가 잘못들어오거나 안들어왓을 때 에러를 대비
Post.defaultProps = {
  user_info: {
    user_name: "minju",
    user_profile: `${moomin}`,
  },
  image_url: `${moomin}`,
  contents: "무민이지롱",
  comment_cnt: 10,
  insert_dt: "2021-07-02 15:00:00",
};

export default Post;
