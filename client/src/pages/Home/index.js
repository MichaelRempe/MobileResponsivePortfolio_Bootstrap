import React from "react";

//Components:
import { Row, Col } from "reactstrap";
import View from "../../components/View";
import Hero from "../../components/Hero";

import "./style.css";

function Home() {
  return (
    <View>
      <Hero >
        <h1 className="display-2 title">Michael J. Rempe</h1>
        <h3 className="title">Full Stack Web Developer</h3>
      </Hero>
      <Col sm="12" md={{ size: 8, offset: 2 }} lg={{ size: 10, offset: 1 }}>
        <div>Under Construction: 4/1/2020</div>
        <Row className="Nav row"></Row>
        <Row className="Brand row"></Row>
        <Row className="Carrousel row"></Row>
        <Row className="Contact row"></Row>
        <Row className="Footer row"></Row>
      </Col>
    </View>
  );
}

export default Home;
