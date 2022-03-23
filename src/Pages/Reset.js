import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase/config";
import "./Reset.css";

// Styling needs to be changed!

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard");
  }, [user, loading]);
  return (
    <div className="reset">
      <img className="reset-image" src="../Images/reset-image.jpg" alt="reset-image" />
      <div className="reset__container">
        <span className="reset-text">Oops! Can't remeber your password.</span>
        <span className="reset-text">We got you covered.</span>
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email Address"
        />
        <button
          className="reset__btn"
          onClick={() => sendPasswordReset(email)}
        >
          Send password reset email
        </button>
        <div className="no_account_text">
          Don't have an account?
        </div>
        <Link to="/register">
          <button className="reset-register">Create account</button>
        </Link>
      </div>
    </div>
  );
}
export default Reset;
