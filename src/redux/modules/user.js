import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { getCookie, setCookie, deleteCookie } from "../../shared/Cookie";

import { auth } from "../../shared/firebase";
import firebase from "firebase/app";

// actions
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// action creators
const setUser = createAction(SET_USER, (user) => ({ user }));

const logOut = createAction(LOG_OUT, (user) => ({ user }));

const getUser = createAction(GET_USER, (user) => ({ user }));

//initialState
const initialState = {
  user: null,
  is_login: false,
};

const user_initial = {
  user_name: "minju",
};

//middlewar actions
const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    auth
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        auth
          .signInWithEmailAndPassword(id, pwd)
          .then((user) => {
            console.log(user);
            dispatch(
              setUser({
                user_name: user.user.displayName,
                id: id,
                user_profile: "",
                uid: user.user.uid,
              })
            );
            history.push("/");
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
          });
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };
};

const signUpFB = (id, pwd, user_name) => {
  return function (dispatch, getState, { history }) {
    auth
      .createUserWithEmailAndPassword(id, pwd)
      .then((user) => {
        console.log(user);
        auth.currentUser
          .updateProfile({
            displayName: user_name,
          })
          .then(() => {
            dispatch(
              setUser({
                user_name: user_name,
                id: id,
                user_profile: "",
                uid: user.user.uid,
              })
            );
            history.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);
        // ..
      });
  };
};

const loginCheckFB = () => {
  return function (dispatch, getState, { history }) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // 이미 로그인이 된 상태면 세션이 이 정보를 가지고 있을 것이다
        // 따라서 firebase가 저징히고 있는 세션 정보를 firebase함수를 이용해서 들고와서
        // 그 값을 다시 우리의 리덕스에 넣어주는 것
        dispatch(
          setUser({
            user_name: user.displayName,
            user_profile: "",
            id: user.email,
            uid: user.uid,
          })
        );
      } else {
        dispatch(logOut());
      }
    });
  };
};

const logoutFB = () => {
  return function (dispatch, getState, { history }) {
    auth.signOut().then(() => {
      dispatch(logOut());
      //replace는 push 와 달리 '/'이동을 하면 뒤로가기로 못감
      history.replace("/");
    });
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export

const actionCreators = {
  logOut,
  getUser,
  loginFB,
  signUpFB,
  loginCheckFB,
  logoutFB,
};

export { actionCreators };
