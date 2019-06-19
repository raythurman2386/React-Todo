import React from "react";
import styled from "styled-components";

const TodoForm = props => {
  return (
    <Form>
      <input
        type="text"
        name="todo"
        placeholder="...todo"
        value={props.value}
        onChange={props.todoChange}
        style={{ flex: "10", padding: "5px" }}
      />
      <button onClick={props.addTodo} style={Btn}>
        Submit
      </button>
      <button onClick={props.clearTodo} style={Btn}>
        Clear
      </button>
    </Form>
  );
};

const Form = styled.form`
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Btn = {
  padding: "7px 12px",
  color: "#ddd",
  background: "#333",
  textAlign: "center",
  flex: "1",
  border: "none"
};

export default TodoForm;
