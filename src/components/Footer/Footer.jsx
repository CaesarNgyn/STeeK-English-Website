
import './Footer.scss'


const Footer = () => {
    return (
        <div className='footer-container'>
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


            {/* ====================== LICENSE =================== */}
            <div className="license">
                <p className="copyright-content">©2023 Luxstay. Bản quyền thuộc về Công ty TNHH STeeK Việt Nam - MSDN: 0108308449. Mọi hành vi sao chép đều là phạm pháp nếu không có sự cho phép bằng văn bản của chúng tôi.</p>
                <p className="copyright-content">Tầng 21 tòa nhà Capital Tower số 109 phố Trần Hưng Đạo, phường Cửa Nam, quận Hoàn Kiếm, Hà Nội. Email: info@luxstay.com, Số điện thoại: 18006586.</p>
                <p className="copyright-content">Số Giấy chứng nhận đăng ký doanh nghiệp: 0108308449, ngày cấp: 03/06/2023, nơi cấp: Sở Kế hoạch và Đầu tư TP Hà Nội</p>

                <p className="author-copyright">copyright© by <a href="facebook.com/nguyenchithanh2k">Tea Nguyen</a></p>
            </div>


            {/* ========================= Contact ============================ */}
            <footer className="footer home-pt home-pb" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-5 col-md-6 col-sm-6">
                            <div className="footer__single">
                                <h4>About Me</h4>
                                <p>We have tested a number of registry fix and clean utilities
                                    and present our top 3 list on our site for your convenience.</p>
                                <p className="footer__single--text">
                                    Copyright ©2021 All rights reserved | This template is made with
                                    <i className="fa fa-heart-o" aria-hidden="true"></i> by
                                    <a href="#" target="_blank">Tea Nguyen</a>
                                </p>
                            </div>
                        </div>
                        <div className="col col-lg-5 col-md-6 col-sm-6">
                            <div className="footer__single footer__single--contact">
                                <h4>Newsletter</h4>
                                <p>Stay updated with our latest trends</p>
                                <div className="footer__contact">
                                    <form method="post">
                                        <div className="input__contact">
                                            <input type="email" className="form-control" name="Email" id="Email"
                                                placeholder="Enter Email Address" />
                                            <div className="input__contact--btn">
                                                <button type="submit" className="btn">
                                                    <span>Send</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-2 col-md-6 col-sm-6">
                            <div className="footer__single">
                                <h4>Follow Me</h4>
                                <p>Let us be social</p>
                                <div className="footer__single--social align-items">
                                    <a href="https://www.facebook.com/tra.victor/" className="social__link">
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
