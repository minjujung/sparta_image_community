import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCookie, deleteCookie } from "../shared/Cookie";

import { Grid, Text, Button } from "../elements";
import Permit from "../shared/Permit";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;
  console.log(is_session);

  if (is_session) {
    return (
      <Grid is_flex padding="4px 16px">
        <Text size="24px" bold margin="0px">
          안뇽
        </Text>
        <Grid is_flex>
          <Button text="내정보"></Button>
          <Button
            text="알림"
            _onClick={() => {
              history.push("/notice");
            }}
          ></Button>
          <Button
            text="로그아웃"
            _onClick={() => dispatch(userActions.logoutFB())}
          ></Button>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid is_flex padding="4px 16px">
      <Text size="24px" bold margin="0px">
        안뇽
      </Text>
      <Grid is_flex>
        <Button
          text="로그인"
          _onClick={() => {
            history.push("/login");
          }}
        ></Button>
        <Button
          text="회원가입"
          _onClick={() => {
            history.push("/signup");
          }}
        ></Button>
      </Grid>
    </Grid>
  );
};

export default Header;
