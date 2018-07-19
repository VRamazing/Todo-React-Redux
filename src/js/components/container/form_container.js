import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from '../presentational/input';
import ToDoList from './to_do_list';
import PropTypes from 'prop-types';
import initDate from './getDate.js'; 

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
    this.state.taskDueDate = initDate();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value });
    this.props.stateChangeFunc({[event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state = this.props.state;
    const todo = {
      title: this.state.taskTitle,
      description: this.state.taskDescription,
      due: this.state.taskDueDate,
    };

    const newList = this.state.list.slice();
    newList.push(todo);

    const todaysDate = initDate();
    const dueTimeSecond = new Date(todo.due).getTime();
    const todayTimeSecond = new Date(todaysDate).getTime();

    //Setting reminder
    if (todo.title !== undefined) {
      setTimeout(() => { window.alert(`${todo.title} is due completion`); }, dueTimeSecond - todayTimeSecond);
    }

    this.props.stateChangeFunc({
      list: newList,
    });
  } 

  render() {
    this.state = this.props.state;
    const { taskTitle } = this.state;
    const { taskDescription } = this.state;
    const { taskDueDate } = this.state;

    return (

          <form id='article-form' style = {{ width: '100%' }}>

            <Input
              text='Enter task'
              label='Task title'
              type='text'
              id='taskTitle'
              value={taskTitle}
              handleChange={this.handleChange}
            />

            <Input
              text='Enter description'
              label='Task description'
              type='text'
              id='taskDescription'
              value={taskDescription}
              handleChange={this.handleChange}
            />

            <Input
              text=''
              label='Pick due date'
              type='datetime-local'
              id='taskDueDate'
              value={taskDueDate}
              handleChange={this.handleChange}
            />

            <button type = 'submit' className = 'btn btn-info' onClick = {this.handleSubmit}>Add item</button>
          </form>

    );
  }
}

FormContainer.propTypes = {
  state : PropTypes.object.isRequired
}

export default FormContainer;
