import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Request from '../helpers/Request';
import DinosaurList from '../components/dinosaurs/DinosaurList';


class DinosaurContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dinosaurs: [],
            paddocks: [],
        }
        this.handleMoveDinosaur = this.handleMoveDinosaur.bind(this);
        this.handleDeleteDino = this.handleDeleteDino.bind(this);
        this.handleFeedDino = this.handleFeedDino.bind(this);
        this.getDinos = this.getDinos.bind(this);
        this.getPaddocks = this.getPaddocks.bind(this);
    }

    componentDidMount() {
        this.getDinos();
        this.getPaddocks();
    }

    getDinos() {
        const request = new Request;
        request.get("/dinosaurs").then((data) => {
            this.setState({ dinosaurs: data._embedded.dinosaurs})
        })
    }

    getPaddocks() {
        const request = new Request;
        request.get("/paddocks").then((data) => {
            this.setState({ paddocks: data._embedded.paddocks})
        })
    }

    handleMoveDinosaur(newPaddock, dinoID) {

        const request = new Request();
        request.patch('/dinosaurs/' + dinoID, { paddock: newPaddock }).then(() => {
            this.getDinos()
        })
    }

    handleFeedDino(dino) {
        if (dino.stomach < dino.species.stomachCapacity) {
            const newStomach = dino.stomach + 1
            const request = new Request();
            request.patch('/dinosaurs/' + dino.id, { stomach: newStomach }).then(() => {
                this.getDinos()
            })
        }

    }

    handleDeleteDino(id) {
        const request = new Request();
        request.delete('/dinosaurs/' + id).then(() => {
            this.getDinos();
        });
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route render={(props) => {
                            return <DinosaurList dinosaurs={this.state.dinosaurs}
                                paddocks={this.state.paddocks}
                                handleMoveDinosaur={this.handleMoveDinosaur}
                                handleFeedDino={this.handleFeedDino}
                                handleDeleteDino={this.handleDeleteDino} />
                        }} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }

}

export default DinosaurContainer;