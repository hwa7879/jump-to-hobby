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
import axios from "axios";

export default function App() {
  const [isLogin, setIsLogin] = useState(false); // 로그인한 사람만 마이페이지로 갈 수 있게함.
  const [accessToken, setAccessToken] = useState("");
  const [loginInfo, setLoginInfo] = useState("");

  // const history = useHistory();

  const isAuthenticated = () => {
    // accessToken 저장해서 마이페이지에 전달하기
    // setIsLogin(true);
    // history.push("/");
    // console.log("sdfdsfdsf");
    // alert(accessToken);

    axios
      .get("http://localhost:80/userInfo", {
        headers: {
          authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          //authorization로 토큰 보냄
        },
        withCredentials: true,
      })
      .then((res) => {
        // console.log("aaaa");
        console.log(res);

        // setLoginInfo(res.data.data.userInfo);
      });
  };

  const handleResponseSuccess = (res) => {
    setAccessToken(res);
    isAuthenticated();
    //console.log(accessToken);

    // console.log(res);
    //history.push("/mypage");
  };

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Mainpage />
          </Route>
          <Route exact path="/login">
            <Login handleResponseSuccess={handleResponseSuccess} />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/mypage">
            <Mypage loginInfo={loginInfo} />
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
