import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Nav from '../Components/Nav.js';
import DateTime from '../Components/Date-time.js';
import Profile from '../Components/ProfileBar.js';
import Record from '../Components/Record.js';
import WorkingHours from '../Components/WorkingHours';
import ExceptionalLeave from '../Components/ExceptionalLeave';
import ProfileBar from '../Components/ProfileBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Dashboard.css";
import './Calander.css';

function Dashboard(){
  const [date, setDate] = useState(new Date());

  return (
    <div className="dashboard-margin">
      <div className="top">
        <h2 className="top-head">Hello David!</h2>
        <p className="top-p">Welcome Back!</p>
      </div>
      <ProfileBar />
      <div className="container-calendar">
        <Calendar onChange={setDate} value={date} />
      </div>
      <Row>
        <Col>
          <Record
             heading="Attendance"
             first="WFH Applied"
             second="Approved"
             third="Rejected"
             button="Apply for WFH"/>
        </Col>
        <Col className="mx-5">
          <WorkingHours />
          <ExceptionalLeave />
        </Col>
        <Col className="mx-5">
        </Col>
      </Row>
      <Row>
        <Col>
          <Record
              heading="Leaves"
              first="Total Count"
              second="Leaves Taken"
              third="Balance"
              button="Apply" />
        </Col>
        <Col className="mx-5">
        </Col>
        <Col className="mx-5">
        </Col>
      </Row>
      <Row>
        <Col>
          <DateTime />
        </Col>
        <Col className="mx-5">
        </Col>
        <Col className="mx-5">
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
