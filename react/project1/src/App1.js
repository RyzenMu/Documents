import React, {Component} from "react";
import './App.css';
import PropTypes from 'prop-types';

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

  render(props){

    return(
      <div>
      <h1> This is Child Component of App Component</h1>
      <h2>My name is {this.state.name} </h2>
      <button type='button' onClick = {this.fun1()}>Full Name</button>
      <h1>{this.props.name}</h1>
      <div className="table">
        <table>
          <tr>
            <th>type</th>
            <th>Value</th>
            <th>valid</th>
          </tr>
          <tr>
            <td>Array</td>
            <td>{this.props.propArray}</td>
            <td>{this.props.propArray ? 'true' : 'false'}</td>
          </tr>
          <tr>
            <td>Number</td>
            <td>{this.props.propNumber}</td>
            <td>{this.props.propNumber ? 'true' : 'false'}</td>
          </tr>
          <tr>
            <td>String</td>
            <td>{this.props.propString}</td>
            <td>{this.props.propString ? 'true' : 'false'}</td>
          </tr>
        </table>
      </div>
      </div>

    )
  }
}

App1.defaultProps = {
  name : 'Selavakumar',
};

App1.PropTypes = {
  propArray : PropTypes.array.isRequired,
  propNumber : PropTypes.number.isRequired,
  propString : PropTypes.string.isRequired,
}

App1.defaultProps = {
  propArray : [1, 2, 3], 
  propNumber : 1,
  propString : "Tr",
}

export default App1;


