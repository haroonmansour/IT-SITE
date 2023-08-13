import React from 'react';
import './CustomersPage.css';

function CustomersPage({ translations }) {
  return (
    <div className="customers-page">
      <h1>{translations.Customers}</h1>
      <div className="customer-category">
        <h2 className="center">{translations.Proud}</h2>
      </div>
      <div className="customer-category">
      <h2>{translations.Government}</h2>
      <hr className="section-divider" />
        <div className="customer-images">
          <div className="customer-item">
            <img src="/images/PSS.png" alt="Customer 1" />
            <p>PSS</p>
          </div>
          <div className="customer-item">
            <img src="/images/PMA.png" alt="Customer 2" />
            <p>PMA</p>
          </div>
          <div className="customer-item">
            <img src="/images/PCMA.png" alt="Customer 3" />
            <p>PCMA</p>
          </div>
          <div className="customer-item">
            <img src="/images/PEX.png" alt="Customer 4" />
            <p>PEX</p>
          </div>
          <div className="customer-item">
            <img src="/images/PO.png" alt="Customer 5" />
            <p>PO </p>
          </div>
          <div className="customer-item">
            <img src="/images/MOA.jpeg" alt="Customer 6" />
            <p>MOA</p>
          </div>
          
        </div>
      </div>

      
      <div className="customer-category">
        <h2>{translations.Group}</h2>
        <hr className="section-divider" />
        <div className="customer-images">
          <div className="customer-item">
            <img src="/images/PIF.jpg" alt="Company 1" />
            <p>PIF</p>
          </div>
          <div className="customer-item">
            <img src="/images/APIC.jpg" alt="Company 2" />
            <p>APIC</p>
          </div>
          <div className="customer-item">
            <img src="/images/Massar Group.png" alt="Company 3" />
            <p>Massar Group</p>
          </div>
          <div className="customer-item">
            <img src="/images/Anabtawi Group.png" alt="Company 4" />
            <p>Anabtawi Group</p>
          </div>
          <div className="customer-item">
            <img src="/images/Nassar.png" alt="Company 5" />
            <p>Nassar</p>
          </div>
          <div className="customer-item">
            <img src="/images/Wassel Group.jpeg" alt="Company 6" />
            <p>Wassel Group</p>
          </div>
          
        </div>
      </div>

     
      <div className="customer-category">
        <h2>{translations.Telecom}</h2>
        <hr className="section-divider" />
        <div className="customer-images">
          <div className="customer-item">
            <img src="/images/Wataniya Mobile.jpeg" alt="Telecom 1" />
            <p>Wataniya Mobile</p>
          </div>
          <div className="customer-item">
            <img src="/images/Paltel.png" alt="Telecom 2" />
            <p>Paltel</p>
          </div>
          <div className="customer-item">
            <img src="/images/Jawwal.png" alt="Telecom 3" />
            <p>Jawwal</p>
          </div>
        </div>
      </div>


      <div className="customer-category">
        <h2>{translations.Wholesale}</h2>
        <hr className="section-divider" />
        <div className="customer-images">
          <div className="customer-item">
            <img src="/images/UNIPAL.png" alt="1" />
            <p>UNIPAL</p>
          </div>
          <div className="customer-item">
            <img src="/images/Palestine Automobile Company.png" alt=" 2" />
            <p>Palestine Automobile Company</p>
          </div>
          <div className="customer-item">
            <img src="/images/Medical Supplies & Services.png" alt="3" />
            <p>Medical Supplies & Services</p>
          </div>
          <div className="customer-item">
            <img src="/images/Sbitany.jpg" alt="4" />
            <p>Sbitany</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CustomersPage;