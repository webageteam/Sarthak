import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import { logout } from "../firebase/config";
// tooltip

function Nav(){
  return(
    <div className="sidenav">
      <img className="logo-nav" src="./images/logo.jpg" />
      <NavLink fontSize="small" className="icons dashboard" to="/dashboard">
        <DashboardIcon />
      </NavLink>
      <NavLink fontSize="small" className="icons" to="/profile">
        <PersonIcon />
      </NavLink>
      <NavLink fontSize="small" className="icons" to="/refer">
        <PeopleIcon />
      </NavLink>
      <NavLink fontSize="small" className="icons" to="/media">
        <SubscriptionsIcon />
      </NavLink>
      <NavLink fontSize="small" className="icons" to="/onboarding">
        <PendingActionsIcon />
      </NavLink>
      <NavLink fontSize="small" className="icons training" to="/training">
        <AssignmentIcon />
      </NavLink>
      <NavLink className="icons logout" to="/" onClick={logout}>
        <LogoutIcon />
      </NavLink>
    </div>
  )
};

export default Nav;
