import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Permit from "./Permit";
import PostDetail from "../pages/PostDetail";
import CreatePost from "../pages/CreatePost";
import Search from "./Search";
import Notice from "../pages/Notice";

import { Header, Grid, Button } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { useEffect } from "react";

import { apiKey } from "./firebase";

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  //App.js 가 시작점이므로 로그인 상태 체크는 여기서!
  useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);
  return (
    <>
      <Grid>
        <Header></Header>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/post/:id" component={PostDetail} />
          <Route path="/write" exact component={CreatePost} />
          <Route path="/write/:id" exact component={CreatePost} />
          <Route path="/search" component={Search} />
          <Route path="/notice" component={Notice} />
        </ConnectedRouter>
      </Grid>
      <Permit>
        <Button
          is_float
          text="+"
          _onClick={() => {
            history.push("/write");
          }}
        ></Button>
      </Permit>
    </>
  );
}

export default App;
