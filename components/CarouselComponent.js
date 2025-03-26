import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselComponent = () => {
  const imageStyle = {
    width: "100%",
    height: "500px",
    objectFit: "cover",
  };

  return (
    <Container fluid className="d-flex justify-content-center">
      <div style={{ width: "100%" }}>
        <Carousel>
          <Carousel.Item>
            <img style={imageStyle} src={require("../images/1.jpg")} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img style={imageStyle} src={require("../images/2.jpg")} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img style={imageStyle} src={require("../images/3.jpg")} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
};

export default CarouselComponent;
