import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import React, { useState } from "react";
import Imageboard from "./pages/Imageboard";
import Mainpage from "./pages/Mainpage";
import Mypage from "./pages/Mypage";
import Uploadboard from "./pages/Uploadboard";

import styled from "styled-components";

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
            <Imageboard />
          </Route>
          <Route path="/upload">
            <Uploadboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
