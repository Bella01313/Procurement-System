import {Link} from 'react-router-dom'
import Logo from '../assets/img/my project logo.jpg'
import SideBar from './SideBar';



const Login = () => {
  return (
    <>
    <SideBar/>
    <div className="tab1">
      <div className='login'>
    <img src={Logo} alt="logo" className='logo' />
        <h1 className='heading'>LOGIN HERE!</h1>
        <label htmlFor="email">Email:</label>
        <input className='input' type="text" placeholder='Enter your email address' required />
        <label htmlFor="password">Password:</label>
        <input className='input' type="password" placeholder='Enter your password' required />
       <Link to="/forgetPassword"><h3 className='font-bold text-right text-red-600 '>Forget Password</h3></Link> 
       <a href="/" className='text-center bg-green-400 text-white font-bold font-mono p-2 rounded-lg hover:opacity-75'> <button type="submit">Login</button></a>
        <h3>No account? <Link to="/signUp"><span className="text-red-600">Sign Up</span></Link></h3>
      </div>
    </div>
    </>
  );
};

export default Login;