import React from "react";
import { Link } from "react-router-dom";
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
    <Navbar bg="transparent" expand="lg" className="mx-auto">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img
              height="150"
              width="150"
              src="/logo.svg"
              className="d-inline-block align-top"
              alt="ShopMart logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className=" headerLink  mx-auto">
            <Link to="/">
              <Nav.Link className="mx-auto navLinkText">Home</Nav.Link>
            </Link>
            <Nav.Link href="" className="mx-auto navLinkText">
              Products
            </Nav.Link>
            <Nav.Link href="#link" className="mx-auto navLinkText">
              Categories
            </Nav.Link>
            <Link to="/register">
              <Nav.Link className="mx-auto navLinkText">Registration</Nav.Link>
            </Link>
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
