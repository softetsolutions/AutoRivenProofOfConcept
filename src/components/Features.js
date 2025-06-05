import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaChartLine, FaTruck, FaDatabase } from "react-icons/fa";
import "./Features.css";
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';

const features = [
  {
    icon: <a href="#"><img src={feature1} className="feature-image" /></a>
  },
  {
    icon: <a href="#"><img src={feature2} className="feature-image" /></a>
  },
  {
    icon: <a href="#"><img src={feature3} className="feature-image" /></a>
  }
];

export default function Features() {
  return (
    <Container className="py-5" id="features">
      <h2 className="text-center mb-4">How to Find 
        <span className="feature-letter"> Your Part</span> </h2>

     
      <Row className="justify-content-center mb-5">
        <Col md={10}>
          <div className="search-input-wrapper d-flex">
            <input
              type="text"
              placeholder="Search"
              className="form-control features-input"
            />
            <i className="bi bi-search search-icon"></i>
            <button className="features-button">Search</button>
          </div>
        </Col>
      </Row>

      <Row className="gy-4">
        {features.map((f, i) => (
          <Col key={i} xs={12} md={4}> 
            <Card className="text-center shadow-sm border-0">
              <div className="text-primary">{f.icon}</div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
