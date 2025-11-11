import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";
import logo from "../images/logo.png";
import "../assets/css/header.css";

const Header: React.FC = () => {
  const userId = sessionStorage.getItem("userId");
  const username = sessionStorage.getItem("username");
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false); // collapse menu after clicking any item
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleNavItemClick}>
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
                onClick={handleNavItemClick}
              >
                History
              </NavDropdown.Item>
              <NavDropdown.Item
                as="a"
                href="https://saradavidyalayam.org/#vission-mission-id"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavItemClick}
              >
                Mission
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Events" id="events-dropdown">
              <NavDropdown.Item as={Link} to="/" onClick={handleNavItemClick}>
                Upcoming
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/" onClick={handleNavItemClick}>
                Past
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Members" id="members-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/students"
                onClick={handleNavItemClick}
              >
                Alumni List
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="ms-auto align-items-center gap-2">
            <span style={{ color: "#000 !important", marginTop: "10px" }}>
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
                <NavDropdown.Item
                  as={Link}
                  to="/login"
                  onClick={handleNavItemClick}
                >
                  Login
                </NavDropdown.Item>
              )}
              {userId && (
                <NavDropdown.Item
                  as={Link}
                  to="/profile"
                  onClick={handleNavItemClick}
                >
                  Profile
                </NavDropdown.Item>
              )}
              {userId && (
                <NavDropdown.Item
                  onClick={() => {
                    sessionStorage.clear();
                    window.location.href = "/login";
                  }}
                >
                  Logout
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
