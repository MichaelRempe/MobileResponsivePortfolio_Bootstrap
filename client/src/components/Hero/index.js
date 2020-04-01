import React from "react";
import { Jumbotron, Row, Col } from "reactstrap";

import "./style.css";

function Hero(props) {
  return (
    <Jumbotron id="jumbotron">
      <Col sm="12" md={{ size: 8, offset: 2 }} lg={{ size: 10, offset: 1 }}>
        {props.children}
      </Col>
    </Jumbotron>
  );
}

export default Hero;
