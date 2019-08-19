import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Header = props => {
  return (
    <div>
      <Jumbotron fluid style={containerStyles}>
        <Container fluid>
          <h1 className="display-4">What To Do???</h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

const containerStyles = {
  backgroundColor: "red",
  color: "white",
  borderRadius: "5px"
};

export default Header;
