import React from 'react';
import {Navbar,
        Nav,
        Container,
        NavDropdown,
        Badge,
        Form,
        DropdownButton,
        Dropdown,
        Button,
        InputGroup,
      } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const HeaderComponent = () =>{
return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <LinkContainer to="/">
        <Navbar.Brand href="/">WEBSITE</Navbar.Brand>
      </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <InputGroup>
            <DropdownButton id="dropdown-basic-button" title="ALL">
              <Dropdown.Item href="#/action-1">BOOKS</Dropdown.Item>
              <Dropdown.Item href="#/action-2">CARS</Dropdown.Item>
              <Dropdown.Item href="#/action-3">ELECTRONICS</Dropdown.Item>
            </DropdownButton>
            <Form.Control type="text" placeholder="Search in shop..." />
            <Button variant="warning">Warning</Button>
          </InputGroup>
          </Nav>
          <Nav>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Cart
            <Badge bg="danger">
              2
            </Badge>
          </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
)
}

export default HeaderComponent;