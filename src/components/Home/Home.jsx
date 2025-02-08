import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroPage from "../../assets/HeroPage.jpg";
import Cards from "../Cards/Cards";
import Cards1 from "../Cards/Cards1.jsx";
import About from "../About/About";
import Services from "../Services/Services.jsx";
import Contact from "../Contact/Contact.jsx";

function Home() {
  return (
    <section>
		<div className='hero-bg relative'>

      <Container>
        <Container className="home-content">
          <Row className="align-items-center text-center text-md-start">
            <Col md={7} className="mb-4 mb-md-0">
              <h1 style={{ fontSize: "2.6em" }}>
                Hello, welcome to <span className="purple">NOVAMIND</span>!
              </h1>
              <p className="home-about-body">
                Novamind is a center for developing children's educational abilities and skills.
                <br />
                In addition to the daily school diary for the three sessions in the French and English curricula.
              </p>

              <div className="d-flex flex-row flex-wrap justify-content-center justify-content-md-start gap-2 mt-3">
              <button onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
  <span className="text">Read More</span>
</button>

                <button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
               <span className="text" id="contactButton">Contact Us</span>
                </button>

              </div>

            </Col>
            <Col md={5} className="myAvtar text-center mt-4 mt-md-0">
              <img src={heroPage} alt="hero" className="img-fluid" />
            </Col>
          </Row>
          <div className="line">
          </div>
          <Cards />
          <div className="line">
          </div>
          <About />
          <div className="line">
          </div>
          <Cards1 />
          <div className="line">
          </div>
          <Services/>
          <div className="line">
          </div>
          <Contact/>
        </Container>
      </Container>
      </div>
    </section>
  );
}

export default Home;
