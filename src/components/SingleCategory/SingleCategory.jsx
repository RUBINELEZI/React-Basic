import React ,{useEffect, useState} from 'react'
import './singleCategory.css'
import { useSelector, useDispatch} from "react-redux";
import {categoryAction} from "../../redux/actions/categoryAction";
import {userAction} from "../../redux/actions/userAction";
const SingleCategory = ({title}) => {

    const dispatch = useDispatch()
    let handleClick = (e) =>{
        // fetch("http://mjeket.herokuapp.com/doctors/api/alldoctors/" + e.target.innerText)
        //     .then(response => response.json())
        //     .then(data =>  )
        dispatch(categoryAction(e.target.innerText))
    }

    return (
        <div onClick={handleClick} className='col-md-3 col-sm-6'>
            <div className='card doctor'>
                <span>{title}</span>
            </div>
        </div>
    )
};

export default SingleCategory;