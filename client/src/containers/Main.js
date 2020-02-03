import React, { Component, Fragment } from "react";

import PaddockContainer from "./PaddockContainer";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Main extends Component {
  render() {
    return (
        <div>
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/dinosaurs" component={DinoContainer} /> */}
            <Route path="/paddocks" component={PaddockContainer} />
          </Switch>
        </Fragment>
      </Router>
      <SideBar />
      </div>
    );
  }
}

export default Main;
