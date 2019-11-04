import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  Row
} from "reactstrap";

const Contact = (props) => {
  return (
      <Container className={'py-3'}>
        <Row>
          <Col md={{size: 8, offset: 2}}>
            <h3>Contact</h3>
            <hr/>
            <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input name="name" type="text" id="name" placeholder="What's your name?"/>
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                  <Input name="email" type="email" id="email"
                         placeholder="you@example.com"/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input name="message" type="textarea" id="message"
                       placeholder="Describe your inquire"/>
              </FormGroup>
              <Button color="primary"
                      className={"btn-lg btn-block"}>Send</Button>
            </Form>
          </Col>
        </Row>
      </Container>
  )
};

export default Contact;
