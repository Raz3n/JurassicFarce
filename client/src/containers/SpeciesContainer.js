import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Request from '../helpers/Request';
import SpeciesList from '../components/species/SpeciesList';


class SpeciesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            species: []
        }
    }

    componentDidMount() {
        const request = new Request();
        request.get('/species')
            .then((data) => {
                this.setState({
                    species: data._embedded.species
                })
            })
    }
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route render={(props) => {
                            return <SpeciesList species={this.state.species} />
                        }} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }

}

export default SpeciesContainer;