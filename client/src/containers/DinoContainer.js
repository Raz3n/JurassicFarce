import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from './react-router-dom';
import Request from '../helpers/request';
import DinoList from '../components/dinosaurs/DinoList';

class DinoContainer extends Component{
constructor(props){
    super(props);
    this.state = {
        dinosaurs: []
    }
}

componentDidMount(){
    const request = new Request();

    request.get('/dinosaurs')
    .then((data) => {
        this.setState({ dinosaurs: data._embedded.dinosaurs})
    })
}

  
render(){
    return(
        <Router>
            <Fragment>
                <Switch>
                    <Route render={(props) => {
                        return <DinoList dinosaurs={this.state.dinosaurs}/>
                    }}/>
                </Switch>
            </Fragment>
        </Router>
    )

}



}

export default DinoContainer;