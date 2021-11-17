import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  Redirect,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Imagespage from "./pages/Imagespage";
import Mainpage from "./pages/Mainpage";
import Mypage from "./pages/Mypage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Uploadpage from "./pages/Uploadpage";
import "./App.css";

export default function App() {
  const [isLogin, setIsLogin] = useState(false); // 로그인한 사람만 마이페이지로 갈 수 있게함.
  const [accessToken, setAccessToken] = useState("");

  const history = useHistory();

  const isAuthenticated = (res) => {
    setAccessToken(res); // accessToken 저장해서 마이페이지에 전달하기
    setIsLogin(true);
    history.push("/");
  };
  const handleResponseSuccess = (res) => {
    isAuthenticated(res);
  };

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/mainpage">
            <Mainpage />
          </Route>
          <Route exact path="/login">
            <Login handleResponseSuccess={handleResponseSuccess} />
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
          <Route path="/">
            {isLogin ? <Redirect to="/mypage" /> : <Redirect to="/mainpage" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
