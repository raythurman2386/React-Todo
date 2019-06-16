import React from 'react';
import styled from 'styled-components';

const TodoForm = () => {
  return (
    <Form>
      <input type='text' placeholder='...task' />
      <button>Add Todo</button>
      <button>Clear Todos</button>
    </Form>
  );
};

const Form = styled.div`
  width: 98%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default TodoForm;
