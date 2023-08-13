import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
function HomePage({ translations}) {
  return (
    <div className="home-page">
      <div className="img">
        <img src="/images/main.jpg" alt="main" className="img" />
      </div>
      <div className="services-section">
        <Link to="/professional-services" className="service">
          <img src="/images/1.png" alt="Professional Services" />
          <p>{translations.professionalServices}</p>
        </Link>
        <Link to="/software-development" className="service">
          <img src="/images/2.jpg" alt="Software Development" />
          <p>{translations.softwareDevelopment}</p>
        </Link>
        <Link to="/product" className="service">
          <img src="/images/3.jpg" alt="Product" />
          <p>{translations.product}</p>
        </Link>
      </div>
      <hr />
      <div className="about">
        <div className="about-content">
          <h2>{translations.aboutUs}</h2>
          <p>
            {translations.aboutUsContent}
          </p>
        </div>
        <div className="logo-section">
          <img src="/images/IT.png" alt="Logo" className="logo" />
          <p className="services-paragraph">
          {translations.aboutLogo}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;