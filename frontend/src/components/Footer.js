import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="d-inline-block text-center">
            <a href="#">
              <i className="fab fa-instagram fa-3x "></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook fa-3x"></i>
            </a>
          </Col>
        </Row>

        <Row>
          <Col className="text-center py-3">
            Copyright &copy; Justus Santanna - Capstone Project 2022
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
