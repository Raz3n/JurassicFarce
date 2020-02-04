import React, { Component } from "react";
import Request from '../helpers/Request';

class VisitorTracker extends Component {
  constructor() {
    super();
    this.state = {
      visitorCount: 300,
      dinosaurs: []
    };
    this.addVisitors = this.addVisitors.bind(this);
    this.nukePark = this.nukePark.bind(this);
  }

  componentDidMount() {
    const request = new Request();
        request.get('/dinosaurs')
            .then((data) => {
                this.setState({
                    dinosaurs: data._embedded.dinosaurs
                })
            })

    setInterval(() => this.addVisitors(), 4000)
  }

  nukePark() {
    this.state.dinosaurs.forEach(dinosaur => {
    const request = new Request();
    request.delete('/dinosaurs/' + dinosaur.id).then(() => {
      window.location = '/dinosaurs';
    });
  })
  }

  addVisitors() {
    this.setState(state => ({
      visitorCount: state.visitorCount + Math.floor(Math.random() * (10 - 1) + 1)
    }))
  }

  render() {
    return (
      <div className="topTracker">
        <div className="buttonTracker">
          <h2>PARK</h2>
          <button className="killAll" onClick={this.nukePark}>
            <img src="../gun.svg" /> <p>KILL ALL </p></button>
        </div>

        <p><span>Visitor Count:</span>{this.state.visitorCount}</p>
        <p><span>Days since last incident:</span> 0</p>
      </div>
    );
  }
}

export default VisitorTracker;
