import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CarouselComponent from "./CarouselComponent";

const HomePage = () => {
  return (
    <Container className="mt-4">
      <CarouselComponent />
      
      <h2 className="text-center mt-4">Explore Categories</h2>
      <Row className="mt-3">
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={require("../images/movie1.jpg")} />
            <Card.Body>
              <Card.Title>Movies</Card.Title>
              <Card.Text>Find the latest blockbusters and classic films.</Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={require("../images/show1.avif")} />
            <Card.Body>
              <Card.Title>Events</Card.Title>
              <Card.Text>Discover upcoming concerts, festivals, and more.</Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={require("../images/cars.avif")} />
            <Card.Body>
              <Card.Title>Sports</Card.Title>
              <Card.Text>Watch live sports events and cheer for your team.</Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;