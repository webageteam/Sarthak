import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory, NavLink } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "../firebase/config";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Col, Row } from "react-bootstrap";
import Nav from '../Components/Nav.js';
import DateTime from '../Components/Date-time.js';
import Profile from '../Components/ProfileBar.js';
import Record from '../Components/Record.js';
import WorkingHours from '../Components/WorkingHours';
import ExceptionalLeave from '../Components/ExceptionalLeave';
import ProfileBar from '../Components/ProfileBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calander.css';

function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <div className="dashboard-margin">
     <div className="top">
       <h2 className="top-head">Hello {name}!</h2>
       <p className="top-p">Welcome Back!</p>
     </div>
     <ProfileBar name={name}/>
     <div className="container-calendar">
       <Calendar onChange={setDate} value={date} />
     </div>
     <Row>
       <Col>
         <Record
            heading="Attendance"
            first="WFH Applied"
            second="Approved"
            third="Rejected"
            button="Apply for WFH"/>
       </Col>
       <Col className="mx-5">
         <WorkingHours />
         <ExceptionalLeave />
       </Col>
       <Col className="mx-5">
       </Col>
     </Row>
     <Row>
       <Col>
         <Record
             heading="Leaves"
             first="Total Count"
             second="Leaves Taken"
             third="Balance"
             button="Apply" />
       </Col>
       <Col className="mx-5">
       </Col>
       <Col className="mx-5">
       </Col>
     </Row>
     <Row>
       <Col>
         <DateTime />
       </Col>
       <Col className="mx-5">
       </Col>
       <Col className="mx-5">
       </Col>
     </Row>
    </div>
  );
}
export default Dashboard;
