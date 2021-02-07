import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { MDBContainer } from "mdbreact";
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-light py-5 pt-5 unique-color">
        <Container>
            <Row>
      <div className="col-sm-12 col-md-4">
        <p style={{ fontSize: "20px" }}>
          <strong>Contáctanos en nuestras redes sociales:</strong>
        </p>
        <div style={{ fontSize: "35px" }}>
          <a style={{color:"black"}}
            target="_blank noreferrer"
            href="https://www.facebook.com/capezcomunicacion"
          >
            <FontAwesomeIcon
              className="ml-5"
              icon={faFacebook}
            ></FontAwesomeIcon>
          </a>
          <a style={{color:"black"}}
            target="_blank noreferrer"
            href="https://www.instagram.com/capezcomunicacion/"
          >
            <FontAwesomeIcon
              className="ml-5"
              icon={faInstagram}
            ></FontAwesomeIcon>
          </a>
          <a style={{color:"black"}}
            target="_blank noreferrer"
            href="https://api.whatsapp.com/send?phone=+5493815516016"
          >
            <FontAwesomeIcon
              className="ml-5"
              icon={faWhatsapp}
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
      <div className="col-sm-12 col-md-4 ml-auto text-center">
      <Button variant="success">Contactarse con un asesor</Button>
      </div></Row></Container>
      <br></br>
      <div
        className="footer-copyright text-center py-3 unique-color-dark
"
      >
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.capezcomunicaciones.com">
            {" "}
            CapezComunicaciones.com{" "}
          </a>
        </MDBContainer>
      </div>
    </footer>
  );
};

export default Footer;
