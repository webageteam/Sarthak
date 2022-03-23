import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase/config";
import {Row, Col} from 'react-bootstrap';
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard");
  }, [user, loading]);
  return (
          <div className="register">
            <div className="register__container">
              <h1 className="welcome">Let's Get Started</h1>
              <label className="label">
                Full Name
              </label>
              <input
                type="text"
                className="register__textBox"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full Name"
              />
              <label className="label">
                Email
              </label>
              <input
                type="text"
                className="register__textBox"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email Address"
              />
              <label className="label">
                Password
              </label>
              <input
                type="password"
                className="register__textBox"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
              <button className="register__btn" onClick={register}>
                Register
              </button>
              <span>or</span>
              <button
                className="register__btn register__google"
                onClick={signInWithGoogle}
              >
                <img className="google-logo" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="signInWithGoogle" />
                <text>Register with Google</text>
              </button>
              <div>
                Already have an account?
              </div>
              <Link to="/">
                <button className="login_button">Login</button>
              </Link>
            </div>
          <img className="register-image" src="../Images/register-image.jpg" alt="register-image" />
    </div>
  );
}
export default Register;
