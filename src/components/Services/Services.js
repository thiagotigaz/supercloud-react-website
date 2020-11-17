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
            <p>We provide custom classes to build up AWS/cloud knowledge within your team, helping them think out of the box and understand how to architect highly scalable, resilient and cost effiecient cloud based applications using the latest technologies.</p>
          </Col>
          <Col md={4} className={"text-center"} >
            <FontAwesomeIcon icon={faCloud} size="4x" />
            <h3>Cloud Migration</h3>
            <p>Do you have an on premises system that is taking your nerves and costing too much? I can solve this problem. I'm expert in building custom tailored migration plan to move your application from premises to AWS. To achieve that we analyze your project and build a custom plans with all the steps necessary for hosting your app on AWS.</p>
          </Col>
          <Col md={4} className={"text-center"}>
            <FontAwesomeIcon icon={faCogs} size="4x" />
            <h3>Microservices Design</h3>
            <p>Accelerate your time to market with our ready to use microservices architecture. We provide you production ready Java or NodeJs microservices infrastructure for your team to start building on top of it, just leave those stressful hours of project setup for me to solve it.</p>
          </Col>
        </Row>
      </Container>
  );
};

export default Services;
