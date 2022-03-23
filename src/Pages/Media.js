import React from 'react';
import CourseProfile from '../Components/CourseProfile';
import './Media.css';

function Media(){
  return(
    <div className="profile-page">
      <span class="profile-head">Media</span>
      <span class="media-sub-head">Recent Courses</span>
      <div className="courses-section">
        <CourseProfile
                   name="Introduction to Django"
                   followedText="by Pranav anand"
                   days="07 days ago"
                   imageUrl="./images/course-profile.png" />
        <CourseProfile
                  name="Introduction to Django"
                  followedText="by Pranav anand"
                  days="07 days ago"
                  imageUrl="./images/course-profile.png" />
        <CourseProfile
                   name="Introduction to Django"
                   followedText="by Pranav anand"
                   days="07 days ago"
                   imageUrl="./images/course-profile.png" />
        <CourseProfile
                   name="Introduction to Django"
                   followedText="by Pranav anand"
                   days="07 days ago"
                   imageUrl="./images/course-profile.png" />
      </div>
      <span class="media-sub-head">All Courses</span>
      <div className="all-courses-section">
        <CourseProfile
                   name="Introduction to Django"
                   followedText="by Pranav anand"
                   days="07 days ago"
                   imageUrl="./images/course-profile.png" />
        <CourseProfile
                  name="Introduction to Django"
                  followedText="by Pranav anand"
                  days="07 days ago"
                  imageUrl="./images/course-profile.png" />
        <CourseProfile
                   name="Introduction to Django"
                   followedText="by Pranav anand"
                   days="07 days ago"
                   imageUrl="./images/course-profile.png" />
        <CourseProfile
                   name="Introduction to Django"
                   followedText="by Pranav anand"
                   days="07 days ago"
                   imageUrl="./images/course-profile.png" />
        <CourseProfile
                   name="Introduction to Django"
                   followedText="by Pranav anand"
                   days="07 days ago"
                   imageUrl="./images/course-profile.png" />
        <CourseProfile
                  name="Introduction to Django"
                  followedText="by Pranav anand"
                  days="07 days ago"
                  imageUrl="./images/course-profile.png" />
        <CourseProfile
                   name="Introduction to Django"
                   followedText="by Pranav anand"
                   days="07 days ago"
                   imageUrl="./images/course-profile.png" />
        <CourseProfile
                   name="Introduction to Django"
                   followedText="by Pranav anand"
                   days="07 days ago"
                   imageUrl="./images/course-profile.png" />
      </div>
      <div className="more">
        <span className="expand-more-text">View more</span>
        <span class="material-icons expand-more">expand_more</span>
      </div>
      <span class="media-sub-head">Watch Later</span>
      <div className="courses-section">
        <CourseProfile
                   name="Introduction to Django"
                   followedText="by Pranav anand"
                   days="07 days ago"
                   imageUrl="./images/course-profile.png" />
        <CourseProfile
                  name="Introduction to Django"
                  followedText="by Pranav anand"
                  days="07 days ago"
                  imageUrl="./images/course-profile.png" />
        <CourseProfile
                   name="Introduction to Django"
                   followedText="by Pranav anand"
                   days="07 days ago"
                   imageUrl="./images/course-profile.png" />
        <CourseProfile
                   name="Introduction to Django"
                   followedText="by Pranav anand"
                   days="07 days ago"
                   imageUrl="./images/course-profile.png" />
      </div>
    </div>
  )
}

export default Media;
