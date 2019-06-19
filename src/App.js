import React, { Component } from "react";
import styled from "styled-components";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          task: "something",
          id: "12",
          completed: false
        }
      ],
      todo: ""
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addTodo = event => {
    event.preventDefault();
    const newTodo = { task: this.state.todo, id: Date.now(), completed: false };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ""
    });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  completeTodo = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
  };

  clearTodos = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <Wrapper>
        <TodoForm
          value={this.state.todo}
          todoChange={this.changeTodo}
          addTodo={this.addTodo}
          clearTodo={this.clearTodos}
        />
        <TodoList completeTodo={this.completeTodo} todo={this.state.todos} />
      </Wrapper>
    );
  }
}

export default App;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 800px;
  border: 1px solid #ddd;
  padding: 2rem;
`;
