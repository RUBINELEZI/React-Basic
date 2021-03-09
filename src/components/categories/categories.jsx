import React from 'react'
import "./categories.css";
import SingleCategory from '../SingleCategory/SingleCategory'

export const Categories = (props) => {
    let displayState = props.display ? '' : 'none';
    return <div className='cart' style={{display: displayState}}>

        <div className='p-0 m-0 row'>
            {
                props.titles.map(title =>
                    <SingleCategory  title={title}/>)
            }
        </div>

    </div>
}