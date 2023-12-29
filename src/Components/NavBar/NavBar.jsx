import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import './NavbarStyles.css';


function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom" font-weight="bold">
      <Navbar.Brand href="/">ArtWork</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
         {/* Add components to NavBar here, then add path in App.jsx */}
          <Nav.Link as={NavLink} to="/" exact>Log-in</Nav.Link>
          <Nav.Link as={NavLink} to="/messaging">Messages</Nav.Link>
          <Nav.Link as={NavLink} to="/user">User Page</Nav.Link>
          <Nav.Link as={NavLink} to="/post">Post</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;

