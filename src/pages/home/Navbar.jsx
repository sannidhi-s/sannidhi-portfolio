// 

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';



export default function NavBar () {

  useEffect(() => {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navigation',
    });

    return () => {
      scrollSpy.dispose();
    };
  }, []);


  return (
    <>
      <Navbar className="navbar navbar-expand-lg fixed-top"> {

      }
        <Container fluid>
          <Navbar.Brand className="navbar-brand me-auto" href="heroSection">Work Term Report</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="navigation"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Work Term Report
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className=" justify-content-end flex-grow-1 pe-3" data-bs-spy="scroll" data-bs-target="#navigation" data-bs-offset="0" tabindex="0">
             
                <Nav.Link className="mg-lx-2" href="#heroSection" >About</Nav.Link>
                <Nav.Link className="mg-lx-2" href="#experience">Experience</Nav.Link>
                <Nav.Link className="mg-lx-2" href="#resume" >Resume</Nav.Link>
                <Nav.Link className="mg-lx-2" href="#contact">Contact</Nav.Link>
                

              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

    </>
  );
}





