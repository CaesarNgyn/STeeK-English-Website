
import './Register.scss'
import loginImage from '../../assets/login.avif'
import loginImage2 from '../../assets/login2.jpg'

import bodyImage from '../../assets/product-sample.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { postRegister } from '../../services/apiServices'
import axios from 'axios'
import { toast } from 'react-toastify';

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

  const handleRegister = async () => {
    const isValidEmail = validateEmail(email)
    if (!isValidEmail) {
      toast.error('Bạn hãy kiểm tra lại Email!')
      return;
    }
    if (!username) {
      toast.error('Hãy nhập đủ username!')
      return;
    }
    if (!password) {
      toast.error('Hãy nhập đủ mật khẩu!')
      return;
    }
    let data = await postRegister(email, username, password)
    // console.log(data?.data);
    if (data && data.data?.EC === 0) {
      toast.success(data.data.message)
      navigate('/login')
    } else {
      toast.error(data.message)
    }
  }

  const handleRegisterEnter = (event) => {
    if (event.keyCode === 13) {
      setIsPressed(true);
      setTimeout(() => {
        setIsPressed(false)
      }, 1000)

      handleRegister();
    }
  }

  return (
    <div className='register-container'>
      <img src={loginImage2} alt={loginImage} />
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
              onKeyDown={(event) => handleRegisterEnter(event)}

            />
            <div className="form-group">
              <label>Tên tài khoản</label>
              <input
                placeholder='caesar'
                className="form-control "
                type={"text"}
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                onKeyDown={(event) => handleRegisterEnter(event)}

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
              onKeyDown={(event) => handleRegisterEnter(event)}

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
              className={isPressed ? "pressed btn-submit" : "btn-submit"}
              type="submit"

              onClick={() => handleRegister()}

            >

              Đăng Ký

            </button>
          </div>
        </div>
      </div>


    </div >
  )
}

export default Register;
