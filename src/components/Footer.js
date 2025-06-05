import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // 👈 Custom CSS
import logo from '../assets/Mainlogo.png'; // 👈 Replace with your actual logo image path
import pay1 from '../assets/pay1.png';
import pay2 from '../assets/pay2.png';
import pay3 from '../assets/pay3.png';
import pay4 from '../assets/pay4.png';
import pay5 from '../assets/pay5.png';
import pay6 from '../assets/pay6.png';

export default function Footer() {
  return (
    <footer className="custom-footer">
      <Container fluid className='footer-container md-8'>
        
        <Row className="footer-top">
          <Row>
          <Col md={3}>
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>
          </Row>
         
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Payments</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Warranty</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Our categories</h5>
            <ul>
              <li><a href="#">Body Components</a></li>
              <li><a href="#">Filters and Filtration Systems</a></li>
              <li><a href="#">Lighting and Signaling Devices</a></li>
              <li><a href="#">Engines and Engine Components</a></li>
              <li><a href="#">Cooling Systems</a></li>
              <li><a href="#">Electrical and Ignition Systems</a></li>
              <li><a href="#">Brake Systems</a></li>
              <li><a href="#">Steering Mechanisms</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Account</h5>
            <ul>
              <li><a href="#">Returns</a></li>
              <li><a href="#">404</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Newsletter</h5>
            <p>What’s inside: new arrivals, exclusive sales, truck news and more!</p>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </Col>
        </Row>
        
        <Row className="footer-bottom mt-4 align-items-center gap-4">
          <Col md={5}>
            <p className='connect'>Email: info@autoriven.com</p>
            <p className='connect'>Whatsapp: wa.me/48453094174</p>
          </Col>
          <Col md={2} className="text-md-center">
            <h6 className='payopt'>Payment options</h6>
          </Col>
          <Col >
            <div className="payment-icons">
              <img src={pay1} alt="PayPal" />
              <img src={pay2} alt="Stripe" />
              <img src={pay3} alt="Bank Transfer" />
              <img src={pay6} alt="Mastercard" />
              <img src={pay4} alt="Visa" />
              <img src={pay5} alt="American Express" />
            </div>
          </Col>
          <Row>
            <div className='border'></div>
          </Row>
      
        </Row>

        <Row className="footer-legal mt-3">
          <Col md={4} >
            <p>Copyright © 2025 Autoriven. All Rights Reserved</p>
            </Col >
            <Col  md={5}>
            <div >
              <a href="#">Privacy Policy</a> | 
              <a href="#"> Terms & Conditions</a> | 
              <a href="#"> Sitemap</a>
            </div>
          </Col>
          <Col md={2} className="text-md-end">
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-x-twitter"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
