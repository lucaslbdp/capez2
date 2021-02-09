import React from 'react';
import Carrusel from "../Otros/Carrusel";
import Jumbo from "../Otros/Jumbo";
import Contacto from "../Otros/Contacto";
import Container from "react-bootstrap/Container";
import ".././App.css"


const Inicio = () => {
    return (
        <Container fluid style={{padding:"0px"}}>
            <div className="text-center">
                <Carrusel></Carrusel>
                <img src={process.env.PUBLIC_URL + "/ayudarte.png"} className="mt-5"></img>
                <h1 style={{ textTransform: "initial", letterSpacing: "0cm", color:"#818181", fontSize:"40px"}}><strong>¿Cómo podemos ayudarte?</strong></h1>
                <h3 style={{ textTransform: "initial", color:"#9a9a9a" }}>Tenemos los servicios de comunicación que tu empresa necesita</h3>
            </div>

            <Jumbo></Jumbo>
            <article className="grey lighten-3">
                <div className="row text-center">
                    <div className="item col-12 col-md-6 col-lg-3" style={{ fontSize: "2cm", color: "green" }}>
                        <img src={process.env.PUBLIC_URL + "chatbot.png"} width="75%"></img>
                        <h3 style={{color:"black", textTransform:"initial"}}><strong>Chatbot personalizado</strong></h3>
                        <p style={{ fontSize: "15px", color: "#9a9a9a" }} className="mt-4">Daremos vida a tus redes sociales, planificaremos una conversación exitosa con tu cliente, dando la mayor información sobre tu negocio.</p>
                    </div>
                    <div className="item col-12 col-md-6 col-lg-3" style={{ fontSize: "2cm", color: "green" }}>
                        <img src={process.env.PUBLIC_URL + "branding.png"} width="75%"></img>
                        <h3 style={{color:"black", textTransform:"initial"}}><strong>Branding y diseño de marca</strong></h3>
                        <p style={{ fontSize: "15px", color: "#9a9a9a" }} className="mt-4">Construiremos o renovaremos tu marca de manera profesional, coherente y adecuado a los últimos estándares.</p>
                    </div>
                    <div className="item col-12 col-md-6 col-lg-3" style={{ fontSize: "2cm", color: "green" }}>
                        <img src={process.env.PUBLIC_URL + "web.png"} width="75%"></img>
                        <h3 style={{color:"black", textTransform:"initial"}}><strong>Desarrollo web</strong></h3>
                        <p style={{ fontSize: "15px", color: "#9a9a9a" }} className="mt-5">Desarrollaremos la presencia digital de tu negocio con una página web optimizada para atraer consultas.</p>
                    </div>
                </div>
            </article>
            <Contacto></Contacto>
        </Container>
    );
};

export default Inicio;