import React from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";

const InfoCard = () => {
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Profile Info</h4>

        <div>
          <UilPen />

        </div>

      </div>

      <div className="info">
        {/* */}
        <span>
          <b>Status </b>
        </span>
        <span>Single</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Kathmandu</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Leapfrog</span>
      </div>

      <button className="button logout-button">Log Out</button>
    </div>
  );
};

export default InfoCard;
