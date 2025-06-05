import React from 'react';
import { Container, Carousel, Card } from 'react-bootstrap';
import './Testimonials.css'; // ✅ Added custom CSS

const reviews = [
  {
    name: 'Joaquim F.',
    text: "I'm from Portugal, very good experience, good communication, and the piece that I ordered was in good condition!",
    rating: 5
  },
  {
    name: 'PAUL H.',
    text: "Secondhand Volvo V40 gearbox – great service. Recommended customer care service with Robert. Well recommended.",
    rating: 5
  },
  {
    name: 'Will.',
    text: "Very prompt and responsive. Reasonable pricing including international FedEx shipping. Happy with the result.",
    rating: 4
  }
];

const renderStars = (count) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={`star ${i < count ? 'filled' : ''}`}>&#9733;</span>
    );
  }
  return stars;
};

export default function Testimonials() {
  return (
    <Container className="py-5" id="testimonials">
      <h2 className="text-center mb-5">What Customers Say</h2>
      <Carousel variant="dark">
        {reviews.map((r, i) => (
          <Carousel.Item key={i}>
            <div className="testimonial-card mx-auto">
              <h5 className="mb-2">{r.name}</h5>
              <div className="mb-3 star-rating">{renderStars(r.rating)}</div>
              <p className="testimonial-text">{r.text}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

