import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";import { MDBNavbar } from 'mdbreact';
import "../../src/App.css";


const Header = () => {
    return (
        <MDBNavbar color="unique-color" light expand="md" className="fixed-top" scrolling transparent>
            <Navbar.Brand href="#home">Capez</Navbar.Brand>
            <Nav className="ml-auto">
                <NavLink exact={true} to="/" style={{color:"black"}}>Inicio</NavLink>
            </Nav>
        </MDBNavbar>
    );
};

export default Header;