import React from 'react';

const Search = ({placeholder, change}) => {
    return (
        <div>
            <input type="text" placeholder={placeholder} onChange={change}/>
        </div>
    );
};

export default Search