import React from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.png";


const ProfileCard = ({ location }) => {
  const profilePage=true
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="CoverImage" />
        <img src={Profile} alt="ProfileImage"
        />
      </div>
      <div className="ProfileName">
        <span>Manoj Bhatt</span>
        <span>Senior Software Developer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>1M</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>2</span>
            <span>Following</span>
          </div>
          {profilePage && (
            <>
            <div className="vl"></div>
            <div className="follow">
              <span>6</span>
              <span>Posts</span>
            </div>
            </>
          )}
          
        </div>
        <hr />
      </div>
      {profilePage?'':
      <span style={{ textDecoration: "none"}}>
      My Profile
    </span>
      }
      
    </div>
  )
}
export default ProfileCard;
