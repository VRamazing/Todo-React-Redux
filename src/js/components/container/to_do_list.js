import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormsContainer from './form_container';

const buttonStyles = { padding: '5px', marginLeft: '5px', cursor: 'pointer' };


class ToDoList extends Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(item) {
    this.props.onEdit(this.props.todo);
  }

  handleDelete(item) {
    this.props.onDelete(this.props.todo);
    // console.log('Delete called');
  }

  render() {
    return (<div>
          <li>
            <h3>
              {this.props.todo.title}
              &nbsp;
              <button className = 'btn btn-warning' style = {buttonStyles} onClick = {this.handleEdit}>Edit</button>
              <button className = 'btn btn-danger' style = {buttonStyles} onClick = {this.handleDelete}>Delete</button>
            </h3>
            <span style = {{ color: '#acacac' }}>{this.props.todo.due}</span>
            <p>{this.props.todo.description}</p>
           </li></div>);
  }
}

export default ToDoList;
