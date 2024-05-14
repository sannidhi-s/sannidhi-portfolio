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
    <Navbar expand="lg" fixed="top" bg="light">
      <Container fluid>
        <Navbar.Brand href="#heroSection">Work Term Report</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#heroSection">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#acknowledgements">Acknowledgements</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}






