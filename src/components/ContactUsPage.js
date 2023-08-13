import React from 'react';
import './ContactUsPage.css';
function ContactUsPage({ translations}) {
  return (
    <div className="contact-us-page">
      <div className="contact-header">
        <h1>{translations.contactHeader}</h1>
      </div>

      <div className="contact-content">
        <p>{translations.contactParagraph}</p>

        <div className="contact-info">
          <h2>{translations.palestineOfficeHeader}</h2>
          <p><strong>{translations.addressLabel}</strong> {translations.address}</p>
          <p><strong>{translations.telefaxLabel}</strong> {translations.telefax}</p>
          <p><strong>{translations.emailLabel}</strong> {translations.email}</p>
          <p><strong>{translations.poBoxLabel}</strong> {translations.poBox}</p>
        </div>

        <hr className="section-divider" />

        <div className="contact-form">
          <h2>{translations.contactFormHeader}</h2>
          <form>
            <label>{translations.yourNameLabel}</label>
            <input type="text" />

            <label>{translations.yourEmailLabel}</label>
            <input type="email" />

            <label>{translations.subjectLabel}</label>
            <input type="text" />

            <label>{translations.yourMessageLabel}</label>
            <textarea rows="5"></textarea>

            <button type="submit">{translations.sendButton}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;