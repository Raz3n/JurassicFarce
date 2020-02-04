import React from 'react';


const Paddock = ({ paddock }) => {

    if (!paddock) {
        return "Loading"
    }

    return (

        <div className="paddockItem">
            <img src={paddock.pimage} className="paddockImg"/>
            <div className="paddockData">
                <div className="row01Data">
                     <p>{paddock.name}</p>
                     <p className="smText">PADDOCK 0{paddock.id}</p>
                  
                </div>
                <div className="row02Data">
                    <p>CAPACITY: 0{paddock.capacity}</p>
                     <div className="row02DataInner">
                        <p>ACTIVITY: {paddock.available}</p>
                        <div className="infoStatus" style={{background: "#4eef4e"}}></div>
                     </div>
                </div>
                 
            </div>
         
        </div>
    )
}

export default Paddock;