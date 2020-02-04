import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Request from '../helpers/Request';
import SpeciesList from '../components/species/SpeciesList';
import Species from '../components/species/Species';


class SpeciesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            species: [],
            type: {}
        }
        this.handleSelectedSpecies = this.handleSelectedSpecies.bind(this); 
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


   handleSelectedSpecies(type){
       this.setState({type: type})
   }


    render() {
        return (
       <div>
           <SpeciesList species={this.state.species} handleSelectedSpecies={this.handleSelectedSpecies}/> 
       </div>
        )
    }

}

export default SpeciesContainer;