import React, { useState, useEffect } from 'react';
import {Row, Col} from 'react-bootstrap';
import "./Date-time.css";

function DateTime(){
  const d = new Date();
  const arrM = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const arrD = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = arrD[d.getDay()];
  const month = arrM[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();

  const [defaultTime, setDefaultTime] = useState(d.toLocaleTimeString());

  // const defaultTime = d.toLocaleTimeString();

  const changeTime = () => {
    setDefaultTime(d.toLocaleTimeString());
  }

  useEffect(() => {
    changeTime();
  });

  return(
    <div className="date-time">
      <Row>
        <Col lg={4}>
          <span>{defaultTime}</span>
        </Col>
        <Col lg={8}>
          <span>{day}, {date} {month} {year}</span>
        </Col>
      </Row>
    </div>
  )
}

export default DateTime;
