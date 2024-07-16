import './register.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/img/loginLogo.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../slices/userSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)

  useEffect(() => {
    if (user.email) {
      navigate('/login')
    }
  }, [navigate, user.email])

  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    phone: '',
    agreement: '',
  })
  const [error, setError] = useState('')
  const dispatch = useDispatch()

  const showPasswordHandler = () => {
    setShowPassword(!showPassword)
  }

  const showPasswordHandler2 = () => {
    setShowPassword2(!showPassword2)
  }

  const handleChange = (e) => {
    if (e.target.id === 'agreement') {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.checked }))
    } else {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
      if (e.target.id === 'password2') {
        if (e.target.value !== credentials.password) {
          setError('your password does not match')
        } else {
          setError(null)
        }
      }
    }
  }
  const handleClick = (e) => {
    e.preventDefault()
    if (credentials.password === credentials.password2) {
      setError(null)
      dispatch(registerUser(credentials))
    } else {
      setError('your password does not match')
    }
  }

  return (
    <div className='registerContainer'>
      <ToastContainer />
      <div className='registerL'>
        <img src={logo} alt='logo' className='registerLogo' />
        <div className='registerSignInB'>
          <p className='registerSignInP'>Already have an account?</p>
          <Link to='/login'>
            <button className='registerSignInSocialS'>SIGN IN</button>
          </Link>
        </div>
      </div>

      <div className='registerR'>
        <div className='registerRHInfo'>
          <h1 className='registerRHInfoWelcome'>Getting Started</h1>
          <span className='registerRHInfoSp'></span>
        </div>
        <form action='' className='registerRForm'>
          <div className='user'>
            <div className='userL'>
              <label htmlFor='lname' className='registerRFormL'>
                Firstname
              </label>
              <div className='userDivider'>
                <input
                  type='text'
                  className='passwordBtn'
                  id='firstName'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='userR'>
              <label htmlFor='lname' className='registerRFormL'>
                Lastname
              </label>
              <div className='userDivider'>
                <input
                  type='text'
                  className='passwordBtn'
                  id='lastName'
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <label htmlFor='lname' className='registerRFormL mail'>
            Phone
          </label>
          <div className='inputPass'>
            <input
              type='text'
              className='passwordBtn'
              id='phone'
              onChange={handleChange}
            />
          </div>
          <label htmlFor='lname' className='registerRFormL mail'>
            Email
          </label>
          <div className='inputPass'>
            <input
              type='email'
              className='passwordBtn'
              id='email'
              onChange={handleChange}
            />
          </div>

          <div className='user'>
            <div className='userL'>
              <label htmlFor='lname' className='registerRFormL'>
                Password
              </label>
              <div className='userDivider'>
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
            </div>
            <div className='userR'>
              <label htmlFor='lname' className='registerRFormL cf'>
                Confirm Password
              </label>
              <div className='userDivider cf2'>
                <input
                  type={showPassword2 ? 'text' : 'password'}
                  className='passwordBtn'
                  id='password2'
                  onChange={handleChange}
                />
                <span onClick={showPasswordHandler2}>
                  {showPassword2 ? (
                    <FontAwesomeIcon icon={faEye} className='eyes' />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} className='eyes' />
                  )}
                </span>
              </div>

              {error && <p className='cperror'> {error}</p>}
            </div>
          </div>
          <div className='registerTerms'>
            <input
              type='checkbox'
              className='registerTermsCheck'
              id='agreement'
              onChange={handleChange}
            />
            <p className='registerTermsP'>
              I agree to Cleanhub’s
              <span className='registerTermsSp'> Terms of Condition</span> and
              <span className='registerTermsSp'> Privacy Policy</span>
            </p>
          </div>
          <div className='registerSignInSocial'>
            <button className='registerSignInBtn' onClick={handleClick}>
              {user.registerStatus ? 'SUBMITTING' : 'SIGN UP'}
            </button>
            <span className='registerSignInSocialOr'>OR</span>
            <button className='registerSignInSocialG'>
              <span className='g'>G</span>
              <span className='o1'>O</span>
              <span className='o2'>O</span>
              <span className='g'>G</span>
              <span className='o2'>L</span>
              <span className='o1'>E</span>
            </button>
            <button className='registerSignInSocialF'>FACEBOOK</button>
          </div>
          {user.registerStatus === 'rejected' ? (
            <p className='formP'>{user.registerError}</p>
          ) : null}
        </form>
      </div>
    </div>
  )
}

export default Register
