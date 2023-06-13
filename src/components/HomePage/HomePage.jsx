import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import videoHomePage from '../../assets/videoHomePage.mp4'
import './HomePage.scss'
import { useNavigate } from 'react-router-dom';
import loginImage from '../../assets/login.avif'

const HomePage = () => {

  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/login')
  }

  return (
    <div className="homepage-container">
      <video autoPlay muted loop >
        <source src={videoHomePage} type="video/mp4" />
      </video>
      {/* <img src={loginImage} alt="Login" /> */}

      <div className='homepage-content'>
        <h1 className='brand-name'>STeeK English</h1>
        <h2 className='slogan'>You don't have to be better than anyone.
          You just have to be the best version of yourself</h2>
        <h3 className="description">Học Ielts, Toeic, Tiếng Anh trực tuyến
          với đội ngũ giảng viên chuyên nghiệp từ Đại học Oxford, Cambridge...
        </h3>
        <button
          className='btn btn-info btn-join'
          onClick={handleButtonClick}
        >Tham gia ngay
        </button>
        <h4>Join us now!</h4>
      </div>

    </div>
  );
};

export default HomePage;