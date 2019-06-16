import React, { Component } from 'react';
import styled from 'styled-components';

import TodoList from './components/TodoComponents/TodoList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todo : [
        {
          task      : 'get',
          id        : 12,
          completed : false,
        },
        {
          task      : 'todo',
          id        : 13,
          completed : false,
        },
        {
          task      : 'working',
          id        : 14,
          completed : false,
        },
      ],
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <Wrapper>
        {this.state.todo.map((todo) => <p>{todo.task}</p>)}
        <TodoList />
      </Wrapper>
    );
  }
}

export default App;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 50%;
`;
