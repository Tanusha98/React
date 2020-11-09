import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../components/dashboard/dashboard";
import Home from "../components/home/home";
import Memes from "../components/menu-modules/memes/memes";
import Login from "../components/user/login/login";
import Signup from "../components/user/registration/registration";
import NotFound from "./not-found/not-found";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/memes">
        <Memes />
      </Route>
      <Route exact path="/logout">
        <Redirect to="/home" />
        {/* <Home /> */}
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
