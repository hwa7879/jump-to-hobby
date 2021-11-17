import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Imagespage from "./pages/Imagespage";
import Mainpage from "./pages/Mainpage";
import Mypage from "./pages/Mypage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Uploadpage from "./pages/Uploadpage";
import { useHistory } from "react-router-dom";

import "./App.css";

export default function App() {
  const [isLogin, setIsLogin] = useState(false); // 로그인한 사람만 마이페이지로 갈 수 있게함.
  const [accessToken, setAccessToken] = useState("");

  // const history = useHistory();

  // const isAuthenticated = (res) => {
  //   setAccessToken(res.data); // accessToken 저장해서 마이페이지에 전달하기
  //   setIsLogin(true);
  //   history.push("/");
  // };
  // const handleResponseSuccess = (res) => {
  //   isAuthenticated(res);
  // };

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Mainpage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/mypage">
            <Mypage accessToken={accessToken} />
          </Route>
          <Route exact path="/images">
            <Imagespage />
          </Route>
          <Route exact path="/upload">
            <Uploadpage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
