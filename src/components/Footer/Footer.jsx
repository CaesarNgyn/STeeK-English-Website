
import './Footer.scss'


const Footer = () => {
  return (
    <div className='footer-container'>
      {/* <footer class="bg-light py-3">
        <div class="container">
          <div class="d-flex justify-content-center">
            <div class="contact-section">
              <h5>Contact Us</h5>
              <p><i class="fas fa-phone me-2"></i>Phone: 555-1234</p>
              <p><i class="fas fa-envelope me-2"></i>Email: info@steekenglish.com</p>
              <p><i class="fas fa-map-marker-alt me-2"></i>Address: 141 Chien Thang , Hanoi</p>
            </div>
            <div class="field-section ms-5">
              <h5>Công ty CP đào tạo ngoại ngữ chuyên sâu STeek</h5>
              <p><i class="fas fa-field me-2"></i>Lĩnh vực: giáo dục </p>
              <p><i class="fas fa-date me-2"></i>Ngày thành lập: 1/5/2023</p>
              <p><i class="fas fa-id me-2"></i>Mã số thuế: 666999</p>
            </div>
          </div>
        </div>
      </footer> */}
       <footer class="footer home-pt home-pb" id="contact">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-5 col-md-6 col-sm-6">
                        <div class="footer__single">
                            <h4>About Me</h4>
                            <p>We have tested a number of registry fix and clean utilities
                                and present our top 3 list on our site for your convenience.</p>
                            <p class="footer__single--text">
                                Copyright ©2021 All rights reserved | This template is made with
                                <i class="fa fa-heart-o" aria-hidden="true"></i> by
                                <a href="#" target="_blank">Tea Nguyen</a>
                            </p>
                        </div>
                    </div>
                    <div class="col col-lg-5 col-md-6 col-sm-6">
                        <div class="footer__single footer__single--contact">
                            <h4>Newsletter</h4>
                            <p>Stay updated with our latest trends</p>
                            <div class="footer__contact">
                                <form method="post">
                                    <div class="input__contact">
                                        <input type="email" class="form-control" name="Email" id="Email"
                                            placeholder="Enter Email Address" required/>
                                            {/* <input type="email" class="form-control" /> */}
                                        <div class="input__contact--btn">
                                            <button type="submit" class="btn">
                                                <span>Send</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col col-lg-2 col-md-6 col-sm-6">
                        <div class="footer__single">
                            <h4>Follow Me</h4>
                            <p>Let us be social</p>
                            <div class="footer__single--social align-items">
                                <a href="https://www.facebook.com/tra.victor/" class="social__link">
                                    {/* <i class="fa fa-facebook" aria-hidden="true"></i> */}
                                    FaceBook
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer;
