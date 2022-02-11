import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Record.css';

function Record(props){

  const d = new Date();
  const arr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const month = arr[d.getMonth()];

  return(
    <div className="record">
      <h4 className="com-head">{props.heading}</h4>
      <p className="month">{month}</p>
      <Row>
        <Col>
          <span className="number">5</span>
          <p className="number-text">{props.first}</p>
        </Col>
        <Col>
          <span className="number">5</span>
          <p className="number-text">{props.second}</p>
        </Col>
        <Col>
          <span className="number">0</span>
          <p className="number-text">{props.third}</p>
        </Col>
      </Row>
      <Row>
        <Col className="button-col">
          <button className="btn apply" type="submit">{props.button}</button>
        </Col>
        <Col className="button-col">
          <button className="btn manage" type="submit">Manage</button>
        </Col>
      </Row>
    </div>
  )
}

export default Record;
