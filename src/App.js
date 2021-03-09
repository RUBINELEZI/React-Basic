import './App.css';
import React, {Component} from "react";
import {Cart} from "./components/cart/cart.comoponemt.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import Search from "./components/search/search.componetn";
import {Categories} from "./components/categories/categories"

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            searchField: '',
            displayState: false
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

    categoryState = () => {
        this.setState({displayState: !this.state.displayState})

    };

    render() {
        const {users, searchField, displayState} = this.state
        let filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchField.toLowerCase()) || user.title.toLowerCase().includes(searchField.toLowerCase()))

        let titles = users.map(user => user.title)
        titles = [...new Set(titles)]

        return (
            <div className="App container ">
                <Search
                    placeholder='Search for doctor or title'
                    change={this.typingValue}
                />
                <br/>
                <button type={"button"} onClick={this.categoryState} className={'w-75 mb-2 btn btn-info'}>Filtro Sipas Kategorise</button>
                <Categories
                    display={displayState}
                    titles={titles} />
                <br/>
                <Cart users={filteredUsers}/>
            </div>
        );
    }
}

export default App;
