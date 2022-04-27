import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <Navbar className="nav-container" collapseOnSelect expand="lg" bg="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Being-Human
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="volunteerRegister">
                                Register as a Volunteer
                            </Nav.Link>
                            <Nav.Link as={Link} to="addActivities">
                                Add Activities
                            </Nav.Link>
                            <Nav.Link className="me-3" as={Link} to="about">
                                About
                            </Nav.Link>
                        </Nav>
                        <Nav className="exclude">
                            {user ? (
                                <button
                                    onClick={() => signOut(auth)}
                                    className="logout-btn btn btn-outline-danger rounded-pill"
                                >
                                    Logout
                                </button>
                            ) : (
                                <Nav.Link as={Link} to="login">
                                    <button className="login-btn">Login</button>
                                </Nav.Link>
                            )}
                            <Nav.Link eventKey={2} as={Link} to="admin">
                                <button className="admin-btn">Admin</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
