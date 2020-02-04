// import React, { Component, Fragment } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Request from '../helpers/Request';
// import SpeciesList from '../components/species/SpeciesList';
// import Species from '../components/species/Species';


// class SpeciesContainer extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             paddocks = [],
//             name = "",
//             sex = 'F', 
//             stomach = 0,
//             stomach_capacity = 0,
//             species: [],
//             type: {}
//         }
//         this.handleSelectedSpecies = this.handleSelectedSpecies.bind(this); 
//         this.handleSelectedSex = this.handleSelectedSex.bind(this);
//         this.handleStomach = this.handleStomach.bind(this);
//         this.handleStomachCapacity = this.handleStomachCapacity.bind(this);
//     }

//     // componentDidMount() {
//     //     const request = new Request();
//     //     request.get('/species')
//     //         .then((data) => {
//     //             this.setState({
//     //                 species: data._embedded.species
//     //             })
//     //         })
//     // }

//     // componentDidMount(){
//     //     const request = new Request();
//     //     request.get('/paddocks').then((data) => {
//     //         this.setState({paddocks: data._embedded.paddocks})
//     //     })
//     // }

    
//    handleSelectedSpecies(type){
//        this.setState({type: type})
//    }

//    handleSelectedSex(event){
//        this.setState({sex: event.target.value})
//    }

//    handleStomach(event){
//        this.setState({stomach: event.target.value})
//    }

//    handleStomachCapacity(event){
//        this.setState({stomach_capacity: event.target.value})
//    }

//     render() {
//         return (
//        <div>
//            <SpeciesList species={this.state.species} handleSelectedSpecies={this.handleSelectedSpecies}/> 
//            <DinosaurCreateForm handleName={this.handleName} handleSelectedSex={this.handleSelectedSex} 
//            handleStomach={this.handleStomach} handleStomachCapacity={this.handleStomachCapacity}/> 
//        </div>
//         )
//     }

// }

// export default SpeciesContainer;