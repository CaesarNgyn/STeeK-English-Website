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
      <div class="content__welcome">
        <h3 class="content__welcome-heading">Ưu đãi độc quyền</h3>

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
        <p class="course-description">
          Cùng SteeK bắt đầu chuyến hành trình chinh phục thế giới của bạn
        </p>
        <div className='courses row'>
          <Course />
          <Course />
          <Course />
        </div>
      </div>

      {/* --------------------------- FOR TOEIC --------------------- */}
      <div className='toeic-container'>
        <h1 className='title'>
          Khóa học Toeic
        </h1>
        <p class="course-description">
          Cùng SteeK bắt đầu chuyến hành trình chinh phục thế giới của bạn
        </p>
        <div className='courses row'>
          <Course />
          <Course />
        </div>
      </div>

      {/* --------------------------- FOR IELTS --------------------- */}
      <div className='ielts-container'>
        <h1 className='title'>
          Khóa học Ielts
        </h1>
        <p class="course-description">
          Cùng SteeK bắt đầu chuyến hành trình chinh phục thế giới của bạn
        </p>
        <div className='courses row'>
          <Course />
          <Course />
        </div>
      </div>

      {/* ================= SOCIAL ================== */}
      <div className="social">
        <div class="row">

          <div class="social-item col-lg-4 col-md-5">
            <p class="footer__content-heading">SECURE YOUR TRANSACTION</p>
            <div class="payment-methods">
              <div class="payment-item">
                <img src="https://thanhit2612.github.io/luxstay/assets/imgs/visa.svg" alt="" class="payment-img" />
              </div>
              <div class="payment-item">
                <img src="https://thanhit2612.github.io/luxstay/assets/imgs/mastercard.svg" alt="" class="payment-img" />
              </div>
              <div class="payment-item">
                <img src="https://thanhit2612.github.io/luxstay/assets/imgs/maestro.svg" alt="" class="payment-img" />
              </div>
            </div>
          </div>

          <div class="social-item col-lg-4 col-md-4">
            <p class="footer__content-heading">CERTIFICATION</p>
            <div class="business-partner">
              <div class="business-item">
                <img src="https://thanhit2612.github.io/luxstay/assets/imgs/bct.png" alt="" class="business-img" />
              </div>
              <div class="business-item">
                <img src="https://thanhit2612.github.io/luxstay/assets/imgs/dmca.png" alt="" class="business-img" />
              </div>
            </div>
          </div>

          <div class="social-item col-lg-4 col-md-3">
            <p class="footer__content-heading">FOLLOW US</p>
            <div class="social-network">
              <div class="social-item">
                <a href=""><i class="fab fa-instagram social-icon"></i></a>
              </div>
              <div class="social-item">
                <a href=""><i class="fab fa-youtube social-icon"></i></a>
              </div>
              <div class="social-item">
                <a href=""><i class="fab fa-facebook-f social-icon"></i></a>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* ====================== FOOTER =================== */}
      <div class="footer">
        <p class="copyright-content">©2023 Luxstay. Bản quyền thuộc về Công ty TNHH STeeK Việt Nam - MSDN: 0108308449. Mọi hành vi sao chép đều là phạm pháp nếu không có sự cho phép bằng văn bản của chúng tôi.</p>
        <p class="copyright-content">Tầng 21 tòa nhà Capital Tower số 109 phố Trần Hưng Đạo, phường Cửa Nam, quận Hoàn Kiếm, Hà Nội. Email: info@luxstay.com, Số điện thoại: 18006586.</p>
        <p class="copyright-content">Số Giấy chứng nhận đăng ký doanh nghiệp: 0108308449, ngày cấp: 03/06/2023, nơi cấp: Sở Kế hoạch và Đầu tư TP Hà Nội</p>

        <p class="author-copyright">copyright© by <a href="facebook.com/nguyenchithanh2k">Tea Nguyen</a></p>
      </div>







    </div>
  )
}

export default User;
