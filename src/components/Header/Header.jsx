import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    //Code mẫu thanh NavBar
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">STeeK English</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Các Khóa Học</Nav.Link>
            <Nav.Link href="#about">Lộ Trình</Nav.Link>
            <Nav.Link href="#services">Học</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#contact" >Đăng Nhập</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

