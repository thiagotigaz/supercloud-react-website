import React from "react";
import {Col, Container, Row} from "reactstrap";

const Footer = (props) => {
  return (
      <Container>
        <hr/>
        <Row>
          <Col md={4}>
            LEFT
          </Col>
          <Col md={4}>
            RIGHT
          </Col>
        </Row>
        <Row>
          &#9400; 2019 SuperCloud.com.br
        </Row>
      </Container>
  );
};
export default Footer;
