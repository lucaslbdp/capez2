import React from "react";
import Button from "react-bootstrap/Button";
import { MDBContainer } from "mdbreact";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-light pt-5 elegant-color pb-5">
      <Container>
        <Row>
          <div className="col-sm-12 col-md-4 mt-3">
            <img src={process.env.PUBLIC_URL + "logoFooter.png"}></img>
            <p className="mt-4">2021 &copy; Todos los derechos reservados - CAPEZ</p>
            <p>Tucumán - Argentina.</p>
            <p>Diseñado por Guillou Brands</p>
            <p>Desarrollado por Lucas Barrionuevo</p>
          </div>
          <div className="col-sm-12 col-md-4 ml-auto ml-5 text-center mt-5">
            <a style={{ color: "black" }}
              target="_blank noreferrer"
              href="https://api.whatsapp.com/send?phone=+5493815516016"
            >
              <img src={process.env.PUBLIC_URL + "contactar.png"} className="mr-5"></img></a>
            <div className="ml-5">
              <p className="mt-3 ml-5" style={{fontSize:"18px"}}>Seguinos en nuestras redes:</p>
              <a
                target="_blank noreferrer"
                href="https://www.facebook.com/capezcomunicacion"
              >
              <img src={process.env.PUBLIC_URL + "/facebookIcon.png"} className="ml-5"></img></a>
              <a
                target="_blank noreferrer"
                href="https://www.instagram.com/capezcomunicacion/"
              >
              <img src={process.env.PUBLIC_URL + "/instagramIcon.png"} className="ml-2"></img></a>
              <a style={{ color: "black" }}
                target="_blank noreferrer"
                href="https://api.whatsapp.com/send?phone=+5493815516016"
              >
              <img src={process.env.PUBLIC_URL + "/whatsappIcon.png"} className="ml-2"></img></a>
            </div>
          </div>
        </Row></Container>
      <hr style={{ width: "90%" }}></hr>
    </footer>
  );
};

export default Footer;
