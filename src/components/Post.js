import React from "react";
import moomin from "../images/화난무민.jpg";

import { history } from "../redux/configureStore";

import { Grid, Image, Text, Button } from "../elements";

const Post = (props) => {
  return (
    <>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex>
            <Image src={props.src} shape="circle" />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex>
            <Text>{props.insert_dt}</Text>
            {props.is_me && (
              <Button
                padding="4px"
                width="60px"
                margin="4px"
                _onClick={() => {
                  history.push(`/write/${props.id}`);
                }}
              >
                수정
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.image_url} />
        </Grid>
        <Grid padding="16px">
          <Text margin="0px" bold>
            댓글 {props.comment_cnt}개
          </Text>
        </Grid>
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
