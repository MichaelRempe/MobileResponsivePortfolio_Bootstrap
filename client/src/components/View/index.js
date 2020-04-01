import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./style.css";

function View(props) {
  return (
    <Container fluid id="mainView">
        {props.children}
    </Container>
  );
}

export default View;
