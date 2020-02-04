import React from 'react';
import {Link} from 'react-router-dom';
import Species from './Species'

const SpeciesItem = ({species}) => {
    if (!species){
        return "...loading species"
    }


return(
    <div className='component'>
       <Species species = {species}/>
    </div>
)


}
 export default SpeciesItem;