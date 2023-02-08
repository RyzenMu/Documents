import React, {Component} from "react";

class NewComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            no : 55,
            companyName:''
        }

    }

    changeText(event){
        this.setState(
            {
                companyName : event.target.value,
            }
        )
    }

    Cha(event) {
        this.setState(
            {
                no: 34,
            }
        )
    }

    render(){
        return(
            <div>
            <button onClick={this.Cha()}>{this.state.no}</button>
            <label >Enter Company Name</label>
            <input type='text' onChange ={this.changeText.bind(this)} />
            <h3> you entered : {this.state.companyName}</h3>
            </div>
        )
    }


    }

    export default NewComponent;
