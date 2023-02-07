import React, {Component} from "react";
import './App.css';

class App1 extends Component {

  constructor(props){
    super(props);
    this.state = { name :'Muruga'};
    this.fun1 = this.fun1.bind(this);
    
  }

  fun1 = () => {
    this.setState({
      name :  'Muruganantham'
    });
  }

  render(){

    return(
      <div>
      <h1> This is Child Component of App Component</h1>
      <h2>My name is {this.state.name} </h2>
      <button type='button' onClick = {this.fun1()}>Full Name</button>
      </div>

    )
  }
}

export default App1;


