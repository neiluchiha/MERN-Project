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
import { Link } from 'react-router-dom';

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
            <Button variant="warning">
              <i className='bi bi-search text-dark'></i>
            </Button>
          </InputGroup>
          </Nav>
          <Nav>
          
          <LinkContainer to="/admin/orders">
            <Nav.Link>Admin
            <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
            </Nav.Link>
          </LinkContainer>
            
          </Nav>
          <Nav>
            <NavDropdown title="John Doe" id="collasible-nav-dropdown">
              <NavDropdown.Item eventKey="/user/my-orders" as={Link} to="/user/my-orders">My Orders</NavDropdown.Item>
              <NavDropdown.Item eventKey="/user" as={Link} to="/user">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >Logout</NavDropdown.Item>
            </NavDropdown>
            
            <LinkContainer to="/login">
             <Nav.Link>Login</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/register">
             <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/cart">
            <Nav.Link href="#pricing">
            <i className="bi bi-cart-dash"></i>
            <span className="ms-1">Cart</span>
            <Badge bg="danger">
              7
            </Badge>
            </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
)
}

export default HeaderComponent;