import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {


  render() {
    const {todos, updateTodo, deleteTodo} = this.props;
    return (
      <ul className="todo-app__list" id='todo-list'>
        {
          todos.map((todo) => {return <Item key = {todo.id} {...todo} updateTodo = {updateTodo} deleteTodo = {deleteTodo}/>})
        }
      </ul>
    )
  }
}