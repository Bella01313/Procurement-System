
import {Link} from 'react-router-dom'
import Logo from '../assets/img/my project logo.jpg'
import SideBar from './SideBar'

const SignUp = () => {
  return (
    <>
    <SideBar/>
    <div className="tab1">
    <div className='loginn'>
  <img src={Logo} alt="logo" className='logo' />
      <h1 className='heading'>  Create account here!</h1>


      <label htmlFor="fullName">Full Name:</label>
      <input className='input' type="text" placeholder='Enter your full name' required />
      <label htmlFor="email">Email:</label>
      <input className='input' type="text" placeholder='Enter your email address' required />
      <label htmlFor="password">Password:</label>
      <input className='input' type="password" placeholder='Enter your password' required />
      <label htmlFor="password"> confrim Password:</label>
      <input className='input' type="password" placeholder='Enter your password again' required />
     <a href="/login" className=' bg-green-400 text-center text-white font-bold font-mono p-2 rounded-lg hover:opacity-75'> <button type="submit">Sign up</button></a>
      <h3>Already have account! <Link to="/login"><span className="text-red-600">Login</span></Link></h3>
    </div>
  </div>
  </>
  )
}

export default SignUp