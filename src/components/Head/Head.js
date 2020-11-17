import React from 'react';
import {Button, Col, Container, Jumbotron, Row} from 'reactstrap';


const Head = (props) => {
    const logo = require('../../resources/aws-certified-logo_color-horz_360x60.png');
    const logoCertification = require('../../resources/solutions-architect-professional-tag_360x32.png');
    const logoStyle = {
        width: '270px'
    };

    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col md={8}>
                        <h1 className="display-3">Thiago Lima</h1>
                    </Col>
                    <Col>
                            <img src={logo} style={logoStyle} alt={'aws certified logo'}/>
                            <div/>
                            <img src={logoCertification} style={logoStyle} alt={'solutions architect professional'}/>
                    </Col>
                </Row>
                <p className="lead clearfix">AWS Solutions Architect, specialized in
                    Java/Python/Node, Cloud Computing, microservices and serverless.</p>
                <hr className="my-2"/>
                <p>Cloud Solutions Architect with experience in requirements gathering, design and development of Cloud based applications to support business development initiatives. Works with Java, Spring Boot, Spring Cloud, Docker, NodeJs, Python and AWS. Specialized in Amazon Web Services(AWS), cloud migrations, containerization strategies, breaking down of monoliths into microservices and DevOps automation.</p>
                <p className="lead">
                    <Button color="primary"
                            href="https://www.linkedin.com/in/thiagotigaz"
                            target="_blank">Learn More</Button>
                </p>
            </Container>
        </Jumbotron>
    );
};

export default Head;
