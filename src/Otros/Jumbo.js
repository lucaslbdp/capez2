import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Jumbo = () => {
    return (
        <Jumbotron fluid className="mt-5 text-center">
            <Container>
                <h2>Nosotros</h2>
                <p>Somos una empresa tucumana en crecimiento, brindando la mejor opción para un servicio automático y personalizado a la vez... rápido y eficaz</p>
            </Container>
        </Jumbotron>

    );
};

export default Jumbo;