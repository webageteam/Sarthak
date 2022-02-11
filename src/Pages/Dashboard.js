import React from "react";
import { Col, Row } from "react-bootstrap";
import Nav from '../Components/Nav.js';
import DateTime from '../Components/Date-time.js';
import Profile from '../Components/ProfileBar.js';
import Record from '../Components/Record.js';
import "./Dashboard.css";

function Dashboard(){
  return (
    <div>
      <div className="top">
        <h2 className="top-head">Hello David!</h2>
        <p className="top-p">Welcome Back!</p>
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
      </Row>
      <Row>
        <Col>
          <DateTime />
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
