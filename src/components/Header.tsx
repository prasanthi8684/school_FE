import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";
import logo from "../images/logo.png";
import "../assets/css/header.css";

const Header: React.FC = () => {
  const userId = sessionStorage.getItem("userId");
  const username = sessionStorage.getItem("username");
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="light" expand="lg" sticky="top" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" height="40" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />

        <Navbar.Collapse
          id="navbar-nav"
          className={`custom-collapse ${expanded ? "show" : ""}`}
        >
          <Nav className="me-auto">
            <NavDropdown title="About" id="about-dropdown">
              <NavDropdown.Item
                as="a"
                href="https://saradavidyalayam.org/school-history/"
                target="_blank"
                rel="noopener noreferrer"
              >
                History
              </NavDropdown.Item>
              <NavDropdown.Item
                as="a"
                href="https://saradavidyalayam.org/#vission-mission-id"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mission
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Events" id="events-dropdown">
              <NavDropdown.Item as={Link} to="/">
                Upcoming
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                Past
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Members" id="members-dropdown">
              <NavDropdown.Item as={Link} to="/students">
                Alumni List
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="ms-auto align-items-center gap-2">
            <span className="text-secondary">
              {username ? ` Hi, ${username}` : ""}
            </span>
            <NavDropdown
              align="end"
              title={
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  roundedCircle
                  height="30"
                  alt="Profile"
                />
              }
              id="profile-dropdown"
              menuVariant="light"
            >
              {!userId && (
                <NavDropdown.Item as={Link} to="/login">
                  Login
                </NavDropdown.Item>
              )}
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  sessionStorage.clear();
                  window.location.href = "/login";
                }}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
