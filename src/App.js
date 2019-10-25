import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Header from './components/layout/Header';
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo"
//import uuid from 'uuid';

import About from "./components/pages/About";
import axios from "axios";

class App extends React.Component {
  state = {
    todos: [ 
    ]
  };

//pull default data from an API, get the first 25 todos
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=25')
    .then(res => this.setState({todos: res.data}))
  }
  //function to set todo as completed or not completed
  markComplete = (id) =>
  {
    this.setState({todos:this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;

    })  });
    
  }
  //Delete the item that gets clicked on, using axiosDelete
  delTodo = (id) =>{
    axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=> this.setState({todos: [...this.state.todos.filter
      (todo => todo.id !== id)] }));
  }
  //addTodo
  //way to get a new ID
  addTodo = (title) =>{
    axios.post('http://jsonplaceholder.typicode.com/todos', 
    {title, completed:false})
    .then(res => this.setState({todos: 
      [...this.state.todos, res.data] }));
  }
  //to access todo list use this.state.todos
  //we are passing proptypes created in state,
  //and sending those proptypes to Todos
  //so Todos class will end up with an array of todos(just and object with id, title and completed in them)

  render() {
    return (
      <Router>
        <div className="App">
          <div className = "container">
            <Header />
            <Route exact path = "/" render = {props =>(
              <React.Fragment>
                  <AddTodo addTodo = {this.addTodo}/>
                  <Todos todos={this.state.todos} markComplete = {this.markComplete}
                  delTodo = {this.delTodo} />
              </React.Fragment>
            )}/>

            <Route path = "/about" component = {About}/>
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
