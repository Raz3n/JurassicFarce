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
            loading: true
        }
        this.handleMoveDinosaur = this.handleMoveDinosaur.bind(this);
        this.handleDeleteDino = this.handleDeleteDino.bind(this);
        this.handleFeedDino = this.handleFeedDino.bind(this);
        this.getDinos = this.getDinos.bind(this);
        this.getPaddocks = this.getPaddocks.bind(this);
        this.dinoGetsHungry = this.dinoGetsHungry.bind(this);
        this.hungerTimer = this.hungerTimer.bind(this);
    }

    componentDidMount() {
        Promise.all([this.getDinos(), this.getPaddocks()])
            .then(([dinoData, paddockData]) => {
                this.setState({
                    loading: false,
                    dinosaurs: dinoData._embedded.dinosaurs,
                    paddocks: paddockData._embedded.paddocks
                })
            });
        this.hungerTimer();
         
    }

    hungerTimer() {
        return setInterval(() => this.dinoGetsHungry(), 8000)
    }

    getDinos() {
        const request = new Request;
        return request.get("/dinosaurs");
    }

    getPaddocks() {
        const request = new Request;
        return request.get("/paddocks");
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
                this.getDinos().then((data) => {
                    this.setState({dinosaurs: data._embedded.dinosaurs})
                })
            })
        }

    }

    handleDeleteDino(id) {
        const request = new Request();
        request.delete('/dinosaurs/' + id).then(() => {
            this.getDinos().then((data) => {
                this.setState({dinosaurs: data._embedded.dinosaurs})
            })
        });
    }

    dinoGetsHungry() {
        this.setState(state => ({
            dinosaurs: {stomach: state.dinosaurs.stomach - 1} 
          }))
        const request = new Request();
        request.patch('/dinosaurs/', this.state.dinosaurs).then(() => {
            this.getDinos().then((data) => {
                this.setState({dinosaurs: data._embedded.dinosaurs})
            })
        })
    }

    render() {
        if(this.state.loading) {
            return <p>Loading...</p>
        }

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