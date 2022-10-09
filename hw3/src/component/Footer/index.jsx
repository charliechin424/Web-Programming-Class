import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  }

  handleClearAllDone = () => {
    this.props.clearAllDone();
  }

  handleActivebutton = () => {
    this.props.Activebutton();
  }

  handleCompletedbutton = () => {
    this.props.Completedbutton();
  }

  handleAllbutton = () => {
    this.props.Allbutton();
  }

  render() {
    const {todos, tracestate} = this.props;
    const doneCount = tracestate.reduce((pre, todo) =>  pre+ (todo.done ? 1 : 0), 0)
    const total1 = todos.length;
    const total2 = tracestate.length;
      return (
      <footer className="todo-app__footer" id='todo-footer' style={{display: total1 === 0 && total2 === 0 ? 'none' : 'flex'}}>
        <div className='todo-app__total'>{total2-doneCount}left</div>
        <ul className='todo-app__view-buttons'>
          <button onClick={this.handleAllbutton}>All</button>
          <button onClick={this.handleActivebutton}>Active</button>
          <button onClick={this.handleCompletedbutton}>Completed</button>
        </ul>
        <div className='todo-app__clean'>
          <button style={{display: doneCount !== 0 ? 'block' : 'none'}} onClick={this.handleClearAllDone}>Clear completed</button>
        </div>
      </footer>
    )
  }
}
