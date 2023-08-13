import React, { useState } from 'react';
import './ProductPage.css';

function ProductPage({ translations }) {
  const [activeSection, setActiveSection] = useState('all');

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="product">
      <header className="header">
        <h1>{translations.product}</h1>
      </header>
      <hr />
      <nav className="navbar">
        <ul>
          <li><a href="#" onClick={() => handleNavClick('all')}>{translations.all}</a></li>
          <li><a href="#" onClick={() => handleNavClick('education')}>{translations.education}</a></li>
          <li><a href="#" onClick={() => handleNavClick('healthcare')}>{translations.healthy}</a></li>
          <li><a href="#" onClick={() => handleNavClick('it')}>{translations.it}</a></li>
          <li><a href="#" onClick={() => handleNavClick('general')}>{translations.general}</a></li>
        </ul>
      </nav>
      
      <div id="all" className={`category ${activeSection === 'all' ? 'active' : ''}`}>
        <h2>{translations.education} </h2>
        <ul>
        <li>Comprehensive eSchool Management Platform.</li>
        <li>Fulfil public and private schools business needs and requirements.</li>
        <li>Web based and mobile application.</li>
        <li>Automate all schools business processes to make better and faster decisions. Parent, Teacher, and Student collaboration.</li>
        <li>Learning Objects Repository based on SCORM and LOM.</li>
        <li>Virtual Class and Training System.</li>
        <li>Gradebook and reports.</li>
        <li>Automatic generation of Timetable and scheduling.</li>
        <li>Admission, registration, and fee management.</li>
        <li>Online exams and assignments.</li>
        <li>Management reports, dashboards, and report generator.</li>
        </ul>
        <h2>{translations.healthy }</h2>
        <ul>
          <li>Doctors Management.</li>
          <li>Clinic Management.</li>
          <li>Visits Managements.</li>
          <li>Appointment Management.</li>
          <li>Visits Scheduling.</li>
          <li>Reporting and Statistics.</li>
         </ul>
         <h2>{translations.it}</h2>
        <ul>
          <li>ITIL V3 Based Service Desk Solution.</li>
          <li>Full suite for trouble ticketing and support services.</li>
          <li>Multi-Organization.</li>
          <li>Multi Service Desk.</li>
          <li>Dynamic forms builder.</li>
          <li>Report generator.</li>
          <li>Email to Complaint.</li>
         </ul>
         <h2>{translations.general}</h2>
        <ul>
          <li>Call Center Solution for Telecom, Banks, and Utility Companies.</li>
          <li>Embedded workflow engine.</li>
          <li>Content creation and management.</li>
          <li>Fully integrated with Back Office Applications.</li>
          <li>Notification management.</li>
          <li>Service Level Management and escalation process.</li>
          <li>Vendors/Suppliers Incoming Invoice Registry management solution. Vendor/Supplier portal.</li>
         </ul>
      </div>

      <div id="education" className={`category ${activeSection === 'education' ? 'active' : ''}`}>
        <h2>{translations.education}  </h2>
        <ul>
        <li>Comprehensive eSchool Management Platform.</li>
        <li>Fulfil public and private schools business needs and requirements.</li>
        <li>Web based and mobile application.</li>
        <li>Automate all schools business processes to make better and faster decisions. Parent, Teacher, and Student collaboration.</li>
        <li>Learning Objects Repository based on SCORM and LOM.</li>
        <li>Virtual Class and Training System.</li>
        <li>Gradebook and reports.</li>
        <li>Automatic generation of Timetable and scheduling.</li>
        <li>Admission, registration, and fee management.</li>
        <li>Online exams and assignments.</li>
        <li>Management reports, dashboards, and report generator.</li>
        </ul>
        
      </div>

      <div id="healthcare" className={`category ${activeSection === 'healthcare' ? 'active' : ''}`}>
        <h2>{translations.healthy}  </h2>
        <ul>
          <li>Doctors Management.</li>
          <li>Clinic Management.</li>
          <li>Visits Managements.</li>
          <li>Appointment Management.</li>
          <li>Visits Scheduling.</li>
          <li>Reporting and Statistics.</li>
         </ul>

      </div>

      <div id="it" className={`category ${activeSection === 'it' ? 'active' : ''}`}>
        <h2>{translations.it} </h2>
        <ul>
          <li>ITIL V3 Based Service Desk Solution.</li>
          <li>Full suite for trouble ticketing and support services.</li>
          <li>Multi-Organization.</li>
          <li>Multi Service Desk.</li>
          <li>Dynamic forms builder.</li>
          <li>Report generator.</li>
          <li>Email to Complaint.</li>
         </ul>
      </div>

      <div id="general" className={`category ${activeSection === 'general' ? 'active' : ''}`}>
        <h2>{translations.general} </h2>
        <ul>
          <li>Call Center Solution for Telecom, Banks, and Utility Companies.</li>
          <li>Embedded workflow engine.</li>
          <li>Content creation and management.</li>
          <li>Fully integrated with Back Office Applications.</li>
          <li>Notification management.</li>
          <li>Service Level Management and escalation process.</li>
          <li>Vendors/Suppliers Incoming Invoice Registry management solution. Vendor/Supplier portal.</li>
         </ul>



      </div>
    </div>
  );
}

export default ProductPage;
