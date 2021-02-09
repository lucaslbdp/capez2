import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import { MDBNavbar } from 'mdbreact';


const Header = () => {
    return (
        <MDBNavbar color="grey lighten-3" className="fixed-top" scrolling transparent>
            <Navbar.Brand href="/" className="pt-0"><img src={process.env.PUBLIC_URL+ "logoHead.png"}></img></Navbar.Brand>
        </MDBNavbar>
    );
};

export default Header;