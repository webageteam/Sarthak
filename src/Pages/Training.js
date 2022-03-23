import React from 'react';
import {NavLink} from 'react-router-dom';
import TrainingProfile from '../Components/TrainingProfile';
import './Training.css';

function Training(){
  return(
    <div className="profile-page">
      <span class="profile-head">Training & Certificate</span>
      <div className="top-section">
        <form className="search" action="">
          <input className="search-input" placeholder="Search" name="search" />
          <button className="search-icon" type="submit"><span class="material-icons">search</span></button>
        </form>
        <NavLink className="training-link" to="/wishlist">
          <button className="top-section-button" type="submit">Wishlist</button>
        </NavLink>
        <NavLink className="training-link" to="/certificate">
          <button className="top-section-button" type="submit">My certificates</button>
        </NavLink>
        <NavLink className="training-link" to="/take-training">
          <button className="top-section-button" type="submit">Take a training</button>
        </NavLink>
      </div>
      <span class="media-sub-head">Upcoming</span>
      <div className="training-section">
        <TrainingProfile
                      name="Introduction to Django"
                      date="01 Dec'21 to 07 Jan'22"
                      duration="10:00-14:00"
                      certification="In-house Certification"
                      button="Enroll"
                      seats="30 Seats"
                      instructor="by Pranav anand"
                      imgUrl="./images/course-profile.png"  />
        <TrainingProfile
                      name="Introduction to Django"
                      date="01 Dec'21 to 07 Jan'22"
                      duration="10:00-14:00"
                      certification="In-house Certification"
                      button="Enroll"
                      seats="30 Seats"
                      instructor="by Pranav anand"
                      imgUrl="./images/course-profile.png"  />
        <TrainingProfile
                      name="Introduction to Django"
                      date="01 Dec'21 to 07 Jan'22"
                      duration="10:00-14:00"
                      certification="In-house Certification"
                      button="Enroll"
                      seats="30 Seats"
                      instructor="by Pranav anand"
                      imgUrl="./images/course-profile.png"  />
        <TrainingProfile
                      name="Introduction to Django"
                      date="01 Dec'21 to 07 Jan'22"
                      duration="10:00-14:00"
                      certification="In-house Certification"
                      button="Enroll"
                      seats="30 Seats"
                      instructor="by Pranav anand"
                      imgUrl="./images/course-profile.png"  />
        <TrainingProfile
                      name="Introduction to Django"
                      date="01 Dec'21 to 07 Jan'22"
                      duration="10:00-14:00"
                      certification="In-house Certification"
                      button="Enroll"
                      seats="30 Seats"
                      instructor="by Pranav anand"
                      imgUrl="./images/course-profile.png"  />

      </div>
      <span class="media-sub-head">Enrolled</span>
      <div className="training-section">
        <TrainingProfile
                      name="Introduction to Django"
                      date="01 Dec'21 to 07 Jan'22"
                      duration="10:00-14:00"
                      certification="In-house Certification"
                      button="Withdraw"
                      seats="13 Seats"
                      instructor="by Pranav anand"
                      imgUrl="./images/course-profile.png"  />
        <TrainingProfile
                      name="Introduction to Django"
                      date="01 Dec'21 to 07 Jan'22"
                      duration="10:00-14:00"
                      certification="In-house Certification"
                      button="Withdraw"
                      seats="13 Seats"
                      instructor="by Pranav anand"
                      imgUrl="./images/course-profile.png"  />
        <TrainingProfile
                      name="Introduction to Django"
                      date="01 Dec'21 to 07 Jan'22"
                      duration="10:00-14:00"
                      certification="In-house Certification"
                      button="Withdraw"
                      seats="13 Seats"
                      instructor="by Pranav anand"
                      imgUrl="./images/course-profile.png"  />
        <TrainingProfile
                      name="Introduction to Django"
                      date="01 Dec'21 to 07 Jan'22"
                      duration="10:00-14:00"
                      certification="In-house Certification"
                      button="Withdraw"
                      seats="13 Seats"
                      instructor="by Pranav anand"
                      imgUrl="./images/course-profile.png"  />
      </div>
      <span class="media-sub-head">Attended</span>
      <div className="training-section">
        <TrainingProfile
                      name="Introduction to Django"
                      date="01 Dec'21 to 07 Jan'22"
                      duration="10:00-14:00"
                      certification="In-house Certification"
                      button="Get certificate"
                      seats="Completed"
                      instructor="by Pranav anand"
                      imgUrl="./images/course-profile.png"  />
        <TrainingProfile
                      name="Introduction to Django"
                      date="01 Dec'21 to 07 Jan'22"
                      duration="10:00-14:00"
                      certification="In-house Certification"
                      button="Get certificate"
                      seats="Incomplete"
                      instructor="by Pranav anand"
                      imgUrl="./images/course-profile.png"  />
        <TrainingProfile
                      name="Introduction to Django"
                      date="01 Dec'21 to 07 Jan'22"
                      duration="10:00-14:00"
                      certification="In-house Certification"
                      button="Get certificate"
                      seats="Incomplete"
                      instructor="by Pranav anand"
                      imgUrl="./images/course-profile.png"  />
        <TrainingProfile
                      name="Introduction to Django"
                      date="01 Dec'21 to 07 Jan'22"
                      duration="10:00-14:00"
                      certification="In-house Certification"
                      button="Get certificate"
                      seats="Completed"
                      instructor="by Pranav anand"
                      imgUrl="./images/course-profile.png"  />
      </div>
    </div>
  )
}

export default Training;
