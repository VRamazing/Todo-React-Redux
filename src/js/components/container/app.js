import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './form_container';
import ToDoList from '../presentational/to_do_list';

class App extends Component {
  constructor() {
    super();

    this.state = {
      taskTitle: '',
      taskDescription: '',
      taskDueDate: '',
      list: [
        { title: 'Start a Company', description: 'Before december', due: '2018-07-10T23:36' },
        { title: 'Exercise everyday', description: '6 packs', due: '2018-07-10T23:36' },
        { title: 'Play game', description: 'It\'s so fun', due: '2018-07-10T23:36' },
      ],
    };

    this.onStateChange = this.onStateChange.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);

  }

  onStateChange(state){
    this.setState(state);
  }

  onDelete(item) {
    const updatedList = this.state.list.filter((val, index) => item !== val);

    this.setState({
      list: updatedList,
    });
  }

  onEdit(item) {
    this.setState({
      taskTitle: item.title,
      taskDescription: item.description,
      taskDueDate: item.due
    })
    this.onDelete(item);
  }

  render() {
    const state = this.state;

    const Todos = state.list.map((item, index) => (<ToDoList todo = {item} 
                                                                  onDelete = {this.onDelete} 
                                                                  key = {index} 
                                                                  onEdit = {this.onEdit}/>));


    return (
    
      <div className = 'row'>
        <div className = 'col-md-6'>
          <FormContainer state = {state} stateChangeFunc = {this.onStateChange} />
       </div>
        
        <div className = 'col-md-6'>
          <ul style = {{ marginTop: '10px' }}>
            {Todos}
          </ul>
        </div>

      </div>

    );
  }
}

export default App;
