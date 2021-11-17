import {
  BrowserRouter,
  Route,
  useHistory,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Imagespage from "./pages/Imagespage";
import Mainpage from "./pages/Mainpage";
import Mypage from "./pages/Mypage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Uploadpage from "./pages/Uploadpage";
import axios from "axios";
import styled from "styled-components";

import "./App.css";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState(null);
  const history = useHistory();
  const isAuthenticated = () => {
    axios
      .get("http://jump-to-hobby/users/info")
      .then((res) => {
        setIsLogin(true);
        setUserinfo(res.data.data.userInfo);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Mainpage />
          </Route>
          <Route path="/login">
            <Login
              isLogin={isLogin}
              handleResponseSuccess={handleResponseSuccess}
            />
          </Route>
          <Route path="/signup">
            <Signup isLogin={isLogin} />
          </Route>
          <Route path="/mypage">
            <Mypage />
          </Route>
          <Route path="/images">
            <Imagespage />
          </Route>
          <Route path="/upload">
            <Uploadpage />
          </Route>
          <Route exact path="/">
            {isLogin ? <Redirect to="/mypage" /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <div>
        <div>Modal</div>
        <Modal />
      </div> */}
    </>
  );
}
