import React from "react";
import { Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
  return (
    <Container>
      <hr/>
      <Row>
        <Col>
          <ul>
            <li><FontAwesomeIcon icon={faCloud} className={'mr-1'}/>Thiago Pinto de Lima</li>
            <li><FontAwesomeIcon icon={faMailBulk} className={'mr-1'}/><a
              href={'mailto:thiagotigaz@gmail.com'}>thiagotigaz@gmail.com</a></li>
            <li><FontAwesomeIcon icon={faPhone} className={'mr-1'}/>(858)230-1743</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li><FontAwesomeIcon icon={faGithub} className={'mr-1'}/><a href={'http://github.com/thiagotigaz'} target={'_blank'}>thiagotigaz</a></li>
            <li><FontAwesomeIcon icon={faLinkedin} className={'mr-1'}/><a href={'https://www.linkedin.com/in/thiagotigaz/'} target={'_blank'}>thiagotigaz</a></li>
          </ul>
        </Col>
      </Row>
      <Row>
        &#9400; 2019 SuperCloud.com.br
      </Row>
    </Container>
  );
};
export default Footer;
