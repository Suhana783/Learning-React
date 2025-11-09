import React from "react";
import './ProfileCard.css'

function ProfileCard({ name, title, bio }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <h4>{title}</h4>
      <p>{bio}</p>
    </div>
  );
}

export default ProfileCard;
