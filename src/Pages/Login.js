import React from "react";
import './login.css';
import { Row, Col, Form, Button } from "react-bootstrap";
import Dashboard from './Dashboard.js';
import { NavLink } from "react-router-dom";

function Login(){

  return(
    <div>
      <Row>
        <Col>
          <img className="login-image" src="./login-img.jpg" alt="login-img" />
        </Col>
        <Col>
          <img className="logo" src="./logo.jpg" alt="logo" />
          <span className="head">Hello Again!</span>
          <span className="welcome">Welcome Back</span>
          <form className="form">
            <Form.Group className="mb-3" controlId="email">
              <Form.Control className="input" type="email" placeholder="Enter your email address" />
              <Form.Text className="text-muted">We never share your email with anyone</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Control className="input" type="password" placeholder="Enter your password" />
            </Form.Group>

            <NavLink to="/dashboard">
              <button className="login" type="submit">Login</button>
            </NavLink>
            <a className="forgot" href="#">forgot password?</a>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
