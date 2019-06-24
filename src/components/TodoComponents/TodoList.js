import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <ul>
      {props.todo.map(todo => (
        <Todo todo={todo} key={todo.id} completeTodo={props.completeTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
