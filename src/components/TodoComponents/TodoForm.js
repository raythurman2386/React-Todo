import React from "react";
import styled from "styled-components";

const TodoForm = props => {
  return (
    <Form>
      <input
        type="text"
        name="task"
        placeholder="...task"
        style={{ flex: "10", padding: "5px" }}
      />
      <input
        type="submit"
        value="Submit"
        style={Btn}
        onClick={props.onChange}
      />
      <input type="button" value="Clear Complete" style={BtnRed} />
    </Form>
  );
};

const Form = styled.div`
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

const BtnRed = {
  padding: "7px 12px",
  color: "#ddd",
  background: "crimson",
  textAlign: "center",
  flex: "1",
  border: "none"
};

export default TodoForm;
