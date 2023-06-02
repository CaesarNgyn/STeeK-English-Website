
import './Register.scss'
import loginImage from '../../assets/login.avif'
import bodyImage from '../../assets/product-sample.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <div className='register-container'>
      <img src={loginImage} alt="Register" />
      <div className='register-content'>
        <div className="header">
          <span> Đã có tài khoản?</span>
          <button
            onClick={() => handleLogin()}
          >Đăng Nhập
          </button>
        </div>
        <div className="title  col-4 mx-auto">
          STeeK English
        </div>
        <div className="welcome col-4 mx-auto">
          Join us so that we can become the best.
        </div>
        <div className="content-form col-4  mx-auto">
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control "
              placeholder="caesarngyn@gmail.com"
            />
            <div className="form-group">
              <label>Username</label>
              <input
                placeholder='caesar'
                className="form-control "
                type={"text"}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              placeholder='Nhập mật khẩu'
              className="form-control "
              type={"password"}
            />
          </div>
          <div className='register-final'>
            <button
              type="submit"
              className='btn-register'
            >
              <span>
                Đăng Ký
              </span>
            </button>
          </div>
        </div>
      </div>


    </div >
  )
}

export default Register;
