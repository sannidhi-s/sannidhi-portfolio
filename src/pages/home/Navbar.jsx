// 

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect } from 'react';




export default function NavBar() {

  useEffect(() => {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navigation',
    });

    return () => {
      scrollSpy.dispose();
    };
  }, []);


  return (
    <Navbar className="navbar navbar-expand-lg fixed-top">
      <Container fluid>
        <Navbar.Brand className="navbar-brand me-auto" href="#heroSection">Work Term Report</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className=" justify-content-end flex-grow-1 pe-3" data-bs-spy="scroll" data-bs-target="#navigation" data-bs-offset="0" tabindex="0">
            <Nav.Link className="mg-lx-2" href="#heroSection">About</Nav.Link>
            <Nav.Link className="mg-lx-2" href="#experience">Experience</Nav.Link>
            <Nav.Link className="mg-lx-2" href="#acknowledgements">Acknowledgements</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}






