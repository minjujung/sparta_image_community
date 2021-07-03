import React from "react";
import { Grid } from "../elements";
import Card from "../components/Card";

const Notice = (props) => {
  let noti = [
    {
      user_name: "momo",
      post_id: "post1",
      image_url: "",
    },
    {
      user_name: "momo",
      post_id: "post2",
      image_url: "",
    },
    {
      user_name: "momo",
      post_id: "post3",
      image_url: "",
    },
    {
      user_name: "momo",
      post_id: "post4",
      image_url: "",
    },
    {
      user_name: "momo",
      post_id: "post5",
      image_url: "",
    },
  ];
  return (
    <>
      <Grid padding="16px" bg="#EFF6FF">
        {noti.map((n) => (
          <Card key={n.post_id} {...n} />
        ))}
      </Grid>
    </>
  );
};

export default Notice;
