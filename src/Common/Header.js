import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import { MDBNavbar } from 'mdbreact';


const Header = () => {
    return (
        <MDBNavbar color="grey lighten-3" className="fixed-top" scrolling transparent>
            <Navbar.Brand href="/" className="pt-0 ml-5"><img src={process.env.PUBLIC_URL + "logoHead.png"}></img></Navbar.Brand>
            <Navbar.Brand className="ml-auto">
                <a style={{ color: "black" }}
                    target="_blank noreferrer"
                    href="https://www.instagram.com/capezcomunicacion/"
                >
                    <img src={process.env.PUBLIC_URL + "/instagramIcon.png"} className="mr-4" style={{maxWidth:"50px"}}></img></a>
                <a style={{ color: "black" }}
                    target="_blank noreferrer"
                    href="https://api.whatsapp.com/send?phone=+5493815516016"
                >
                    <img src={process.env.PUBLIC_URL + "/whatsappIcon.png"} style={{maxWidth:"50px"}} className="mr-4"></img></a>
                <a style={{ color: "black" }}
                    target="_blank noreferrer"
                    href="https://www.facebook.com/capezcomunicacion"
                >
                    <img src={process.env.PUBLIC_URL + "/facebookIcon.png"} style={{maxWidth:"50px"}} className="mr-4"></img></a>
            </Navbar.Brand>
        </MDBNavbar>
    );
};

export default Header;