import React from 'react';
import Carrusel from "../Otros/Carrusel";
import Jumbo from "../Otros/Jumbo";
import Contacto from "../Otros/Contacto";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp, faPenNib, faLaptopCode} from "@fortawesome/free-solid-svg-icons";

const Inicio = () => {
    return (
        <Container fluid>
            <div className="text-center">
                <Carrusel></Carrusel>
                <h1 className="mt-5 text-success">¿Como podemos ayudarte?</h1>
                <h3>Tenemos los servicios de comunicación que necesitas</h3>
            </div>
            
            <Jumbo></Jumbo>
            <article className="row text-center shadow rounded">
                <div className="col sm-12 col-md-4" style={{fontSize:"2cm", color:"green"}}>
                    <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                    <h3 style={{color:""}}>Chatbot personalizado</h3>
                    <p style={{fontSize:"15px", color:"black"}}>Daremos vida a tus redes sociales, planificaremos una conversación exitosa con tu cliente, dando la mayor información sobre tu negocio.</p>
                </div>
                <div className="col-sm-12 col-md-4" style={{fontSize:"2cm", color:"green"}}>
                    <FontAwesomeIcon icon={faPenNib}></FontAwesomeIcon>
                    <h3>Branding y diseño de marca</h3>
                    <p style={{fontSize:"15px", color:"black"}}>Construiremos o renovaremos tu marca de manera profesional, coherente y adecuado a los últimos estándares.</p>
                </div>
                <div className="col-sm-12 col-md-4" style={{fontSize:"2cm", color:"green"}}>
                    <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon>
                    <h3>Desarrollo web</h3>
                    <p style={{fontSize:"15px", color:"black"}}>Desarrollaremos la presencia digital de tu negocio con una página web optimizada para atraer consultas.</p>
                </div>
            </article>
            <Contacto></Contacto>
            </Container>
    );
};

export default Inicio;