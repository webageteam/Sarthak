import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css';

function NotFound(){
  return(
    <div className="not-found">
      <img className="error-image" src="../images/error-image.png" alt="error-image" />
      <span className="error-text">Page Not Found</span>
      <a className="back-link" href="/training">
        <button className="go-back-button">Go Back</button>
      </a>
    </div>
  )
}

export default NotFound;
