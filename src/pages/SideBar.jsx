
import { Link } from 'react-router-dom'
import Logo from '../assets/img/my project logo.jpg'

const SideBar = () => {
  return (
    <div className='flex gap-[10rem] bg-white'>
        <div>
        <img src={Logo} alt="Logo" className='flex justify-start items-start w-[10rem] ml-[15rem] ' />
        </div>
        <ul className='flex gap-[4rem] justify-center py-9  '>

            <li>
                <Link to="/" className='text-black-500 hover:text-green- cursor-pointer'>Home</Link>
            </li>
            <li>
                <Link to="/about"  className='text-black-500 hover:text-green- cursor-pointer'>About us</Link>
            </li>
            <li>
                <Link to="/contact"  className='text-black-500 hover:text-green- cursor-pointer'>Contact</Link>
            </li>
            <li>
                <Link to="/login"  className=' text-black-500 hover:text-green- cursor-pointer'>Login</Link>
            </li>
            <li>
                <Link to="/signUp"  className='text-black-500 hover:text-green- cursor-pointer'>Sign up</Link>
            </li>
            <li>
                <Link to="/resetPassword"  className='text-black-500 hover:text-green- cursor-pointer'>Newpassword</Link>
            </li>
            <li>
                <Link to="/ForgetPassword"  className='text-black-500 hover:text-green- cursor-pointer'>forget Password</Link>
            </li>
        </ul>
    </div>
  )
}

export default SideBar