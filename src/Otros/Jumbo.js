import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Jumbo = () => {
    return (
        <Jumbotron fluid className="mt-5 text-center">
            <Container>
                <h2 style={{textTransform:"initial"}}>Nosotros</h2>
                <p>Somos una empresa tucumana que llega para brindar la mejor calidad en comunicación a través de un servicio automático y personalizado a la vez, dejando resultados reales y eficaces.</p>
            </Container>
        </Jumbotron>

    );
};

export default Jumbo;