import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import pay1 from '../assets/pay1.png';
import pay2 from '../assets/pay2.png';
import pay3 from '../assets/pay3.png';
import pay4 from '../assets/pay4.png';
import pay5 from '../assets/pay5.png';
import pay6 from '../assets/pay6.png';
import './Payment.css';

export default function TrustedBy() {
  const logos =  [pay1,pay2,pay3,pay4,pay5,pay6]; // Place these in /public or /assets

  return (
    <Container fluid className="text-center bg-light py-5" id="payment">
      <h5 className="mb-4 text-uppercase text-muted">Worldwide shipping</h5>
      <Row className="justify-content-center align-items-center g-2">
        {logos.map((pay, i) => (
          <Col xs={4} md={2} key={i}>
            <img src={pay} alt={`pay${i}`} className="img-fluid grayscale payments" />
          </Col>
        ))}
      </Row>
    </Container>
  );
}