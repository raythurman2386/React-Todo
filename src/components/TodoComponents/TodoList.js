import React from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <List>
      <TodoForm onChange={props.onChange} />
      <Todo todo={props.todo} />
    </List>
  );
};

const List = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default TodoList;
