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
import { useEffect } from 'react';
import { getAllCourses } from '../../services/apiServices';
import { useState } from 'react';
import { toast } from 'react-toastify';

const User = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const userAccount = useSelector(state => state.user.account)
  const [courses, setCourses] = useState([]);
  const [isBought, setIsBought] = useState(false)


  const fetchAllCourses = async () => {
    try {
      const data = await getAllCourses();
      console.log(data.data);
      setCourses(data.data);
      console.log(courses)

      // Update the user information or perform any other actions
    } catch (error) {
      // toast.error('Failed to fetch all courses.');
      console.log("Failed to fetch all courses.")
    }
  };

  useEffect(() => {

    if (isAuthenticated) {
      fetchAllCourses();
    }
  }, [isAuthenticated]);

  // console.log("is auth: ", isAuthenticated, "useraccount: ", userAccount)
  return (

    <div className='user-container'>
      {/*======================== SLIDE-IMG ===========================*/}
      <div className="slide">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.static-collegedunia.com/public/college_data/images/logos/logo-toeic-transparent1.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/R.9fb812ca89c29cdf0de47c685b7e99c5?rik=tGQzorQup9KMUQ&riu=http%3a%2f%2fsteadwaysfinance.co.uk%2fwp-content%2fuploads%2f2015%2f10%2fAbout-Us.jpg&ehk=dfhYXSVQCGi8LyRCiODNu%2bjjwR5pDteo2n89Lr9ndZU%3d&risl=&pid=ImgRaw&r=0"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media-exp3.licdn.com/dms/image/C511BAQGPOBmb4BfPSw/company-background_10000/0/1524817887147?e=2159024400&v=beta&t=qOnJDVmOZ6I2hSEc9NutSMzneu8CzABWza0VtHX8gks"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.obex.co.nz/wp-content/uploads/2016/06/Education.jpg"
              alt="Second slide"
            />
          </Carousel.Item>

        </Carousel>
      </div>

      {/* ====================== Production =================== */}
      <div className="content__welcome">
        <h3 className="content__welcome-heading">Ưu đãi độc quyền</h3>

        <div className="promotion-items " >
          <div className='item '>
            <img src="https://thanhit2612.github.io/luxstay/assets/imgs/promotion1.jpg" alt="" />
          </div>
          <div className='item '>
            <img src="https://thanhit2612.github.io/luxstay/assets/imgs/promotion2.jpg" alt="" />
          </div>
          <div className='item'>
            <img src="https://thanhit2612.github.io/luxstay/assets/imgs/promotion3.jpg" alt="" />
          </div>
        </div>
      </div>


      {/* =========================== Render Course =================== */}
      {/* --------------------------- FOR BENGINNER --------------------- */}
      <div className='beginner-container'>
        <h1 className='title'>
          Khóa học dành cho người mới bắt đầu
        </h1>
        <p className="course-description">
          Cùng SteeK bắt đầu chuyến hành trình chinh phục thế giới của bạn
        </p>
        {courses && courses.length > 0 ? (
          <div className='courses row'>
            <Course course={courses[0]} isBought={isBought} />
            <Course course={courses[1]} isBought={isBought} />
          </div>
        ) : (
          <p>Loading courses...</p>
        )}


      </div>

      {/* --------------------------- FOR TOEIC --------------------- */}
      <div className='toeic-container'>
        <h1 className='title'>
          Khóa học Toeic
        </h1>


        <p className="course-description">
          Cùng SteeK bắt đầu chuyến hành trình chinh phục thế giới của bạn
        </p>
        {courses && courses.length > 0 ? (
          <div className='courses row'>
            <Course course={courses[2]} isBought={isBought} />
            <Course course={courses[3]} isBought={isBought} />
            <Course course={courses[4]} isBought={isBought} />
          </div>

        ) : (
          <p>Loading courses...</p>
        )}

      </div>

      {/* --------------------------- FOR IELTS --------------------- */}
      <div className='ielts-container'>
        <h1 className='title'>
          Khóa học Ielts
        </h1>
        <p className="course-description">
          Cùng SteeK bắt đầu chuyến hành trình chinh phục thế giới của bạn
        </p>

        {courses && courses.length > 0 ? (
          <div className='courses row'>
            <Course course={courses[5]} isBought={isBought} />
          </div>
        ) : (
          <p>Loading courses...</p>
        )}
      </div>

      {/* ================= SOCIAL ================== */}
      <div className="social">
        <div className="row">

          <div className="social-item col-lg-4 col-md-5">
            <p className="footer__content-heading">SECURE YOUR TRANSACTION</p>
            <div className="payment-methods">
              <div className="payment-item">
                <img src="https://thanhit2612.github.io/luxstay/assets/imgs/visa.svg" alt="" className="payment-img" />
              </div>
              <div className="payment-item">
                <img src="https://thanhit2612.github.io/luxstay/assets/imgs/mastercard.svg" alt="" className="payment-img" />
              </div>
              <div className="payment-item">
                <img src="https://thanhit2612.github.io/luxstay/assets/imgs/maestro.svg" alt="" className="payment-img" />
              </div>
            </div>
          </div>

          <div className="social-item col-lg-4 col-md-4">
            <p className="footer__content-heading">CERTIFICATION</p>
            <div className="business-partner">
              <div className="business-item">
                <img src="https://thanhit2612.github.io/luxstay/assets/imgs/bct.png" alt="" className="business-img" />
              </div>
              <div className="business-item">
                <img src="https://thanhit2612.github.io/luxstay/assets/imgs/dmca.png" alt="" className="business-img" />
              </div>
            </div>
          </div>

          <div className="social-item col-lg-4 col-md-3">
            <p className="footer__content-heading">FOLLOW US</p>
            <div className="social-network">
              <div className="social-item">
                <a href="https://www.instagram.com/khanhrussian" target="_blank">
                  <i className="fab fa-instagram social-icon"></i>
                </a>
              </div>
              <div className="social-item">
                <a href="https://www.facebook.com/khanhrussian" target="_blank">
                  <i className="fab fa-youtube social-icon"></i>
                </a>
              </div>
              <div className="social-item">
                <a href="https://www.facebook.com/khanhrussian" target="_blank">
                  <i className="fab fa-facebook-f social-icon"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* ====================== FOOTER =================== */}
      <div className="footer">
        <p className="copyright-content">©2023 Luxstay. Bản quyền thuộc về Công ty TNHH STeeK Việt Nam - MSDN: 0108308449. Mọi hành vi sao chép đều là phạm pháp nếu không có sự cho phép bằng văn bản của chúng tôi.</p>
        <p className="copyright-content">Tầng 21 tòa nhà Capital Tower số 109 phố Trần Hưng Đạo, phường Cửa Nam, quận Hoàn Kiếm, Hà Nội. Email: info@luxstay.com, Số điện thoại: 18006586.</p>
        <p className="copyright-content">Số Giấy chứng nhận đăng ký doanh nghiệp: 0108308449, ngày cấp: 03/06/2023, nơi cấp: Sở Kế hoạch và Đầu tư TP Hà Nội</p>

        <p className="author-copyright">copyright© by <a href="facebook.com/nguyenchithanh2k">Tea Nguyen</a></p>
      </div>







    </div>
  )
}

export default User;
