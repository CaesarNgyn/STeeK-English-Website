import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import videoHomePage from '../../assets/videoHomePage.mp4'
import './HomePage.scss'
import { useNavigate } from 'react-router-dom';

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
      <div className='homepage-content'>
        <h1 className='brand-name'>STeeK English</h1>
        <h2 className='slogan'>You don't have to be better than anyone.
          You just have to be the best version of yourself</h2>
        <p1 className="description">Học Ielts, Toeic, Tiếng Anh trực tuyến
          với đội ngũ giảng viên từ Đại học Oxford, Cambridge...</p1>
        <button
          className='btn btn-info btn-join'
          onClick={handleButtonClick}
        >Tham gia ngay
        </button>
        <p2>Join us now!</p2>
      </div>

    </div>
  );
};

export default HomePage;