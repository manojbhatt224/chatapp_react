import React, { useEffect, useState } from "react";
import "./FollowersCard.css";
import { Followers } from '../../Data/FollwersData.js'

const FollowersCard = ({ location }) => {


  return (
    <div className="FollowersCard">
      <h3>People you may know</h3>

      {Followers.map((follower, id) => {
        return <div className="follower">
          <div>
            <img src={follower.img} className='followerImage' alt="img" />
            <div className="name">
              <span>{follower.name}</span>
              <span>@{follower.username}</span>
            </div>
          </div>
          <button className="button fc-button">
            Follow back
          </button>
        </div>;
      })}


    </div>
  );
};

export default FollowersCard;
