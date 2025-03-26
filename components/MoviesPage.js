import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const nowShowing = [
  {
    title: "EMPURAAN",
    likes: "437K",
    image: require("../images/movie1.jpg"),
  },
  {
    title: "SIKANDAR",
    likes: "328.4K",
    image: require("../images/movie2.jpg"),
  },
  {
    title: "VEERA DHEERA SOORAN",
    likes: "34.4K",
    image: require("../images/movie3.jpg"),
  },
  {
    title: "ROBINHOOD",
    likes: "87K",
    image: require("../images/movie4.jpg"),
  },
];

const upcomingShows = [
  {
    title: "Upcoming Show 1",
    date: "2024-08-10",
    image: require("../images/show1.avif"),
  },
  {
    title: "Upcoming Show 2",
    date: "2024-09-15",
    image: require("../images/show2.avif"),
  },
  {
    title: "Upcoming Show 3",
    date: "2024-10-05",
    image: require("../images/show3.avif"),
  },
  {
    title: "Upcoming Show 4",
    date: "2024-11-20",
    image: require("../images/show4.avif"),
  },
];

const MoviesPage = () => {
  return (
    <Container>
      <h2 className="text-center mb-4">Now Showing</h2>
      <Row>
        {nowShowing.map((movie, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="text-center">
              <Card.Img variant="top" src={movie.image} alt={movie.title} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                  <span role="img" aria-label="like">👍</span> {movie.likes} Likes
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2 className="text-center mt-5 mb-4">Upcoming Shows</h2>
      <Row>
        {upcomingShows.map((show, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="text-center">
              <Card.Img variant="top" src={show.image} alt={show.title} />
              <Card.Body>
                <Card.Title>{show.title}</Card.Title>
                <Card.Text>Releasing on {show.date}</Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MoviesPage;
