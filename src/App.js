import React, { Component } from "react";
import styled from "styled-components";

import TodoList from "./components/TodoComponents/TodoList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: []
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addTodo = event => {
    this.setState({
      todo: [
        ...this.state.todo,
        { task: event.target.value, id: Date.now(), completed: false }
      ]
    });
  };

  clearTodos = () => {};

  render() {
    return (
      <Wrapper>
        <TodoList onChange={this.addTodo} todo={this.state.todo} />
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
