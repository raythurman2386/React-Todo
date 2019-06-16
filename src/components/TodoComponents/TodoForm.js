import React from 'react';
import styled from 'styled-components';

const TodoForm = () => {
  return (
    <div>
      <input type='text' placeholder='...task' />
      <button>Add Todo</button>
      <button>Clear Todos</button>
    </div>
  );
};

export default TodoForm;
