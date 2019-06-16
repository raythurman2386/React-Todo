import React from 'react';
import styled from 'styled-components';

const Todo = () => {
  return (
    <div>
      <input type='text' placeholder='...task' />
      <button>Add Todo</button>
      <button>Clear Todos</button>
    </div>
  );
};

export default Todo;
