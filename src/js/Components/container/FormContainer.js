import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
import ToDoList from "../container/TodoList";


class FormContainer extends Component {

  constructor() {

    super();
   
    let date = new Date();
    let month = (date.getMonth() + 1 );
    month = month / 10 == 0 ? month : "0" + month;
    let dateInMonth = date.getDate();
    dateInMonth = dateInMonth / 10 != 0 ? dateInMonth : "0" + dateInMonth;
    let hours = date.getHours();
    hours = hours / 10 != 0 ? hours : "0" + hours;
    let mins = date.getMinutes();
    console.log(mins);
    mins = mins / 10 != 0 ? mins : "0" + mins;
    let initialDate = date.getFullYear() + "-" + month + "-" + dateInMonth + "T" + hours + ":" + mins;
    
    this.state = {
      task_title: "",
      task_description: "",
      task_due_date: initialDate,
      list: [
              {"title": "Start a Company", "description": "Before december"}, 
              {"title": "Start Dating", "description": "your soulmate to be found"},
              {"title": "Recover all hair", "description": "Healthy attitude for life"},

            ]
      // list : ["Get gf", "Start a company", "Recover all hair"]
    };



    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);

  }

  initDate(){
    let date = new Date();
    let month = (date.getMonth() + 1 );
    month = month / 10 == 0 ? month : "0" + month;
    let dateInMonth = date.getDate();
    dateInMonth = dateInMonth / 10 != 0 ? dateInMonth : "0" + dateInMonth;
    let hours = date.getHours();
    hours = hours / 10 != 0 ? hours : "0" + hours;
    let mins = date.getMinutes();
    console.log(mins);
    mins = mins / 10 != 0 ? mins : "0" + mins;
    let initialDate = date.getFullYear() + "-" + month + "-" + dateInMonth + "T" + hours + ":" + mins;
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event){

    event.preventDefault();
    let todo = {"title" : this.state.task_title, "description" : this.state.task_description};
    const newList = this.state.list.slice();
    newList.push(todo);
    console.log(newList);

    this.setState({
      task_title: "",
      task_description: "",
      task_due_date: "",
      list : newList
    })

  }

  onDelete(item){
    var updatedList = this.state.list.filter(function(val, index){
      return item !== val;
    });

    this.setState({
      list: updatedList
    })
  }

  onEdit(item){
    this.state.task_title = item.title;
    this.state.task_description = item.description;

    console.log(this.state);
    this.onDelete(item);


  }

  render() {
    console.log(this.state.task_due_date);

    const  {task_title}  = this.state;
    const  {task_description} = this.state;
    const {task_due_date} = this.state;

    const Todos = this.state.list.map((item,index)=> <ToDoList todo = {item} onDelete = {this.onDelete} key = {index} onEdit = {this.onEdit} />);
    
    return (

      <div className = "row">

        <div className = "col-md-6">

          <form id="article-form" style = {{width: "100%"}}>

            <Input
              text="Enter task"
              label="Task title"
              type="text"
              id="task_title"
              value={task_title}
              handleChange={this.handleChange}
            />

            <Input
              text="Enter description"
              label="Task description"
              type="text"
              id="task_description"
              value={task_description}
              handleChange={this.handleChange}
            />

            <Input
              text=""
              label="Pick due date"
              type="datetime-local"
              id="task_due_date"
              value={task_due_date}
              handleChange={this.handleChange}
            />


            <button type = "submit" className = "btn btn-info" onClick = {this.handleSubmit}>Add item</button>
          </form>

        </div>

     
          <ul style = {{marginTop: "10px"}}>
            {Todos}
          </ul>
           
        

      </div>
      
    );


  }

}
export default FormContainer;

