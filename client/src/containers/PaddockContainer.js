import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Request from '../helpers/Request';
import PaddockList from '../components/paddocks/PaddockList';

class PaddockContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            paddocks: []
        }
    }

    componentDidMount() {
        const request = new Request();
        request.get('/paddocks')
            .then((data) => {
                this.setState({
                    paddocks: data._embedded.paddocks
                })
            })
    }
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route render={(props) => {
                            return <PaddockList paddocks={this.state.paddocks} />
                        }} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }

}

export default PaddockContainer;