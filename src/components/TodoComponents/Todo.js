import React from 'react';
// import styled from 'styled-components';

const Todo = (props) => {
  return (
    <div>
      {props.todo.map((todo) => (
        <p>
          {todo.id} {todo.task}
        </p>
      ))}
    </div>
  );
};

export default Todo;
