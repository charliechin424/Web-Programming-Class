import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

  handlekeyUp = (event) => {
    const {keyCode, target} = event;
    if (keyCode !== 13) return
    if (target.value.trim() === ''){
      alert('輸入不能為空');
      return;
    }
    const todoObj = {id:nanoid(), name:target.value, done:false};
    this.props.addTodo(todoObj);
    target.value = '';
  }
  render() {
    return (
      <div className="todo-header">
        <input  type="text" placeholder="What needs to be done?" className="todo-app__input" onKeyUp={this.handlekeyUp}/>
      </div>
    )
  }
}