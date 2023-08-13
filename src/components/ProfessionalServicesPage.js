import React from 'react';
import './ProfessionalServicesPage.css';
function ProfessionalServicesPage({ translations }) {
  return (
    <div className="professional-services">
      <img src="/images/ProfessionalServices.png" alt={translations.imageAlt} />

      <p className="paragraphh">{translations.paragraph}</p>

<div className="service-list">
  <div className="business-solutions">
    <h2>{translations.businessSolutionsHeader}</h2>
    <ul>
      {translations.businessSolutionsList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>

  <div className="our-services">
    <h2>{translations.ourServicesHeader}</h2>
    <ul>
      {translations.ourServicesList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
</div>
</div>
);
}

export default ProfessionalServicesPage;