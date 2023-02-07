import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import App1 from './App1';
import App2 from './App2';
import Demo from './Demo';

class App extends Component{

  mystyle = {
    color : 'blue',
    fontSize : '40px',
    background : 'red'
            }


  render(){
    var mystyle = {
      fontSize : 30,
      fontFamily : 'Courier',
      color : 'grey',
    }

    let i = 2;

    return(
      <div className='heading' >
        <h1>Code Binx</h1>
        <p style={mystyle} > Welcome to react course</p>
        <h1>{ i == 2 ? 'twoooo' : 'Something else'}</h1> 
        <App1 />
        <App2 />
        <Demo />
        
      </div>
    )
  }
}

class Details extends Component {

  render(){
    return (
      <div>
      <h2> This is dual component</h2>
      </div>
    )
  }
}

export default Details;
