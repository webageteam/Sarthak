import React from "react";
import { Row, Col } from 'react-bootstrap';
import './Profile.css';

function Profile(){
  return(
    <div className="dashboard-margin">
      <span className="profile-head">Profile</span>
      <div className="box-layout profile">
        <h1>hello david</h1>
      </div>
      <Row>
        <Col className="mx-5">
          <span className="profile-field">First Name</span>
          <span className="profile-field">Last Name</span>
          <span className="profile-field">User ID</span>
          <span className="profile-field">Email</span>
          <span className="profile-field">Phone Number</span>
          <span className="profile-field">Employee Address</span>
        </Col>
        <Col className="mx-5">
          <span className="profile-value">David</span>
          <span className="profile-value">Parker</span>
          <span className="profile-value">70</span>
          <span className="profile-value">Botx@gmail.com</span>
          <span className="profile-value">9412345678</span>
          <span className="profile-value">Police Quaters, Collectorate, Pouiiy, Kerala, 628382 India</span>
        </Col>
        <Col className="mx-5">
        </Col>
      </Row>
    </div>
  )
};

export default Profile;
