import bodyImage from '../../assets/product-sample.jpg'
import './Login.scss'
import loginImage from '../../assets/login.avif'
import loginImage2 from '../../assets/login2.jpg'
import { FaSpinner } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useState } from 'react'
import { postLogin } from '../../services/apiServices'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { doLogin } from '../../redux/slices/userSlice'
import { useEffect } from 'react'
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const userAccount = useSelector(state => state.user.account)


  const dispatch = useDispatch()
  const navigate = useNavigate()



  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async () => {
    const isValidEmail = validateEmail(email)
    if (!isValidEmail) {
      toast.error('Bạn hãy kiểm tra lại Email!')
      return;
    }
    if (!password) {
      toast.error('Hãy nhập đủ mật khẩu!')
      return;
    }
    setIsLoading(true);
    let data = await postLogin(email, password);
    // console.log(data?.data.DT)
    if (data && data.data?.EC === 0) {
      console.log("Success")
      console.log(data.data.DT.UserInfo.roles)
      dispatch(doLogin(data.data?.DT))
      toast.success(data.data.message)
      setIsLoading(false);
      if (data.data.DT.UserInfo.roles === "User") {
        navigate('/home')
      } else {
        navigate('/admin')
      }


    } else {
      toast.error(data.message)
      setIsLoading(false);
    }
  }




  const handleRegister = () => {
    navigate('/register')
  }

  const handleLoginEnter = (event) => {
    if (event.keyCode === 13) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        handleLogin();
      }, 1000);
    }
  };


  return (
    <div className="login-container">

      <img src={loginImage2} alt={loginImage} />

      <div className='login-content'>
        <div className="header">
          <span> Trở thành hội viên ngay!</span>
          <button
            onClick={() => handleRegister()}
          >Đăng Ký
          </button>
        </div>
        <div className="title  col-4 mx-auto">
          STeeK English
        </div>
        <div className="welcome col-4 mx-auto">
          Welcome back. Ready to learn new things?
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
              onKeyDown={(event) => handleLoginEnter(event)}
            />
          </div>
          <div className="form-group pass-group">
            <label>Mật khẩu</label>
            <input
              placeholder='Nhập mật khẩu'
              className="form-control "
              type={showPassword ? "password" : "text"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              onKeyDown={(event) => handleLoginEnter(event)}
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
          <div className='login-final'>
            <p1>Bạn chưa có tài khoản?
              <span
                className='forgot-password'
                onClick={() => handleRegister()}
              > Đăng ký ngay!

              </span>
            </p1>
            <button
              type="submit"
              onClick={() => handleLogin()}
              className={isPressed ? "pressed btn-submit" : "btn-submit"}
              disabled={isLoading}
            >
              {isLoading === true && <FaSpinner className='icon-spin' />}

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
