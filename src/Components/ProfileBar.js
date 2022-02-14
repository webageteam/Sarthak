import React from "react";
import {Row, Col} from "react-bootstrap";
import Notification from './Notification';
import { NavLink } from "react-router-dom";
import "./ProfileBar.css";

function Profile(){
  return(
    <div className="box-layout profile">
      <div className="user-description">
        <img className="user-image" src="./user-image.jpg" alt="image"/>
        <span className="user-name">David Parker</span>
        <span className="user-role">Senior Ux Ui designer</span>
        <NavLink to="/profile">
          <button className="btn manage profile-button" href="/profile">View Profile</button>
        </NavLink>
      </div>
      <div>
        <span className="notification-head">Notifications</span>
        <div className="notifications">
          <Notification notificationText="Leave request approved"
                        notificationDate="2 Oct to 3 Oct"
                        notificationTime="7 min" />
          <Notification notificationText="Profile updated"
                        notificationDate="Profile picture"
                        notificationTime="1 day" />
          <Notification notificationText="Profile updated"
                        notificationDate="Email-ID updated"
                        notificationTime="2 days" />
          <Notification notificationText="Leave request sent"
                        notificationDate="2 Oct to 3 Oct"
                        notificationTime="2 days" />
          <Notification notificationText="Profile updated"
                        notificationDate="Mobile number"
                        notificationTime="2 days" />
        </div>
      </div>
    </div>
  )
};

export default Profile;
