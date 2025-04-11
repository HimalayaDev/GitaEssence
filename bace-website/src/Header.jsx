import { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown, } from 'react-bootstrap';
import { HeartFill, MortarboardFill } from 'react-bootstrap-icons';

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href=""><img src="/iskcon_logo.jpg" alt="Logo" width="80" height="40" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <NavDropdown title="Activities" id="basic-nav-dropdown">
              <NavDropdown.Item >Blogs</NavDropdown.Item>
              <NavDropdown.Item >Bhakti Shastri </NavDropdown.Item>
              <NavDropdown.Item>Leadership Program</NavDropdown.Item>
              <NavDropdown.Item >Spiritual Pilgrimage</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="..." id="basic-nav-dropdown">
              <NavDropdown.Item >Bhakti Connect</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <div className="d-flex align-items-center">
            {expanded ? (
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-4"
                  aria-label="Search"
                  autoFocus
                  onBlur={() => setExpanded(false)}
                />
                <Button variant="outline-success" className="me-3">Search</Button>
              </Form>
            ) : (
              <Button
                variant="outline-success"
                className="me-3"
                onClick={() => setExpanded(true)}
              >
                🔍
              </Button>
            )}
            <Button variant="primary" className="me-3"><MortarboardFill />All Courses</Button>
            <Button variant="outline-primary" className="me-3"><HeartFill size={20} color="blue" />Donate</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

