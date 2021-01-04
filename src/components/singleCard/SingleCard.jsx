import React from 'react';


const singleCard = (props) => {
    return (
            <div className='col-md-4' >
                <div className='card'><span>{props.user.id} </span>{props.user.name} </div>                  
            </div> 
    )    
};

export default singleCard;