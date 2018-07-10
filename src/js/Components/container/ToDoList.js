import React, { Component } from "react";
import ReactDOM from "react-dom";
import FormsContainer from "../container/FormContainer";



class ToDoList extends Component {

  constructor() {
    super();
  }

  render() {
   
    const items = this.props.todo.map((item,index)=>{
     return( <li key={index}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </li>);

    });
    return (<div> <ul> {items} </ul> </div>);

  }

}
export default ToDoList;

