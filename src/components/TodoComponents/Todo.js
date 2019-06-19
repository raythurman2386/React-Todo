import React from "react";
import styled from "styled-components";

const Todo = props => {
  return (
    <ListItem onClick={() => props.completeTodo(props.todo.id)}>
      {props.todo.task}
    </ListItem>
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

export default Todo;
