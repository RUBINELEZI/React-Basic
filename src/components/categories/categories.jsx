import React ,{useEffect, useState} from 'react'
import "./categories.css";
import SingleCategory from '../SingleCategory/SingleCategory'
import { useSelector, useDispatch } from "react-redux";
import { bntAction } from "../../redux/actions/categoryAction";
import {userAction} from "../../redux/actions/userAction";
import axios from "axios";

export const Categories = () => {
    const btnState = useSelector(state => state.btn)
    let [data, setData] = useState([])
    let displayState = btnState ? '' : 'none';
    let categories;

    useEffect(() => {
        fetch('https://mjeket.herokuapp.com/doctors/api/allDoctors')
            .then(res => res.json())
            .then(res => setData(res))
    }, [displayState]);

    let titles = data.map(user => user.title)
    titles = [...new Set(titles)]
    return <div className='cart' style={{display: displayState}}>

        <div className='p-0 m-0 row'>
            {
                titles.map(title =>
                    <SingleCategory  title={title}/>)
            }
        </div>

    </div>
}