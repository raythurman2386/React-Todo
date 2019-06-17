import React from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
// import Todo from './Todo';

const TodoList = () => {
  return (
    <List>
      <TodoForm />
    </List>
  );
};

const List = styled.div`
  width: 98%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default TodoList;
