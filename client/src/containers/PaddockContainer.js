import React, { Component, Fragment } from "react";
import Request from "../helpers/Request";
import PaddockList from "../components/paddocks/PaddockList";
import SideBar from "./SideBar";

class PaddockContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paddocks: [],
      selectedPaddock: {}
    }
    this.handleSelectedPaddock = this.handleSelectedPaddock.bind(this);
    this.handleAddPaddock = this.handleAddPaddock.bind(this);
    this.getPaddocks = this.getPaddocks.bind(this);
  }

  componentDidMount() {
    this.getPaddocks()
  }

  getPaddocks() {
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

  handleAddPaddock(paddock) {
    const request = new Request();
    request.patch("/paddocks/" + paddock.id, {available: "true"}).then(() => {
      this.getPaddocks()
    })
    
    }
  

  render() {
    return (
      <div className="mainContainer">
        <div className="mainBody">
          <PaddockList
            paddocks={this.state.paddocks}
            handleSelectedPaddock={this.handleSelectedPaddock}
          />
        </div>
        <SideBar selectedPaddock={this.state.selectedPaddock}
        handleAddPaddock={this.handleAddPaddock} />
      </div>

    );
  }
}

export default PaddockContainer;
