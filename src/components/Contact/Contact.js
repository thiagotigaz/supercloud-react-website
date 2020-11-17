import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  Row
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faUserTie, faBuilding, faComment } from '@fortawesome/free-solid-svg-icons';

const Contact = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState(new Set());
  const [touchedFields, setTouchedFields] = useState(new Set());

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('submiitedddd');
  };

  const onValidatedFieldChange = (setFunction, event) => {
    const { name, value } = event.target;
    setFunction(value);
    // if (!touchedFields.has(name)) {
    //   setTouchedFields(new Set(touchedFields).add(name));
    //   console.log(touchedFields);
    // }
    // validate(name, value);
  };

  const validate = (event) => {
    const { name, value } = event.target;
    if (!touchedFields.has(name)) {
      setTouchedFields(new Set(touchedFields).add(name));
      console.log(touchedFields);
    }
    let valid;
    switch (name) {
      case 'email':
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        valid = re.test(value);
        break;
      default:
        valid = value !== '';
        break
    }


    if (!valid) {
      setErrors(new Set(errors).add(name));
    } else {
      const newErrors = new Set(errors);
      newErrors.delete(name);
      setErrors(newErrors);
    }
  };

  return (
    <Container className={'py-3'}>
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <h3>Contact</h3>
          <hr/>
          <Form onSubmit={onFormSubmit}>
            <FormGroup>
              <Label for="name">Name*</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <span className={"input-group-text"}>
                        <FontAwesomeIcon icon={faUserTie}/>
                    </span>
                </InputGroupAddon>
                <Input name="name" type="text" id="name" placeholder="What's your name?"
                       value={name}
                       onChange={(e) => onValidatedFieldChange(setName, e)}
                       onBlur={(e) => validate(e)}
                       valid={touchedFields.has('name')}
                       invalid={errors.has('name')}/>
                <FormFeedback>Name is required</FormFeedback>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email*</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                <Input name="email" type="email" id="email"
                       placeholder="you@example.com" value={email}
                       onChange={(e) => onValidatedFieldChange(setEmail, e)}
                       onBlur={(e) => validate(e)}
                       valid={touchedFields.has('email')}
                       invalid={errors.has('email')}/>
                <FormFeedback>Email is required</FormFeedback>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label for="company">Company name</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <span className={"input-group-text"}>
                        <FontAwesomeIcon icon={faBuilding}/>
                    </span>
                </InputGroupAddon>
                <Input name="company" type="text" id="company"
                       placeholder="What's your company's name?"
                       value={companyName}
                       onChange={(e) => setCompanyName(e.target.value)}/>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label for="budget">Budget</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <span className={"input-group-text"}>
                        <FontAwesomeIcon icon={faDollarSign}/>
                    </span>
                </InputGroupAddon>
                <Input name="budget" type="text" id="budget" placeholder="What's your budget?"
                       value={budget}
                       onChange={(e) => setBudget(e.target.value)}/>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label for="message">Message*</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <span className={"input-group-text"}>
                        <FontAwesomeIcon icon={faComment}/>
                    </span>
                </InputGroupAddon>
                <Input name="message" type="textarea" id="message"
                       placeholder="Add any details you'd like to share" value={message}
                       onChange={(e) => {
                         onValidatedFieldChange(setMessage, e);
                         validate(e)
                       }}
                       valid={touchedFields.has('message')}
                       invalid={errors.has('message')}/>
                <FormFeedback>Message is required</FormFeedback>
              </InputGroup>
            </FormGroup>
            <Button color="primary"
                    className={"btn-lg btn-block"}
                    disabled={errors.size > 0 || touchedFields.size < 2}>Send</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
};

export default Contact;
