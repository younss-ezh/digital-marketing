import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import './menu.css';
import creativitytime from "./creativitytime.png"

export function Menu() {


  return (
    <>
        <Navbar sticky='top' className='bg-white shadow mb-2'>
            <Container>
                <div>
                    <Nav.Link to="/" as={NavLink}>
                        <img src={creativitytime} alt="creativitytime" width="280" height="80" />
                    </Nav.Link>
                </div>
                <Nav>
                    <Nav.Link to="/" as={NavLink}>
                        <h4>Home</h4>
                    </Nav.Link>
                    <Nav.Link to="/services" as={NavLink}>
                        <h4>Services</h4>
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        <h4>About</h4>
                    </Nav.Link>
                    <Nav.Link to="/contact" as={NavLink}>
                        <h4>Contact</h4>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
  );
};


