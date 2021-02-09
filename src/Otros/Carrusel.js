import React from 'react';
import Carousel from "react-bootstrap/Carousel"

const Nosotros = () => {
    return (
        <div className="pt-5 mt-5">
            <Carousel className="pt-5">
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-80"
                        src={process.env.PUBLIC_URL + "/slider1.png"}
                        alt="First slide" height="550px"
                    />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-80"
                        src={process.env.PUBLIC_URL + "/slider1.png"}
                        alt="Second slide" height="550px"
                    />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-80"
                        src={process.env.PUBLIC_URL + "/slider1.png"}
                        alt="Third slide" height="550px"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Nosotros;