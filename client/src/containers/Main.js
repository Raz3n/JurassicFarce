import React, { Component, Fragment } from "react";

import PaddockContainer from "./PaddockContainer";
import DinosaurContainer from "./DinosaurContainer";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SpeciesContainer from "./SpeciesContainer";

class Main extends Component {
  render() {
    return (
        <div>
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dinosaurs" component={DinosaurContainer} />
            <Route path="/paddocks" component={PaddockContainer} />
            <Route path="/species" component={SpeciesContainer}/> 
          </Switch>
        </Fragment>
      </Router>
      <SideBar />
      </div>
    );
  }
}

export default Main;
