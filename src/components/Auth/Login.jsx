
import './Login.scss'
import loginImage from '../../assets/login.avif'
import { FaSpinner } from 'react-icons/fa'

const Login = () => {
  return (
    <div className="login-container">

      <img src={loginImage} alt="Login" />

      <div className='login-content'>
        <div className="header">
          <span> Trở thành hội viên ngay!</span>
          <button >Đăng Ký</button>
        </div>
        <div className="title  col-4 mx-auto">
          STeeK English
        </div>
        <div className="welcome col-4 mx-auto">
          Chào mừng bạn quay trở lại!
        </div>
        <div className="content-form col-4  mx-auto">
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control "
              placeholder="caesarngyn@gmail.com"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              placeholder='Nhập mật khẩu'
              className="form-control "
              type={"password"}
            />
          </div>
          <div className='login-final'>
            <p1>Bạn chưa có tài khoản?
              <span className='forgot-password'>  Đăng ký ngay!</span>
            </p1>
            <button
              type="submit"
              className='btn-login'
            >
              <span>
                Đăng Nhập
              </span>
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Login;
