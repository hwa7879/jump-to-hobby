import React from "react";
import Imageboard from "./pages/Imageboard";
import Mainpage from "./pages/Mainpage";
import Mypage from "./pages/Mypage";
import Uploadboard from "./pages/Uploadboard";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const App = () => {
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
};

export default App;
