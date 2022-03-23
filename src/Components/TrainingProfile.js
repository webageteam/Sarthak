import React from 'react';
import './TrainingProfile.css';

function TrainingProfile(props){
  return(
    <div className="training-profile-container">
      <section className="training-profile-top">
        <img className="training-profile-image" src={props.imgUrl} alt="training-profile-image"/>
      </section>
      <section className="training-detail">
        <span className="training-name">{props.name}</span>
        <section className="training-available">
          <span className="instructor">{props.instructor}</span>
          <span className="seats"><span class="material-icons seat-icon">chair</span>{props.seats}</span>
        </section>
        <section className="training-date-time">
          <span className="training-profile-date"><span class="material-icons training-time-icon">calendar_today</span>{props.date}</span>
          <span className="training-profile-time"><span class="material-icons training-time-icon">schedule</span>{props.duration}</span>
        </section>
        <span className="certification">{props.certification}</span>
        <span className="certificate">(Include certificate)</span>
      </section>
      <section className="training-buttons">
        <button className="training-profile-action">{props.button}</button>
        <span className="material-icons training-action-icons">info</span>
        <span className="material-icons training-action-icons">share</span>
      </section>
    </div>
  )
}

export default TrainingProfile;
