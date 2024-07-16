import './login.css'
import logo from '../../assets/img/loginLogo.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../slices/userSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = ({ id }) => {
  const user = useSelector((state) => state.user)
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    if (user.email) {
      navigate('/')
    }
  }, [user.email, navigate])

  const showPasswordHandler = () => {
    setShowPassword(!showPassword)
  }

  const handleChange = (e) => {
    if (e.target.id === 'rememberMe') {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.checked }))
    } else {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(loginUser(credentials))
  }

  // const handleClick = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const res = await axiosInstance.post('/login', credentials)
  //     dispatch(loginUser(credentials))

  //     if (rememberMe) {
  //       localStorage.setItem('token', res.data.token)
  //     }
  //   } catch (err) {}
  // }

  return (
    <div className='loginContainer'>
      <ToastContainer />

      <div className='loginL'>
        <img src={logo} alt='logo' className='loginLogo' />
      </div>
      <div className='loginR'>
        <div className='loginRHInfo'>
          <h1 className='loginRHInfoWelcome'>Welcome Back</h1>
          <span className='loginRHInfoSp'></span>
        </div>
        <form action='' className='loginRForm'>
          <label htmlFor='fname' className='loginRFormL'>
            Email
          </label>
          <input
            type='text'
            className='loginRFormInput'
            id='email'
            onChange={handleChange}
          />
          <label htmlFor='lname' className='loginRFormL'>
            Password
          </label>
          <div className='inputPassLogin'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='passwordBtn'
              id='password'
              onChange={handleChange}
            />
            <span onClick={showPasswordHandler}>
              {showPassword ? (
                <FontAwesomeIcon icon={faEye} className='eyes' />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} className='eyes' />
              )}
            </span>
          </div>
          <div className='forgetP'>
            <p className='forgetPw'>
              Forget Password? <span className='reset'>Reset Password</span>
            </p>
            <div className='rememberMe'>
              <p className='rememeberMeText'>Remember Me</p>
              <div className='rememberMeCB'>
                <label className='inputWrapper'>
                  <input
                    type='checkbox'
                    onChange={handleChange}
                    className='input'
                    id='rememberMe'
                  />
                  <span className='inputSpan' />
                </label>
              </div>
            </div>
          </div>
          <div className='signInSocial'>
            <button className='signInSocialS' onClick={handleClick}>
              {user.loginStatus ? 'SUBMITTING' : 'SIGN IN'}
            </button>
            <span className='signInSocialOr'>OR</span>
            <button className='signInSocialG'>
              <span className='g'>G</span>
              <span className='o1'>O</span>
              <span className='o2'>O</span>
              <span className='g'>G</span>
              <span className='o2'>L</span>
              <span className='o1'>E</span>
            </button>
            <button className='signInSocialF'>FACEBOOK</button>
          </div>
          <div className='signInB'>
            <p className='signInP'>Already have an account?</p>
            <Link to='/register'>
              <button className='signInBtn'>SIGN UP</button>
            </Link>
          </div>
          {user.loginStatus === 'rejected' ? (
            <p className='formP'>{user.loginError}</p>
          ) : null}
        </form>
      </div>
    </div>
  )
}

export default Login
