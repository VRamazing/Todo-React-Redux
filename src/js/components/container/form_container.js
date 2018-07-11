import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from '../presentational/input';
import ToDoList from './to_do_list';

function initDate() {
  const date = new Date();
  let month = (date.getMonth() + 1);
  month = month / 10 === 0 ? month : `0${month}`;
  let dateInMonth = date.getDate();
  dateInMonth = dateInMonth / 10 !== 0 ? dateInMonth : `0${dateInMonth}`;
  let hours = date.getHours();
  hours = hours / 10 !== 0 ? hours : `0${hours}`;
  let mins = date.getMinutes();
  mins = mins / 10 !== 0 ? mins : `0${mins}`;
  const initialDate = `${date.getFullYear()}-${month}-${dateInMonth}T${hours}:${mins}`;
  return initialDate;
}

class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      taskTitle: '',
      taskDescription: '',
      taskDueDate: initDate(),
      list: [
        { title: 'Start a Company', description: 'Before december', due: '2018-07-10T23:36' },
        { title: 'Exercise everyday', description: '6 packs', due: '2018-07-10T23:36' },
        { title: 'Play game', description: 'It\'s so fun', due: '2018-07-10T23:36' },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }


  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
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


    if (todo.title !== undefined) {
      setTimeout(() => { window.alert(`${todo.title} is due completion`); }, dueTimeSecond - todayTimeSecond);
    }

    this.setState({
      taskTitle: '',
      taskDescription: '',
      taskDueDate: todaysDate,
      list: newList,
    });
  }

  onDelete(item) {
    const updatedList = this.state.list.filter((val, index) => item !== val);

    this.setState({
      list: updatedList,
    });
  }

  onEdit(item) {
    this.state.taskTitle = item.title;
    this.state.taskDescription = item.description;

    console.log(this.state);
    this.onDelete(item);
  }

  render() {
    // console.log(this.state.taskDueDate);
    const { taskTitle } = this.state;
    const { taskDescription } = this.state;
    const { taskDueDate } = this.state;

    const Todos = this.state.list.map((item, index) => (<ToDoList todo = {item} onDelete = {this.onDelete} key = {index} onEdit = {this.onEdit}/>));

    return (

      <div className = 'row'>

        <div className = 'col-md-6'>

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

        </div>


          <ul style = {{ marginTop: '10px' }}>
            {Todos}
          </ul>


      </div>

    );
  }
}
export default FormContainer;
