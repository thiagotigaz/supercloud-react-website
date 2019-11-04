import React from 'react';
import {Button, Container, Jumbotron} from 'reactstrap';

const Head = (props) => {
  return (
      <Jumbotron>
        <Container>
          <h1 className="display-3">Thiago Lima</h1>
          <p className="lead">AWS Solutions Architect, specialized in
            Java/Python/Node, Cloud Computing, microservices and serverless.</p>
          <hr className="my-2"/>
          <p>It uses utility classes for typography and spacing to space content
            out within the larger container.</p>
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
