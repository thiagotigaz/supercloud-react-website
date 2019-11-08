import React from "react";
import {useState} from "react";
import {
    Button,
    Col,
    Container,
    Form, FormFeedback,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Label,
    Row
} from "reactstrap";

const Contact = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [budget, setBudget] = useState('');
    const [message, setMessage] = useState('');

    const onInputChange = (event) => {
        console.log(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(name);
    };

    return (
        <Container className={'py-3'}>
            <Row>
                <Col md={{size: 8, offset: 2}}>
                    <h3>Contact</h3>
                    <hr/>
                    <Form onSubmit={onFormSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input name="name" type="text" id="name" placeholder="What's your name?" value={name}
                                   onChange={(e) => setName(e.target.value)}/>
                            <FormFeedback>Name is required</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                                <Input name="email" type="email" id="email"
                                       placeholder="you@example.com" value={email}/>
                            </InputGroup>
                            <FormFeedback>Email is required</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="company">Company name</Label>
                            <Input name="company" type="text" id="company" placeholder="What's your company's name?"
                                   value={companyName} onChange={onInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="budget">Budget</Label>
                            <Input name="budget" type="text" id="budget" placeholder="What's your budget?"
                                   value={budget} onChange={onInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="message">Message</Label>
                            <Input name="message" type="textarea" id="message"
                                   placeholder="Describe your inquire" value={message}/>
                            <FormFeedback>Message is required</FormFeedback>
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
