import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">Being-Human</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="events">Events</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="login">Login</Nav.Link>
                            <Nav.Link eventKey={2} as={Link} to="admin">
                                Admin
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
