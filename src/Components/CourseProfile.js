import React from 'react';
import './CourseProfile.css';

function CourseProfile(props){

  // function mOver(){
  //   document.getElementsByClassName("play-button-image").setAttribute("style", "visibility: visible");
  // }
  //
  // function mOut(){
  //   document.getElementsByClassName("play-button-image").setAttribute("style", "visibility: hidden");
  // }

  return(
    <div href="#" className="course-profile-container" onmouseover="mOver()" onmouseout="mOut()">
      <div className="course-profile-top">
        <img className="course-profile-image" src={props.imageUrl} alt="course-profile" />
        <img className="watch-later-image" src="./images/watch-later.jpg" alt="watch-later"/>
        <img className="play-button-image" src="./images/play-button.jpg" alt="play-button" />
      </div>
      <span className="course-name">{props.name}</span>
      <span class="material-icons more-vert">more_vert</span>
      <section className="course-detail">
        <span className="followed-text">{props.followedText}</span>
        <span className="days">{props.days}</span>
      </section>
    </div>
  )
}

export default CourseProfile;
