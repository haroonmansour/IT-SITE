import React from 'react';
import './SoftwareDevelopmentPage.css';

function SoftwareDevelopmentPage({ translations }) {
  return (
    <div className="software-development-page">
      <h2>{translations.softwareDevelopment}</h2>

      <p>{translations.softwareDevelopmentIntro}</p>

      <h3>{translations.softwareDevelopmentServicesHeader}</h3>
      <ul className="service-list">
        {translations.softwareDevelopmentServicesList.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>

      <p>{translations.softwareDevelopmentRAD}</p>

      <p>{translations.softwareDevelopmentApproach}</p>

      <h3>{translations.technologiesHeader}</h3>
      <hr className="divider" />
      <div className="technologies-images">
        <img src="\images\net.png" alt={translations.technologyAlt1} />
        <img src="\images\php.png" alt={translations.technologyAlt2} />
        <img src="\images\java.jpg" alt={translations.technologyAlt3} />
      </div>

      <h3>{translations.databasesHeader}</h3>
      <hr className="divider" />
      <div className="databases-images">
        <img src="/images/sql.jpg" alt={translations.databaseAlt1} />
        <img src="/images/mysql.png" alt={translations.databaseAlt2} />
        <img src="/images/oracle.jpg" alt={translations.databaseAlt3} />
      </div>
    </div>
  );
}

export default SoftwareDevelopmentPage;
