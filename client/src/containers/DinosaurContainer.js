import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Request from '../helpers/Request';
import DinosaurList from '../components/dinosaurs/DinosaurList';
import DinosaurItem from '../components/dinosaurs/DinosaurItem';

class DinosaurContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dinosaurs: []
        }
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
    }
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route render={(props) => {
                            return <DinosaurList dinosaurs={this.state.dinosaurs}/> }}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }

}

export default DinosaurContainer;