import React from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const TodoForm = props => {
  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <Button color="danger" onClick={props.addTodo}>
          Submit
        </Button>
      </InputGroupAddon>
      <Input
        placeholder="todo..."
        type="text"
        name="todo"
        value={props.value}
        onChange={props.todoChange}
      />
      <InputGroupAddon addonType="append">
        <Button color="success" onClick={props.clearTodo}>
          Clear
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default TodoForm;
