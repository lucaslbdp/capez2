import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import "../App.css";

const Jumbo = () => {

    return (
        <Jumbotron className="mt-5 text-center shadow-sm rounded" style={{backgroundImage:"url(./back.png)", width:"100%"}}>

            <h2 style={{ textTransform: "initial"}}>Nosotros</h2>
            <p>Somos una empresa tucumana que llega para brindar la mejor calidad en comunicación a través de un servicio automático y personalizado a la vez, dejando resultados reales y eficaces.</p>

        </Jumbotron>

    );
};

export default Jumbo;
