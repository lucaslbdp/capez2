import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import "../App.css";

const Jumbo = () => {

    return (
        <Jumbotron className="mt-5 text-center text-light shadow-sm mb-0" style={{backgroundImage:"url(./back.png)", width:"100%"}}>
            <img src={process.env.PUBLIC_URL + "/capezGris.png"} className="mb-0 mt-0"></img>
            <h2 style={{ textTransform: "initial", letterSpacing:"0cm", fontSize:"45px"}} className="text-light"><strong>Nosotros</strong></h2>
            <p style={{fontSize:"22px"}}>Somos una empresa tucumana que llega para brindar la mejor calidad en comunicación a través de un servicio automático y personalizado a la vez, dejando resultados reales y eficaces.</p>

        </Jumbotron>

    );
};

export default Jumbo;
