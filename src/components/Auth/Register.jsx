
import './Register.scss'
import loginImage from '../../assets/login.avif'
import bodyImage from '../../assets/product-sample.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { VscEye, VscEyeClosed } from "react-icons/vsc";
const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const navigate = useNavigate()

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


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
              type={"email"}
              value={email}
              onChange={(event) => setEmail(event.target.value)}

            />
            <div className="form-group">
              <label>Username</label>
              <input
                placeholder='caesar'
                className="form-control "
                type={"text"}
                value={username}
                onChange={(event) => setUsername(event.target.value)}

              />
            </div>
          </div>
          <div className="form-group pass-group">
            <label>Mật khẩu</label>
            <input
              placeholder='Nhập mật khẩu'
              className="form-control "
              type={showPassword ? "password" : "text"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {showPassword ?
              <span
                className='icons-eye'
                onClick={() => setShowPassword(false)}>
                <VscEye />
              </span> :
              <span
                className='icons-eye'
                onClick={() => setShowPassword(true)}>
                <VscEyeClosed />
              </span>}
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
