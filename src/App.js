import './App.css';
import React, {Component} from "react";
import {Cart} from "./components/cart/cart.comoponemt.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import Search from "./components/search/search.componetn";

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://mjeket.herokuapp.com/doctors/api/allDoctors')
            .then(res => res.json())
            .then(res => this.setState({users: res}))
    }

    typingValue = (e) => {
        this.setState({searchField: e.target.value})
    };

    render() {
        const {users, searchField} = this.state
        let filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchField.toLowerCase()) || user.title.toLowerCase().includes(searchField.toLowerCase()))

        return (
            <div className="App container ">
                <Search placeholder='Search for doctor or title' change={this.typingValue}/>
                <br/>
                <br/>
                <Cart users={filteredUsers}/>
            </div>
        );
    }
}

export default App;
