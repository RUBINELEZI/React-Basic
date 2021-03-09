import React from 'react';
import './singleCategory.css'

const SingleCategory = (props) => {

    let test = () =>{
        console.log('works')
    }
    return (
        <div onClick={test} className='col-md-3 col-sm-6'>
            <div className='card doctor'>
                <span>{props.title}</span>
            </div>
        </div>
    )
};

export default SingleCategory;