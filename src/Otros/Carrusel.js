import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import slider1 from "../img/slider1.png";
import Row from "react-bootstrap/Row";

const Nosotros = () => {
    return (
        <Container>
            <Row>
                <div className="pt-5 mt-5">
                    <Carousel className="pt-5">
                        <Carousel.Item interval={4000}>
                            <img
                                src={slider1}
                                className="d-block w-80"
                                alt="First slide" height="550px"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-80"
                                src={slider1}
                                alt="Second slide" height="550px"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-80"
                                src={slider1}
                                alt="Third slide" height="550px"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Row>
        </Container>
    );
};

export default Nosotros;