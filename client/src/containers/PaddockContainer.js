import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Request from "../helpers/Request";
import PaddockList from "../components/paddocks/PaddockList";
import Paddock from "../components/paddocks/Paddock";

class PaddockContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paddocks: [],
      selectedPaddock: {}
    };

    this.handleSelectedPaddock = this.handleSelectedPaddock.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get("/paddocks").then(data => {
      this.setState({
        paddocks: data._embedded.paddocks
      });
    });
  }

  handleSelectedPaddock(paddock) {
    this.setState({ selectedPaddock: paddock });
  }

  render() {
    return (
      <>
        <Router>
          <Fragment>
            <Switch>
              <Route
                render={props => {
                  return (
                    <PaddockList
                      paddocks={this.state.paddocks}
                      handleSelectedPaddock={this.handleSelectedPaddock}
                    />
                  );
                }}
              />
            </Switch>
          </Fragment>
        </Router>
      </>
    );
  }
}

export default PaddockContainer;
