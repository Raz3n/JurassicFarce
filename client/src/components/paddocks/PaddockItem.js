import React from 'react';
import Paddock from './Paddock'; 
import {Link} from 'react-router-dom';

const PaddockItem = ({Paddock}) => {
    if (!Paddock){
        return "...loading paddocks"
    }

    const editURL = "/paddocks/" + paddocks.id + "/edit"

    return(

        <div> 
            <Paddock paddock={paddock}/> 
            <Link to={editURL}><button type='button'> Edit {paddock.name} </button> </Link>

        </div>


    )

}
 export default PaddockItem; 


