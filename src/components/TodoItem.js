import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  //this function displays a different style depening on whether 
  //the item has been completed
  getStyle = () =>{
    return {
      background: 'gray',
      textDecoration: this.props.todo.completed ? 'line-through': 'none',
      borderBottom: '1px #ccc dotted',
    }

  }

  markComplete= (e) => {
    console.log(this.props)
  }
  
  
  render() {
    const {id, title, completed } = this.props.todo;

    //we display the title of each todo
    //styling is camelCase in react, no hyphens
    return (
      <div style = {this.getStyle()}>
        <p>
        <input type = "checkbox" checked = {completed} onChange={this.props.markComplete.bind(this, id)}/> {' '}
        {title}
        <button onClick = {this.props.delTodo.bind(this, id)} style = {btnStyle}>x</button>
        </p>
      </div>
    );
  }
}
//this is where we define the object
//put isRequired so that todo Property is mandatory.
//our TodoItem has a prop of todo because
//we call TodoItem todo = {todo}
//so we need to define proptypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
  background: "#ff0000",
  color: "white",
  border: 'none',
  padding: "3px 15px",
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}
export default TodoItem;
