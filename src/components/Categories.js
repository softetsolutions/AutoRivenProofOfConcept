import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Categories.css";

// Example category data
const categories = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: `Category ${i + 1}`,
  description: "One line description here",
  image: require(`../assets/category${(i % 10) + 1}.png`) // use 10 images cyclically
}));

const Categories = () => {
  return (
    <Container  className="py-5">
      <h2 className="text-center mb-4">Our Categories</h2>
      <Row>
        {categories.map((cat) => (
          <Col
            key={cat.id}
            xs={4}
            md={2}
            className="d-flex align-items-stretch justify-content-center mb-4 border-0"
          >
            <div className="category-card text-center">
              <img src={cat.image} alt={cat.name} className="category-img mb-2" />
              <h6 className="mb-1">{cat.name}</h6>
              <p className="category-desc mb-2">{cat.description}</p>
              <Button variant="primary" size="sm">
                View More
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
