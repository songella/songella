import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function WebsitePageAlt({ scrollToSection }) {
  return (
    <Container>
      <Row>
        <p style={{ fontSize: "4.4rem" }}>Alternative Projects</p>
        <span style={{ fontSize: "1.4em", opacity: "50%" }}>
          A different showcase of my work
        </span>
      </Row>

      <Container style={{ height: "60vh", padding: "5%" }}>
        <Row className="justify-content-md-center">
          <Col>
            <Container>
              <Row style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                Project Beta
              </Row>
              <Row style={{ opacity: "75%" }}>
                This is an alternative project description.
              </Row>
              <Row style={{ opacity: "50%" }}>
                Uses the MERN tech stack.
              </Row>
              <Row>
                <Col>
                  <Button variant="outline-light">
                    <a href="https://example.com">Go to site</a>
                  </Button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Row>
        <Button
          variant="light"
          onClick={() => scrollToSection("contact")}
        >
          Contact Me
        </Button>
      </Row>
    </Container>
  );
}
