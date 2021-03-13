import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { searchAction } from "../../redux/actions/searchAction";

const Search = ({placeholder, change}) => {
    const dispatch = useDispatch()
    return (
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">Mjeket Tane</a>
        <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder={placeholder} onChange={(e) => dispatch(searchAction(e.target.value))}/>
        </form>
    </nav>
    );
};

export default Search