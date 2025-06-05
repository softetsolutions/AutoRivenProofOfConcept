// src/components/HowItWorks.js
import React from "react";
import { Container } from "react-bootstrap";
import './Contact.css';
import photo from '../assets/photo.png';

export default function HowItWorks() {
  return (
    <Container fluid className="py-5" id="contact">
      <div className="contact-box">
        <div className="text-box">
          <h1 className="Contact-text">New parts weekly! Can’t find it? Contact us!</h1>
        <button className="btn contact-btn ">Contact Us</button>
        </div>

      <img src={photo} className="photo"></img>
      </div>
    </Container>
  );
}
