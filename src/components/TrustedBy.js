// src/components/TrustedBy.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import './Trusted.css';

export default function TrustedBy() {
  const logos =  [logo1, logo2, logo3, logo4]; // Place these in /public or /assets

  return (
    <Container fluid className="text-center bg-light py-5" id="trusted">
      <h5 className="mb-5 text-uppercase text-muted">Worldwide 
        <span className='trusted-letter'> Shipping</span></h5>
      <Row className="justify-content-center align-items-center g-4">
        {logos.map((logo, i) => (
          <Col xs={6} md={2} key={i}>
            <img src={logo} alt={`logo${i}`} className="img-fluid grayscale logos" />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
