// src/components/Hero.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import heroImage from "../assets/hero.png"; // Put the image in /public or /assets
import "./Hero.css";

export default function Hero() {
  return (
    <Container fluid className="bg-light py-5" id="hero">
      <Container>
        <div className="upperline"></div>

        <i
          className="fab fa-facebook-f"
          style={{
            color: "black",
            fontSize: "20px",
            position: "absolute",
            top: "430px",
            left: "60px",
          }}
        ></i>

        <i
          className="fa-brands fa-instagram"
          style={{
            color: "black",
            fontSize: "20px",
            position: "absolute",
            top: "482px",
            left: "60px",
          }}
        ></i>

        <i
          className="fa-brands fa-x-twitter "
          style={{
            color: "black",
            fontSize: "20px",
            position: "absolute",
            top: "530px",
            left: "60px",
          }}
        ></i>
        <div className="lowerline"></div>

        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h1 className="display-4 fw-bold">Millions of Used Auto Parts 
              <span className="letter"> Fast Shipping</span>

            </h1>
            <p className="lead text-muted">
            Find parts by OEM code
            </p>
            <Button variant="primary Main-button" size="lg">
              Search Now
            </Button>
          </Col>
          <Col md={6}>
            <img src={heroImage} alt="Hero" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
