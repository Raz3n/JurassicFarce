import React, {Component} from 'react';
import Request from '../../helpers/Request';

class DinosaurCreateForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            paddocks = [],
            name = "",
            sex = 'F', 
            stomach = 0,
            stomach_capacity = 0
            //selectedSpecies
        }
        this.handleName = this.handleName.bind(this);
    }



    componentDidMount(){
        const request = new Request();
        request.get('/paddocks').then((data) => {
            this.setState({paddocks: data._embedded.paddocks})
        })
    }

    handleName(event){
        this.setState({name: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        const newDinosaur = {
            name: this.state.name
        }
    }




}
