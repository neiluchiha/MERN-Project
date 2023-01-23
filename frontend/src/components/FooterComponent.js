import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const FooterComponent = () =>{
    return (
    <footer>
      <Container fluid>
      <Row className="mt-5">
        <Col className="bg-dark text-center text-light py-5">Copyright 2023</Col>
      </Row>
    </Container>
    </footer>
    )
    
    }
    
export default FooterComponent;