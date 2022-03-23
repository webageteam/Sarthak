import React from "react";
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Profile.css';

function Profile(){
  return(
    <div className="profile-page">
      <span className="profile-head">Profile</span>
      <div className="box-layout profile profile-page-description">
        <div className="user-description">
          <img className="user-image" src="./images/user-image.jpg" alt="image"/>
          <span className="user-name mt-3 mb-3">David Parker</span>
          <span className="user-role mb-3">Senior Ux Ui designer</span>
          <NavLink to="/profile">
            <button className="btn manage profile-page-button">Edit Profile</button>
          </NavLink>
          <NavLink to="/changePassword">
            <button className="btn manage profile-page-button">Change Password</button>
          </NavLink>
        </div>
      </div>
      <Row>
        <Col className="fields">
          <span className="profile-field">First Name</span>
          <span className="profile-field">Last Name</span>
          <span className="profile-field">User ID</span>
          <span className="profile-field">Email</span>
          <span className="profile-field">Phone Number</span>
          <span className="profile-field">Employee Address</span>
        </Col>
        <Col className="values">
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
