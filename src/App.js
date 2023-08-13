
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import ProfessionalServicesPage from './components/ProfessionalServicesPage';
import SoftwareDevelopmentPage from './components/SoftwareDevelopmentPage';
import CustomersPage from './components/CustomersPage';
import NewsPage from './components/NewsPage';
import AboutUsPage from './components/AboutUsPage';
import ContactUsPage from './components/ContactUsPage';
import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json';

function App() {
  
  const [language, setLanguage] = useState('en'); 
  const translations = language === 'en' ? enTranslations : arTranslations;
  
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Router>
      <div className={language === 'ar' ? 'rtl-layout' : 'ltr-layout'}>
        
        <header>
         <div className="header">
            <img src="/images/IT.png"  alt="Logo" className="logo" />
         </div>
        </header>

        <nav className="navbarr">
          <ul>
            <li><a href="/">{translations.home}</a></li>
            <li><a href="/product">{translations.product}</a></li>
            <li><a href="/professional-services">{translations.professionalServicess}</a></li>
            <li><a href="/software-development">{translations.softwareDevelopment}</a></li>
            <li><a href="/customers">{translations.customers}</a></li>
            <li><a href="/news">{translations.news}</a></li>
            <li><a href="/about">{translations.aboutUs}</a></li>
            <li><a href="/contact">{translations.contactUs}</a></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={HomePage} >
            <HomePage translations={translations}/>
          </Route>
          <Route path="/product" component={ProductPage} >
            <ProductPage translations={translations}  />
          </Route>
          <Route path="/professional-services" component={ProfessionalServicesPage} >
            <ProfessionalServicesPage translations={translations} />
          </Route>
          <Route path="/software-development" component={SoftwareDevelopmentPage} >
            <SoftwareDevelopmentPage translations={translations} />
          </Route>
          <Route path="/customers" component={CustomersPage} >
            <CustomersPage translations={translations} />
          </Route>
          <Route path="/news" component={NewsPage} >
            <NewsPage translations={translations} />
          </Route>
          <Route path="/about" component={AboutUsPage}>
            <AboutUsPage translations={translations} />
          </Route>
          <Route path="/contact" component={ContactUsPage}>
            <ContactUsPage translations={translations} />
          </Route>
      
        </Switch>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <a href="#"><img src="/images/twitter.png" alt="Twitter" /></a>
              <a href="#"><img src="/images/facebook.jpg" alt="Facebook" /></a>
            </div>
            <p>&copy; {translations.rights}</p>
            <div className="language">
              <select id="language-select" onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="ar">Arabic</option>
              </select>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;