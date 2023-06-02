import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate, NavLink } from "react-router-dom";
import './Header.scss'

const Header = () => {
  return (
    // Code mẫu thanh NavBar
    // Có thể tham khảo mục HomePage trong src/components/HomePage/HomePage.jsx
    // để xem cách chia Div Layout
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">STeeK English</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="#courses" className="nav-link">Courses</NavLink>
            <NavLink to="#roadmap" className="nav-link">Roap Map</NavLink>
            <NavLink to="#learn" className="nav-link">Study</NavLink>
          </Nav>
          <Nav>
             {/* <NavLink to="/login" className="nav-link">(Tên tài khoản)</NavLink>  */}
            <NavDropdown title="Account Name" id="basic-nav-dropdown">
              <NavDropdown.Item>
                Thông tin</NavDropdown.Item>
              <NavDropdown.Item>Đăng xuất</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
     </Navbar>
    





  );
}

export default Header;

