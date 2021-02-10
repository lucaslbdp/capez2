import React from 'react';
import Carrusel from "../Otros/Carrusel";
import Jumbo from "../Otros/Jumbo";
import Contacto from "../Otros/Contacto";
import Container from "react-bootstrap/Container";
import ".././App.css";
import ayudarte from "../img/ayudarte.png";
import chatbot from "../img/chatbot.png";
import branding from "../img/branding.png";
import web from "../img/web.png";


const Inicio = () => {
    return (
        <Container fluid style={{padding:"0px"}}>
            <div className="text-center">
                <Carrusel></Carrusel>
                <img src={ayudarte} alt="img ayudar" width="10%" className="mt-5 pt-5"></img>
                <h1 style={{ textTransform: "initial", letterSpacing: "0cm", color:"#818181", fontSize:"40px"}}><strong>¿Cómo podemos ayudarte?</strong></h1>
                <h3 style={{ textTransform: "initial", color:"#9a9a9a", letterSpacing:"0cm"}} className="pb-5">Tenemos los servicios de comunicación <br></br>que tu empresa necesita</h3>
            </div>

            <Jumbo></Jumbo>
            <article className="grey lighten-3 col-sm-12">
                <div className="row text-center ml-5">
                    <div className="item col-12 col-md-6 col-lg-3" style={{ fontSize: "2cm", color: "green" }}>
                        <img src={chatbot} alt="icono chat" width="40%"></img>
                        <h3 style={{color:"#818181", textTransform:"initial", letterSpacing:"0cm"}}><strong>Chatbot <br></br>personalizado</strong></h3>
                        <p style={{ fontSize: "15px", color: "#9a9a9a" }} className="mt-4">Daremos vida a tus redes sociales, planificaremos una conversación exitosa con tu cliente, dando la mayor información sobre tu negocio.</p>
                    </div>
                    <div className="item col-12 col-md-6 col-lg-3" style={{ fontSize: "2cm", color: "green" }}>
                        <img src={branding} alt="icono br" width="40%"></img>
                        <h3 style={{color:"#818181", textTransform:"initial", letterSpacing:"0cm"}}><strong>Branding y diseño de marca</strong></h3>
                        <p style={{ fontSize: "15px", color: "#9a9a9a" }} className="mt-4">Construiremos o renovaremos tu marca de manera profesional, coherente y adecuado a los últimos estándares.</p>
                    </div>
                    <div className="item col-12 col-md-6 col-lg-3" style={{ fontSize: "2cm", color: "green" }}>
                        <img src={web} alt="icono web" width="40%"></img>
                        <h3 style={{color:"#818181", textTransform:"initial", letterSpacing:"0cm"}}><strong>Desarrollo<br></br>web</strong></h3>
                        <p style={{ fontSize: "15px", color: "#9a9a9a" }} className="mt-4">Desarrollaremos la presencia digital de tu negocio con una página web optimizada para atraer consultas.</p>
                    </div>
                </div>
            </article>
            <Contacto></Contacto>
        </Container>
    );
};

export default Inicio;