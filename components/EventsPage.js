import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const imageStyle = {
  width: "100%",
  height: "500px",
  objectFit: "cover"
};

const events = [
  { id: 1, name: "Music Fest 2025", image: require("../images/musicfest.avif"), description: "Experience the best music festival of the year!" },
  { id: 2, name: "Comedy Night", image: require("../images/comedynight.avif"), description: "Laugh out loud with top comedians!" },
  { id: 3, name: "Art Expo", image: require("../images/artexpo.jpg"), description: "Explore stunning art from renowned artists." },
  { id: 4, name: "Food Carnival", image: require("../images/foodcarnival.jpg"), description: "Taste the best street food from around the world!" }
];

const timedEvents = [
  { id: 5, name: "Tech Conference", description: "Latest advancements in technology.", time: "10:00 AM - 4:00 PM" },
  { id: 6, name: "Theater Play", description: "Live drama performance by top artists.", time: "6:30 PM - 9:00 PM" },
  { id: 7, name: "Cooking Workshop", description: "Learn to cook delicious dishes.", time: "2:00 PM - 5:00 PM" },
  { id: 8, name: "Marathon 2025", description: "Run for a cause.", time: "5:30 AM - 9:00 AM" }
];

const EventsPage = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      
      <Row>
        {events.map((event) => (
          <Col key={event.id} md={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={event.image} alt={event.name} style={imageStyle} />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2 className="text-center mb-4">Scheduled Events</h2>

      <Row>
        {timedEvents.map((event) => (
          <Col key={event.id} md={3} className="mb-4">
            <Card className="text-center p-3">
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Card.Text><strong>Time:</strong> {event.time}</Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EventsPage;
