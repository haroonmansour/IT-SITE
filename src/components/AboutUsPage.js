import React from 'react';
import './AboutUsPage.css';
function AboutUsPage({ translations}) {
  return (
      <div className="about-us-page">
        <div className="about-us-content">
          <img src="/images/About Us.jpg" alt="About Us" className="about-us-image" />
          <div className="about-us-text">
            <p>{translations.aboutUsContent1}</p>
            <p>{translations.aboutUsContent2}</p>
          </div>
        </div>
  
        <hr className="section-divider" />
  
        <div className="section">
          <h2>{translations.visionHeader}</h2>
          <p>{translations.visionContent}</p>
        </div>
  
        <hr className="section-divider" />
  
        <div className="section">
          <h2>{translations.missionHeader}</h2>
          <p>{translations.missionContent}</p>
        </div>
  
        <hr className="section-divider" />
  
        <div className="section">
          <h2>{translations.managementHeader}</h2>
          <p>{translations.managementContent}</p>
        </div>
      </div>
    );
  }
  
  export default AboutUsPage;