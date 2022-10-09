import React, { Component } from 'react'
import './index.css'

export default class item extends Component {
  state = {mouse:false};

  handleMouse = (flag)=> {
    return ()=> {
      this.setState({mouse:flag});
    }
  }

  handleCheck =(id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    }
  }

  handleDelete = (id) => {
    if (window.confirm('確定刪除嗎?')){
      this.props.deleteTodo(id);
    }
  }

  render() {
    const {id, name, done} = this.props
    // const {mouse} = this.state;
    return (
      <li className='todo-app__item'>
        <div className='todo-app__checkbox'>
        <input id={id} type="checkbox" className='todo-item-input' onClick={this.handleCheck(id)} checked={done}/>
        <label htmlFor={id}></label>
        </div>
        <h1 className='todo-app__item-detail' style={{textDecoration :  done === true ? 'line-through' : 'none', opacity: done === true ? 0.5 : 1}}>{name}</h1>
        <img src={require('../img/x.png')} alt='' className='todo-app__item-x' onClick={() => {this.handleDelete(id)}}/>
      </li>
    )
  }
}