import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './SideProfile.css';
import { NavLink } from 'react-router-dom';

function SideProfile(){
  return(
    <NavLink to="/profile">
    <Row className="side-profile" href="/profile">
      <Col lg={4}>
        <img className="side-profile-image" src="./user-image.jpg" />
      </Col>
      <Col lg={8} className="side-profile-description">
        <span className="side-profile-name">David</span>
        <span className="side-profile-designation">Ui Ux Designer</span>
      </Col>
    </Row>
    </NavLink>
  )
}

export default SideProfile;
