import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
class Todos extends React.Component {
  markComplete = () => {
    console.log('hello')
  }
 
 
  render() {
    //loop thru everything in state.todos
    //call TodoItem.js to display each item uniquely
    return this.props.todos.map(
      todo => <TodoItem key={todo.id} todo={todo} markComplete = {this.props.markComplete} 
      delTodo= {this.props.delTodo}/>
      );
  }
}
///because we pass in todos from app.js
//we need to define PropTypes.
Todos.propTypes = {
  //todos is an array of objects
  //put isRequired so that the Property of todos is not optional
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todos;
