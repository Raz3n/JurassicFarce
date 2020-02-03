import React from 'react';
import {Link} from 'react-router-dom';
import Dinosaur from './Dinosaur'

const DinosaurItem = ({dinosaur}) => {
    if (!dinosaur){
        return "...loading dinosaurs"
    }

    


return(
    <div className='component'>
       <Dinosaur dinosaur = {dinosaur}/>
    </div>
)


}
 export default DinosaurItem;