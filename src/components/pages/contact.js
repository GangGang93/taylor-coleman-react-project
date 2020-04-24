import React from 'react';
import contactPagePicture from "../../../static/assets/images/auth/login.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function() {
  return (
      <div className="content-page-wrapper">       
        <div className="left-column" 
          style={{
            background: "url(" + contactPagePicture + ") no-repeat",
            backgroundSize: "fit",
            backgroundPostiion: "center"
          }}
        />  
        <div className="right-column">
          <div className="contact-bullet-points">
            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon  icon="phone" />
              </div>

              <div className="text">718-561-7896</div>
            </div>

            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon  icon="envelope" />
              </div>

              <div className="text">penelope@askamandaplease.com</div>
            </div>
        

            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon  icon="map-marked-alt" />
              </div>

              <div className="text">New York, NY [YEEER]</div>
            </div>
          </div>

          Holla at ya girl! Send a YER!</div>
      </div>
  )
}