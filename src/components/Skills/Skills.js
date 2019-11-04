import React from "react";
import {Col, Container, Row} from "reactstrap";
import {
  faAws,
  faBootstrap,
  faDocker,
  faGithub,
  faJava,
  faJenkins,
  faJira,
  faLinux,
  faNodeJs,
  faPython,
  faSlack,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import Skill from "./Skill";

const divStyle = {
  backgroundColor: '#333',
};

const Skills = (props) => {
  return (
      <div className={'text-light bg-dark py-3'}>

        <Container>
          <h1 className={"text-center mb-3"}>Skills</h1>
          <Row>
            <Col>
              <Skill icon={faAws} name={'AWS'} value={95}/>
              <Skill icon={faJava} name={'Java'} value={90}/>
              <Skill icon={faPython} name={'Python'} value={80}/>
              <Skill icon={faNodeJs} name={'React'} value={65}/>
              <Skill icon={faDocker} name={'Docker'} value={90}/>
            </Col>
            <Col>
              <Skill icon={faJira} name={'Jira'} value={90}/>
              <Skill icon={faSlack} name={'Slack'} value={100}/>
              <Skill icon={faJenkins} name={'Jenkins'} value={80}/>
              <Skill icon={faLinux} name={'Linux'} value={100}/>
              <Skill icon={faWindows} name={'Windows'} value={65}/>
            </Col>
            <Col>
              <Skill icon={faGithub} name={'Github'} value={100}/>
              <Skill icon={faBootstrap} name={'Bootstrap'} value={80}/>
              <Skill icon={faPython} name={'Python'} value={80}/>
              <Skill icon={faNodeJs} name={'React'} value={65}/>
            </Col>
          </Row>
        </Container>
      </div>

  );
};

export default Skills;
