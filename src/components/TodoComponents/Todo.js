import React from "react";
import styled from "styled-components";

const Todo = props => {
  return (
    <ListWrapper>
      {props.todo.map(todo => (
        <ListItem key={todo.id}>
          {todo.id} {todo.task}
        </ListItem>
      ))}
    </ListWrapper>
  );
};

const ListItem = styled.li`
  width: 150px;
  height: 150px;
  border: 1px solid #333;
  border-radius: 5px;
  list-style-type: none;
  margin: 2rem;
  padding: 0.5rem;
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

export default Todo;
