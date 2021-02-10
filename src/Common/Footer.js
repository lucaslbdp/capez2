import React from "react";
import Button from "react-bootstrap/Button";
import { MDBContainer } from "mdbreact";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-light pt-5 elegant-color pb-5">
      <Container>
        <Row>
          <div className="col-sm-12 col-md-4 mt-4">
            <img src={process.env.PUBLIC_URL + "logoFooter2.png"}></img>
            <p className="mt-4">2021 &copy; Todos los derechos reservados - CAPEZ</p>
            <p>Tucumán - Argentina.</p>
            <p>Diseñado por Guillou Brands</p>
            <p>Desarrollado por Lucas Barrionuevo</p>
          </div>
          <div className="col-sm-12 col-md-4 ml-auto ml-5 text-center mt-5 pt-5">
            <a style={{ color: "black" }}
              target="_blank noreferrer"
              href="https://api.whatsapp.com/send?phone=+5493815516016"
            >
              <img src={process.env.PUBLIC_URL + "contactar.png"} style={{maxWidth:"300px"}} className=""></img></a>
            <div className="ml-2">
              <p className="mt-3" style={{fontSize:"18px"}}>Seguinos en nuestras redes:</p>
              <a
                target="_blank noreferrer"
                href="https://www.facebook.com/capezcomunicacion"
              >
              <img src={process.env.PUBLIC_URL + "/facebookIcon.png"} style={{maxWidth:"40px"}} className="ml-5"></img></a>
              <a
                target="_blank noreferrer"
                href="https://www.instagram.com/capezcomunicacion/"
              >
              <img src={process.env.PUBLIC_URL + "/instagramIcon.png"} style={{maxWidth:"40px"}} className="ml-2"></img></a>
              <a style={{ color: "black" }}
                target="_blank noreferrer"
                href="https://api.whatsapp.com/send?phone=+5493815516016"
              >
              <img src={process.env.PUBLIC_URL + "/whatsappIcon.png"} style={{maxWidth:"40px"}} className="ml-2"></img></a>
            </div>
          </div>
        </Row></Container>
      <hr style={{ width: "90%" }}></hr>
    </footer>
  );
};

export default Footer;
