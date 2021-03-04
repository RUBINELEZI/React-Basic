import React from 'react';
import './SingleCard.css'


const singleCard = (props) => {

    return (
        <div className='col-md-4'>
            <div className='card doctor'>
               <a className='stretched-link' href={props.user.profilePage}></a> <img src={props.user.image} alt=""/>
                <h4>{props.user.name}</h4>
                <span>{props.user.title}</span>
            </div>
        </div>
    )
};

export default singleCard;