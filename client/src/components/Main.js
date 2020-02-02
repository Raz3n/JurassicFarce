import React, { Component, Fragment } from "react";
import DinoContainer from "../containers/DinoContainer";
import PaddockContainer from "../containers/PaddockContainer";
import NavBar from "../containers/NavBar";
import SideBar from "../containers/SideBar";
import Home from "../containers/Home";
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
            <Route path="/dinosaurs" component={DinoContainer} />
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
