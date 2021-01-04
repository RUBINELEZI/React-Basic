import './App.css';
import React, { Component } from "react";
import { Cart } from "./components/cart/cart.comoponemt.jsx";
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component{
  constructor(){
    super();

    this.state = {
      users: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => this.setState({users: res}))
  }

  render(){
    return (
      <div  className="App container ">
            <Cart users={this.state.users} />
      </div>
    );
  }
}

export default App;
