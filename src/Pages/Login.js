import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import "./login.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/dashboard");
  }, [user, loading]);

  return (
    <div>
      <Row>
        <Col>
          <img className="login-image" src="./images/login-img.jpg" alt="login-img" />
        </Col>
        <Col>
          <img className="logo" src="./images/logo.jpg" alt="logo" />
          <span className="head">Hello Again!</span>
          <span className="welcome">Welcome Back</span>
          <div className="form">
            <input
              type="text"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"

            />
            <span className="login-text">We never share your email with anyone</span>
            <input
              type="password"
              className="input mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"

            />
            <button
              className="login login_page_buttons"
              type="submit"
              onClick={() => logInWithEmailAndPassword(email, password)}
            >
              Login
            </button>
            <button className="login__google login_page_buttons" onClick={signInWithGoogle}>
              <img className="google-logo" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="signInWithGoogle" />
              <text>Login with Google</text>
            </button>
            <div className="forgot">
              <Link to="/reset">Forgot Password</Link>
            </div>
            <span className="no_account_text">Don't have an account?</span>
            <Link to="/register">
              <button className="register_button login_page_buttons">Create account</button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Login;
