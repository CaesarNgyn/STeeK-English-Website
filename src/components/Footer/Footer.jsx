
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer-container'>
      <footer class="bg-light py-3">
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
      </footer>
    </div>
  )
}

export default Footer;
