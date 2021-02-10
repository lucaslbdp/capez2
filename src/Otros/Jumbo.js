import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import "../App.css";

const Jumbo = () => {

    return (
        <Jumbotron className="mt-5 text-center shadow-sm mb-0 pt-0" style={{backgroundImage:"url(./back.png)", width:"100%"}}>
            <img src={process.env.PUBLIC_URL + "/capezGris.png"} className="pb-0 mb-0"></img>
            <h2 style={{ textTransform: "initial", letterSpacing:"0cm", fontSize:"45px", color:"white"}} className="mb-3"><strong>Nosotros</strong></h2>
            <p style={{fontSize:"22px", color:"white"}} className="mb-4">Somos una empresa tucumana que llega para brindar <br></br> la mejor calidad en comunicación a través de un servicio <br></br> automático y personalizado a la vez, dejando resultados <br></br>reales y eficaces.</p>

        </Jumbotron>

    );
};

export default Jumbo;
