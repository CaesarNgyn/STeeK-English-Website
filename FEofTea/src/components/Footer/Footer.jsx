
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
                <p className="copyright-content">©2023 STeeK. Bản quyền thuộc về Công ty TNHH STeeK Việt Nam - MSDN: 0124052002. Mọi hành vi sao chép đều là phạm pháp nếu không có sự cho phép bằng văn bản của chúng tôi.</p>
                <p className="copyright-content">141 Chiến Thắng, Tân Triều, Thanh Trì, Hà Nội. Email: ngulongkhanh@gmail.com, Số điện thoại: 0833822085.</p>
                <p className="copyright-content">Số Giấy chứng nhận đăng ký doanh nghiệp: 0124052002, ngày cấp: 03/06/2023, nơi cấp: Sở Kế hoạch và Đầu tư Thành Phó Hà Nội</p>

                <p className="author-copyright">Copyright© by Tea Nguyen</p>
            </div>


            {/* ========================= Contact ============================ */}
            <footer className="footer home-pt home-pb" id="contact">
                <div className="container">
                    <div className='row'>
                        Copyright © 2023 by STeeK. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </div >
    )
}

export default Footer;
