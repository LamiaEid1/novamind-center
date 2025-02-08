import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImage from "../../assets/AboutPage.png";
import "../../style.css";
import "../../App.css";

const About = () => {
  return (
    <Container fluid className="about-content py-5" id="about">
      <Row className="d-flex align-items-center text-center text-sm-start">
        <Col xs={12} sm={6} md={5} className="d-flex justify-content-center order-2 order-sm-1">
          <img 
            src={aboutImage} 
            alt="hero" 
            id="homePage" 
            className="img-fluid w-100 w-sm-75 w-md-50"
            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} 
          />
        </Col>

        <Col xs={12} sm={6} md={7} className="px-3 order-1 order-sm-2">
          <h1 className="display-5 fw-bold">
            <span className="purple">Our Mission</span>!
          </h1>
          <p className="home-about-body fs-5 mt-3" id="home-about-body">
            To inspire, educate, and support all children in their journey of growth, by embracing diversity and promoting an inclusive community where every child feels valued and understood.
          </p>
          <p  className="home-about-body fs-5 mt-3" id="home-about-body">
          We are committed to providing high-quality education that caters to the unique needs of each child. By celebrating individuality and encouraging curiosity, we create a space where students are not only educated but also empowered to become compassionate, creative, and confident individuals.

Join us on a journey of growth, discovery, and limitless possibilities. Together, we can build a brighter future for all children.
          </p>
        
        </Col>
      </Row>
    </Container>
  );
};

export default About;