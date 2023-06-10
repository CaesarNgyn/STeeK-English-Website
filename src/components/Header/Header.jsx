import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate, NavLink } from "react-router-dom";
import './Header.scss'
import { useDispatch, useSelector } from 'react-redux';
import { doLogout } from '../../redux/slices/userSlice';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Header = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const userAccount = useSelector(state => state.user.account)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    confirmAlert({
      title: 'Confirmation',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            dispatch(doLogout());
            navigate('/login');
          }
        },
        {
          label: 'No',
          onClick: () => { }
        }
      ]
    });
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">STeeK English</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="#courses" className="nav-link">Khóa học</NavLink>
            <NavLink to="#roadmap" className="nav-link">Lộ trình</NavLink>
            <NavLink to="#learn" className="nav-link">Học</NavLink>
          </Nav>
          <Nav>
            {/* <NavLink to="/login" className="nav-link">(Tên tài khoản)</NavLink>  */}
            <NavDropdown title={`${userAccount.email}`} id="basic-nav-dropdown">
              <NavDropdown.Item>
                Thông tin</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLogout()}>
                Đăng xuất
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>






  );
}

export default Header;

