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
    }

    componentDidMount() {
        const request = new Request();
        request.get('/dinosaurs')
        // .then(data => console.log(data))
            .then((data) => {
                this.setState({
                    dinosaurs: data._embedded.dinosaurs
                })
            })
            .then(() => {
                request.get('/paddocks')
                .then((data) => {
                    this.setState({
                        paddocks: data._embedded.paddocks
                    })
                })
            })
    }

    handleMoveDinosaur(newPaddock, dinoID) {
        
        const request = new Request();
        request.patch('/dinosaurs/' + dinoID, {paddock: newPaddock}).then(() => {
            window.location = '/dinosaurs'
        })
    }

    handleFeedDino(dino) {
        if(dino.stomach < dino.stomachCapacity) {
        const newStomach = dino.stomach + 1
        const request = new Request();
        request.patch('/dinosaurs/' + dino.id, {stomach: newStomach}).then(() => {
            window.location = '/dinosaurs'
        })}
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
                            handleFeedDino={this.handleFeedDino} /> }} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }

}

export default DinosaurContainer;