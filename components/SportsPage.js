import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const featuredSports = [
  { id: 1, name: "Champions League Final", image: require("../images/football.avif"), description: "The biggest football showdown of the year!" },
  { id: 2, name: "Red Bull Moto Jam", image: require("../images/cars.avif"), description: "Race between cars." },
  { id: 3, name: "Cricket World Cup", image: require("../images/cricketworldcup.avif"), description: "Nations battle it out for cricket supremacy." },
  { id: 4, name: "Marathon", image: require("../images/marathon.avif"), description: "Witness the marathon." }
];

const upcomingMatches = [
  { id: 5, name: "Manchester United vs Liverpool", description: "Premier League clash", time: "8:00 PM - March 30" },
  { id: 6, name: "Golden State Warriors vs Lakers", description: "NBA regular season", time: "9:30 PM - April 1" },
  { id: 7, name: "India vs Australia", description: "T20 International", time: "2:00 PM - April 3" },
  { id: 8, name: "F1 Grand Prix", description: "High-speed action on the track", time: "5:00 PM - April 7" }
];

const SportsPage = () => {
  return (
    <Container className="mt-4">
      {}
      <div className="p-5 text-white text-center" style={{ backgroundImage: `url(${require("../images/sports-bg.jpg")})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <h1>Sports Events</h1>
      </div>

      <h2 className="text-center my-4">Featured Sports Events</h2>
      
      <Row>
        {featuredSports.map((event) => (
          <Col key={event.id} md={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={event.image} alt={event.name} />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2 className="text-center my-4">Upcoming Matches</h2>

      <Row>
        {upcomingMatches.map((event) => (
          <Col key={event.id} md={3} className="mb-4">
            <Card className="text-center p-3">
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Card.Text><strong>Time:</strong> {event.time}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SportsPage;
