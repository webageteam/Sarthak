import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SideProfile from '../Components/SideProfile';
import './Refer.css';

function Refer(){
  return(
    <div className="profile-page">
      <SideProfile />
      <span class="profile-head">Refer-Someone</span>
      <form action="" className="refer-form">
        <Row>
          <Col>
            <label className="refer-field">First Name</label>
            <input type="text" className="refer-value" placeholder="Enter your first name" />
            <label className="refer-field">Email</label>
            <input type="text" className="refer-value" placeholder="Enter your email-id" />
            <label className="refer-field">Current Company/Position</label>
            <input type="text" className="refer-value" placeholder="None" />
            <label className="refer-field">Designation</label>
            <select className="refer-value" name="designation">
              <option value="HR">HR</option>
              <option value="Technical">Technical</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
            </select>
          </Col>
          <Col>
            <label className="refer-field">Last Name</label>
            <input type="text" className="refer-value" placeholder="Enter your last name" />
            <label className="refer-field">Phone Number</label>
            <input type="text" className="refer-value" placeholder="Enter your phone number" />
            <label className="refer-field">Department</label>
            <select className="refer-value" name="department">
              <option value="HR">HR</option>
              <option value="Technical">Technical</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
            </select>
          </Col>
          <Col>
          </Col>
        </Row>
        <div className="">
          <label className="refer-field">Resume</label>
          <input type="file" className="file-input refer-value"/>
          <input type="text" className="comment refer-value" placeholder="Comments" />
        </div>
        <button className="btn btn-lg refer-button">Refer</button>
      </form>
    </div>
  )
}

export default Refer;
