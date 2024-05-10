
import Logo from '../assets/img/my project logo.jpg'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
  return (
    <div className="tab">
    <div className='login'>
  <img src={Logo} alt="logo" className='logo' />
      <h1 className='heading'>Forgot Password?</h1>
      <h1>Input your email address below to reset <br />your password</h1>
      <label htmlFor="email">Email:</label>
      <input className='input' type="text" placeholder='input your email address' required />
     <Link to="/resetPassword"><button type="submit"  className='text-center bg-green-400 text-white font-bold font-mono p-2 rounded-lg hover:opacity-75'>Continue</button></Link>

    </div>
  </div>
  )
}

export default ForgetPassword