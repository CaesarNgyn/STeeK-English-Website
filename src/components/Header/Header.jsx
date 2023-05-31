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
            <NavLink href="/courses">Các Khóa Học</NavLink>
            <NavLink href="/roadmap">Lộ Trình</NavLink>
            <NavLink href="/learn">Học</NavLink>

          </Nav>
          <Nav>
            <Nav.Link href="/login" >Đăng Nhập</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

