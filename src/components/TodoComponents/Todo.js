import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Todo = props => {
  return (
    <ListGroup flush>
      <ListGroupItem
        style={{ cursor: "pointer" }}
        onClick={() => props.completeTodo(props.todo.id)}
      >
        {props.todo.task}
      </ListGroupItem>
    </ListGroup>
  );
};

export default Todo;
