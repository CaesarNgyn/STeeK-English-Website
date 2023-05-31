import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    //Code mẫu thanh NavBar
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">STeeK English</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/courses" className="nav-link">Các Khóa Học</NavLink>
            <NavLink to="/roadmap" className="nav-link">Lộ Trình</NavLink>
            <NavLink to="/learn" className="nav-link">Học</NavLink>
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

