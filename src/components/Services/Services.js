import React from "react";
import {Col, Container, Row} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCloud, faHandshake, faCogs } from '@fortawesome/free-solid-svg-icons'

const Services = (props) => {
  return (
      <Container className={'pb-3'}>
        <h1 className={"text-center mb-3"}>Services</h1>
        <Row>
          <Col md={4} className={"text-center"} >
            <FontAwesomeIcon icon={faHandshake} size="4x" />
            <h3>AWS Consulting</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt mi a felis ullamcorper vestibulum. Donec faucibus purus non augue ullamcorper dapibus. Mauris ac ligula at nisl eleifend iaculis.</p>
          </Col>
          <Col md={4} className={"text-center"} >
            <FontAwesomeIcon icon={faCloud} size="4x" />
            <h3>Cloud Migration</h3>
            <p>Maecenas cursus odio in metus elementum, vitae pulvinar ipsum pharetra. Morbi mollis quam vitae mi convallis commodo.</p>
          </Col>
          <Col md={4} className={"text-center"}>
            <FontAwesomeIcon icon={faCogs} size="4x" />
            <h3>Microservices Design</h3>
            <p>Curabitur quis ex quis ex suscipit hendrerit. Quisque sodales lacus non ante tristique iaculis. Etiam urna quam, faucibus nec leo ut, rhoncus malesuada ex.</p>
          </Col>
        </Row>
      </Container>
  );
};

export default Services;
