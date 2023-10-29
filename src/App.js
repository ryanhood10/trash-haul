import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Engagement from './components/Engagement';
import Contact from './components/Contact';
// import HeadlineCards from './compenents/HeadlineCards';
import OtherHero from './components/OtherHero';
import Hero from './components/Hero';
import './index.css';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="main-container">
        <Header />
        
        <Routes>
          <Route
            path="/"
            element={<React.Fragment>
              <Hero />
        <Engagement />
        <OtherHero />
            </React.Fragment>
            }
          />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
