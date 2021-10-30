import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';
import { todos } from './todos.json';


class App extends Component{
  constructor(){
    super();
    this.state = {
      titulo: 'Aplicacion de Tareas',
      todos:todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);

  }

  handleAddTodo(todo){
    this.setState({
      todos:[...this.state.todos, todo]
    })

  }

  removeTodo(index){
  console.log(index);
  this.setState({
    todos: this.state.todos.filter((e, i) =>{
      return i !==index
    })
  })
  }

  render(){
    const todos = this.state.todos.map((todo, i) =>{
      return(
        <div className="col-md-4 mt-4">
        <div className="card">
          <div className="card-header">
            <h3>{todo.title}</h3>
            <span className="badge bg-pill bg-danger">
              {todo.priority}
            </span>
          </div>
          <div className="card-body">
          <p>{todo.description}</p>
          <p>{todo.responsable}</p>
          <div className="card-footer">
            <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>
              DELETE
            </button>
          </div>
          </div>
        </div>
        </div>
      )
    })
    return (
      <div className="App">
        
        <Navigation titulo={this.state.titulo} contador={todos.length}/>
        
       
        
        <div className="container">
        
          <div className="row mt-4">
          <div className="col-md-4">
          
        <TodoForm onAddTodo={this.handleAddTodo}/>
        </div>
          {todos}
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        
         
      </div>
    );

  }
}


export default App;
