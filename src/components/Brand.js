import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Brand.css";

// Example category data
const brands = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: `Brand ${i + 1}`,
  image: require(`../assets/brand${(i % 10) + 1}.png`) // use 10 images cyclically
}));

const Categories = () => {
  return (
    <Container  className="py-5">
      <h2 className="text-center mb-4">Popular Brands</h2>
      <Row>
        {brands.map((brand) => (
          <Col
            key={brand.id}
            xs={4}
            md={2}
            className="d-flex align-items-stretch justify-content-center mb-4 border-0"
          >
            <div className="brand-card text-center">
              <img src={brand.image} alt={brand.name} className="brand-img mb-2" />
              <h6 className="mb-1">{brand.name}</h6>
             
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;