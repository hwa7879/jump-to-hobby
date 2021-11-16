import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import React, { useState } from "react";
import Imagespage from "./pages/Imagespage";
import Mainpage from "./pages/Mainpage";
import Mypage from "./pages/Mypage";
import Uploadpage from "./pages/Uploadpage";
import styled from "styled-components";
import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Mainpage />
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
        </Switch>
      </BrowserRouter>
    </>
  );
}
