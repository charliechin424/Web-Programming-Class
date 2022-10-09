import React, { Component } from 'react'
import Input from './component/Input'
import List from './component/List'
import Footer from './component/Footer'
import './App.css'

export default class App extends Component {

  state = {todos:[], tracestate:[]}


  addTodo = (todoObj) => {
    const {todos} = this.state;
    const newTodos = [...todos, todoObj];
    this.setState({todos:newTodos});
    this.setState({tracestate:newTodos});
  }

  updateTodo = (id, done) => {
    const {todos} = this.state;
    const newtodos = todos.map((todoObj) => {
      if (todoObj.id === id) return {...todoObj, done}
      else return todoObj
    } )
    this.setState({todos:newtodos});
    this.setState({tracestate:newtodos});
  }

  deleteTodo = (id) => {
    const {todos} = this.state;
    const newtodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    })
    this.setState({todos:newtodos});
    this.setState({tracestate:newtodos});
  }

  checkAllTodo = (done) => {
    const {todos} = this.state;
    const newtodos = todos.map((todoObj) => {return {...todoObj, done}});
    this.setState({todos:newtodos});
    this.setState({tracestate:newtodos});
  }

  clearAllDone = () => {
    const {todos} = this.state;
    const newtodos = todos.filter((todoObj) => {
      return !todoObj.done;
    })
    this.setState({todos:newtodos});
    this.setState({tracestate:newtodos});
  }

  Activebutton = () => {
    const {tracestate} = this.state;
    const newtodos = tracestate.filter((todoObj) => {
      return !todoObj.done;
    })
    this.setState({todos:newtodos});
  }

  Completedbutton = () => {
    const {tracestate} = this.state;
    const newtodos = tracestate.filter((todoObj) => {
      return todoObj.done;
    })
    this.setState({todos:newtodos});
  }

  Allbutton = () => {
    const {tracestate} = this.state;
    const newtodos = tracestate.map((todoObj) => {
      return todoObj;
    })
    this.setState({todos:newtodos});
  }

  render() {
    const {todos, tracestate} = this.state;
    return (
      <div id='root' className="todo-app__root">
        <header className="todo-app__header todo-app__title" >todos</header>
        <section className='todo-app__main'>
          <Input addTodo = {this.addTodo}/>
          <List todos={todos}  updateTodo = {this.updateTodo} deleteTodo = {this.deleteTodo}/>
        </section>
        <Footer tracestate={tracestate} todos={todos} checkAllTodo={this.checkAllTodo} Activebutton={this.Activebutton} Completedbutton={this.Completedbutton} Allbutton={this.Allbutton} clearAllDone={this.clearAllDone}/>
      </div>
    )
  }
}
