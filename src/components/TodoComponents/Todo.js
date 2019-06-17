import React from 'react';
// import styled from 'styled-components';

const Todo = (props) => {
  return (
    <ul>
      {props.todo.map((todo) => (
        <li key={todo.id}>
          {todo.id} {todo.task}
        </li>
      ))}
    </ul>
  );
};

export default Todo;
