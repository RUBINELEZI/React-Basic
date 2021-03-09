import React from 'react';

const Search = ({placeholder, change}) => {

    return (
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">Mjeket Tane</a>
        <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder={placeholder} onChange={change}/>
        </form>
    </nav>
    );
};

export default Search