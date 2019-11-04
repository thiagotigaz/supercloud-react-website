import React from "react";
import {Col, Progress, Row} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Skill = ({icon, name, value}) => {

  return (
      <Row>
        <Col md={2}>
          <div className="p-2 bd-highlight"><FontAwesomeIcon
              icon={icon} size="2x" className={'float-left'}/>
          </div>
        </Col>
        <Col md={10}>
          <h6>{name}</h6>
          <Progress value={value}/>
        </Col>
      </Row>
  );
};

export default Skill;
