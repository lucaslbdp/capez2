import React from 'react';
import Carrusel from "../Otros/Carrusel";
import Jumbo from "../Otros/Jumbo";
import Contacto from "../Otros/Contacto";
import Container from "react-bootstrap/Container";
import ".././App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faPenNib, faLaptopCode } from "@fortawesome/free-solid-svg-icons";


const Inicio = () => {
    return (
        <Container fluid>
            <div className="text-center">
                <Carrusel></Carrusel>
                <h1 className="mt-5 text-success" style={{textTransform:"initial"}}>¿Cómo podemos ayudarte?</h1>
                <h3 style={{textTransform:"initial"}}><strong>Tenemos los servicios de comunicación que tu empresa necesita</strong></h3>
            </div>

            <Jumbo></Jumbo>
            <article className="container">
                <div className="row text-align-center">
                    <div className="item col-12 col-md-6 col-lg-3" style={{ fontSize: "2cm", color: "green" }}>
                    <img src={process.env.PUBLIC_URL + "chatbot.png"}  width="85%"></img>
                        <h3>Chatbot personalizado</h3>
                        <p style={{ fontSize: "15px", color: "black" }}>Daremos vida a tus redes sociales, planificaremos una conversación exitosa con tu cliente, dando la mayor información sobre tu negocio.</p>
                    </div>
                    <div className="item col-12 col-md-6 col-lg-3" style={{ fontSize: "2cm", color: "green" }}>
                        <img src={process.env.PUBLIC_URL + "branding.png"} width="85%"></img>
                        <h3>Branding y diseño de marca</h3>
                        <p style={{ fontSize: "15px", color: "black" }}>Construiremos o renovaremos tu marca de manera profesional, coherente y adecuado a los últimos estándares.</p>
                    </div>
                    <div className="item col-12 col-md-6 col-lg-3" style={{ fontSize: "2cm", color: "green" }}>
                    <img src={process.env.PUBLIC_URL + "web.png"} width="85%"></img>
                        <h3>Desarrollo web</h3>
                        <p style={{ fontSize: "15px", color: "black" }}>Desarrollaremos la presencia digital de tu negocio con una página web optimizada para atraer consultas.</p>
                    </div>
                </div>
            </article>
            <Contacto></Contacto>
        </Container>
    );
};

export default Inicio;