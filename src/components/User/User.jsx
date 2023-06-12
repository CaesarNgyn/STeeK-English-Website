
import './User.scss'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import Course from './Course/Course';
import userimg from '../../assets/user-img.png'
import traimg from '../../assets/traimg.png'
import Carousel from 'react-bootstrap/Carousel';
const User = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const userAccount = useSelector(state => state.user.account)
  // console.log("is auth: ", isAuthenticated, "useraccount: ", userAccount)
  return (
    <div className='user-container'>
      {/* <h1 className='welcome'> Mua khóa học Hot nhất ngay!</h1> */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={userimg}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={traimg}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className='beginner-container'>
        <h1 className='title'>
          Khóa học dành cho người mới bắt đầu
        </h1>
        <div className='courses row'>
          <Course />
          <Course />
          <Course />
        </div>
      </div>
      <div className='toeic-container'>
        <h1 className='title'>
          Khóa học Toeic
        </h1>
        <div className='courses row'>
          <Course />
          <Course />
        </div>
      </div>
      <div className='ielts-container'>
        <h1 className='title'>
          Khóa học Ielts
        </h1>
        <div className='courses row'>
          <Course />
          <Course />
        </div>
      </div>




    </div>
  )
}
export default User;

