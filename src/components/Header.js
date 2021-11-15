import React from "react";

import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="transparent" expand="lg" className="mx-auto mt-0">
      <Container>
        <Navbar.Brand href="/">
          <img
            height="150"
            width="150"
            src="/logo.svg"
            className="d-inline-block align-top"
            alt="ShopMart logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className=" headerLink  mx-auto">
            <Nav.Link href="" className="mx-auto navLinkText">
              Home
            </Nav.Link>
            <Nav.Link href="" className="mx-auto navLinkText">
              Products
            </Nav.Link>
            <Nav.Link href="#link" className="mx-auto navLinkText">
              Categories
            </Nav.Link>
            <Nav.Link href="/register" className="mx-auto navLinkText">
              Registration
            </Nav.Link>
            <Form className="d-flex  mx-auto">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
