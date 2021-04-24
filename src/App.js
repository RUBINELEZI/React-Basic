import './App.css';
import React, {useEffect} from "react";
import {Cart} from "./components/cart/cart.comoponemt.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import Search from "./components/search/search.componetn";
import {Categories} from "./components/categories/categories"
import {useDispatch, useSelector} from "react-redux";
import {userAction} from "./redux/actions/userAction";
import {btnClickAction} from "./redux/actions/btnClickAction";

function App() {
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        fetch('https://mjeket.herokuapp.com/doctors/api/allDoctors')
            .then(res => res.json())
            .then(res => dispatch(userAction(res)))
    }, []);

    const users = useSelector(state => state.user)
    const searchValue = useSelector(state => state.searchValue)
    const btnState = useSelector(state => state.btn)

    let filteredUsers =
        users.filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.title.toLowerCase().includes(searchValue.toLowerCase()))

    const dispatch = useDispatch()
    let btnStateHandler = () => {
        dispatch(btnClickAction(btnState))
    }

    return (
        <div className="App container ">
            <Search
                placeholder='Search for doctor or title'
            />
            <br/>
            <button type={"button"} onClick={btnStateHandler} className={'w-75 mb-2 btn btn-info'}>Filtro Sipas
                Kategorise
            </button>
            <Categories
            />
            <br/>
            <Cart users={filteredUsers}/>
        </div>
    );
}

export default App;
