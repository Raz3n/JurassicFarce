import React, {Component, Fragment} from 'react';
import DinoContainer from '../containers/DinoContainer';
import NavBar from '../containers/NavBar';
import Home from '../containers/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <Router>
            <Fragment>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/dinosaurs" component={DinoContainer} />
                </Switch>
                
            </Fragment>
            </Router>
        );
        } 
}

export default Main;
