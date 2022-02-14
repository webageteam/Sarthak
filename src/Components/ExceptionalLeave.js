import React from "react";
import { Row, Col } from 'react-bootstrap';
import './ExceptionalLeave.css';

function ExceptionalLeave(){
  return(
    <div className="working-div box-layout">
      <h5 className="exceptional-head">Exceptional Leave</h5>
      <Row>
        <Col className="button-col">
          <button className="btn apply" type="submit">Apply</button>
        </Col>
        <Col className="button-col">
          <button className="btn manage" type="submit">Manage</button>
        </Col>
      </Row>
    </div>
  )
}

export default ExceptionalLeave;
