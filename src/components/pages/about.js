import React from 'react';
import profilePicture from "../../../static/assets/images/bio/TaylorLuiseColeman.jpg"

export default function() {
  return (
      <div className="content-page-wrapper">
        <div className="left-column" 
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPostiion: "center"
        }}
        />
        <div className="right-column">
          I am a creative, dynamic interesting creature learning a new skill every lifetime. A being beyond comparison, always growing, thriving, surviving, and sharing their gifts with those who are capable of comprehending their information.
        </div>
      </div>
  )
}