import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import { MDBNavbar } from 'mdbreact';
import facebookIcon from "../img/facebookIcon.png";
import instagramIcon from "../img/instagramIcon.png";
import whatsappIcon from "../img/whatsappIcon.png";
import logoHead from "../img/logoHead.png";


const Header = () => {
    return (
        <MDBNavbar color="grey lighten-3" className="fixed-top" scrolling transparent>
            <Navbar.Brand href="/" className="pt-0 ml-5 pl-5"><img src={logoHead} alt="logo empresa"></img></Navbar.Brand>
                <Navbar.Brand className="mr-5">
                    <a style={{ color: "black" }}
                        target="_blank noreferrer"
                        href="https://www.instagram.com/capezcomunicacion/"
                    >
                        <img src={instagramIcon} alt="icono ig" className="mr-2" style={{ maxWidth: "40px" }}></img></a>
                    <a style={{ color: "black" }}
                        target="_blank noreferrer"
                        href="https://api.whatsapp.com/send?phone=+5493815516016"
                    >
                        <img src={whatsappIcon} alt="icono wp" style={{ maxWidth: "40px" }} className="mr-2"></img></a>
                    <a style={{ color: "black" }}
                        target="_blank noreferrer"
                        href="https://www.facebook.com/capezcomunicacion"
                    >
                        <img src={facebookIcon} alt="icono fb" style={{ maxWidth: "40px" }} className="mr-5"></img></a>
                </Navbar.Brand>
        </MDBNavbar>
    );
};

export default Header;