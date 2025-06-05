HEAD
// src/App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CustomNavbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Payment from './components/Payment';
import Brand from './components/Brand';

function App() {
  return (
    <>
      <CustomNavbar />
      <Hero />
      <Features />
      <TrustedBy/>
      <Categories/>
      <Payment/>
      <Brand/>
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
export default App;