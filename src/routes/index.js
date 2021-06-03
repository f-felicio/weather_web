import React from "react";
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import Home from "../pages/Home";
import Day from "../pages/Day";

const hist = createBrowserHistory();

export default function Routes() {
  return (
    <Router history={hist}>
      <Switch>
        <Route exact path="/" component={withRouter(Home)} />
        <Route path="/:day" component={withRouter(Day)} />
      </Switch>
    </Router>
  );
}
