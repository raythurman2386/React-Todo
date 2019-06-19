import React from "react";
import styled from "styled-components";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <ListWrapper>
      {props.todo.map(todo => (
        <Todo todo={todo} key={todo.id} completeTodo={props.completeTodo} />
      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

export default TodoList;
