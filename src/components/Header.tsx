import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";
import logo from "../assets/logo.png";

const Header: React.FC = () => {
  const logoUrl =
    "https://www.srikiran.org/wp-content/uploads/2024/06/Srikiran-Logo-Horizontal-1400x465.png";
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logoUrl} alt="Logo" height="40" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          <Nav className="me-auto">
            <NavDropdown title="About" id="about-dropdown">
              <NavDropdown.Item as={Link} to="/">
                History
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
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
              {(() => {
                const username = localStorage.getItem("username");
                return username ? ` ${username}!` : '';
              })()}
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
              <NavDropdown.Item as={Link} to="/login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
                <NavDropdown.Item
                onClick={() => {
                  try {
                  // remove stored auth/user info
                  localStorage.removeItem("username");
                  localStorage.removeItem("token");
                  // If you store other keys, remove them or use localStorage.clear()
                  } catch (err) {
                  console.warn("Error clearing localStorage", err);
                  }
                  // Redirect to login page
                  if (typeof window !== "undefined") {
                  window.location.href = "/login";
                  }
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
