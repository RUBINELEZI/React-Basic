import React from 'react'
import "./categories.css";
import SingleCategory from '../SingleCategory/SingleCategory'
import { useSelector, useDispatch } from "react-redux";
import { bntAction } from "../../redux/actions/btnAction";

export const Categories = (props) => {
    const btnState = useSelector(state => state.btn) 
    let displayState = btnState ? '' : 'none';
    return <div className='cart' style={{display: displayState}}>

        <div className='p-0 m-0 row'>
            {
                props.titles.map(title =>
                    <SingleCategory  title={title}/>)
            }
        </div>

    </div>
}