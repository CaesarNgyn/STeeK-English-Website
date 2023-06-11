import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate, NavLink, Link } from "react-router-dom";
import './Header.scss'
import { useDispatch, useSelector } from 'react-redux';
import { doLogout } from '../../redux/slices/userSlice';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import UserInfo from '../User/UserInfo';
import { useState } from 'react';
import { postFindUser } from '../../services/apiServices';

const Header = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const userAccount = useSelector(state => state.user.account)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showUserInfo, setShowUserInfo] = useState(false);

  const handleUserInfoClick = () => {
    setShowUserInfo(true);
  };

  const handleCloseUserInfo = () => {
    setShowUserInfo(false);
  };
  console.log("user account: ", userAccount.email)

  const handleLogout = () => {
    confirmAlert({
      title: 'Đăng xuất',
      message: 'Bạn có chắc chắn muốn đăng xuất không?',
      buttons: [
        {
          label: 'Có',
          onClick: () => {
            dispatch(doLogout());
            navigate('/login');
          }
        },
        {
          label: 'Không',
          onClick: () => { }
        }
      ]
    });
  };

  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const data = await postFindUser(userAccount.email);
        console.log(data);
        // Update the user information or perform any other actions
      } catch (error) {
        toast.error('Failed to fetch user information.');
      }
    };

    if (isAuthenticated) {
      fetchUserInformation();
    }
  }, [isAuthenticated, userAccount.email]);

  return (
    <>
      {userAccount && userAccount?.roles === "User" && <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand style={{ pointerEvents: 'none' }} > STeeK English</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/home" exact={true} className="nav-link" end>Khóa học</NavLink>
              <NavLink to="/home/roadmap" className="nav-link">Lộ trình</NavLink>
              <NavLink to="/home/study" className="nav-link">Học</NavLink>
            </Nav>
            <Nav>
              {/* <NavLink to="/login" className="nav-link">(Tên tài khoản)</NavLink> */}
              <NavDropdown title={`${userAccount.email}`} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleUserInfoClick}>
                  Thông tin

                </NavDropdown.Item>

                <UserInfo
                  show={showUserInfo}
                  setShow={setShowUserInfo}
                  handleClose={handleCloseUserInfo}
                  dataUpdate={userAccount}
                />
                <NavDropdown.Item onClick={() => handleLogout()}>
                  Đăng xuất
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >}

      {
        userAccount && userAccount?.roles === "Admin" && <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand style={{ pointerEvents: 'none' }} > STeeK English</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/admin" exact={true} className="nav-link" end>Dashboard</NavLink>
                <NavLink to="/admin/student" className="nav-link">Học Viên</NavLink>
                <NavLink to="/admin/course" className="nav-link">Khóa học</NavLink>
              </Nav>
              <Nav>

                <NavDropdown title={`${userAccount.email}`} id="basic-nav-dropdown">

                  <NavDropdown.Item onClick={() => handleLogout()}>
                    Đăng xuất
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar >
      }
    </>



  );
}

export default Header;

