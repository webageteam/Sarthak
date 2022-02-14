import React from 'react';
import './Notification.css';

function Notification(props){
  return(
    <div class="notification-layout">
      <span className="notification-text">{props.notificationText}</span>
      <div className="notification-details">
        <span className="notification-desc">{props.notificationDate}</span>
        <span className="notification-time">{props.notificationTime}</span>
      </div>
    </div>
  )
}

export default Notification;
