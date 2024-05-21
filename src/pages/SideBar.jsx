
import { Link } from 'react-router-dom'
import Logo from '../assets/img/my project logo.jpg'

const SideBar = () => {
  return (
    <div className=' gap-[7rem] bg-white  w-full flex fixed  top-0 '>
        <div>
        <img src={Logo} alt="Logo" className='flex justify-start items-start w-[10rem] ml-[15rem] ' />
        </div>
        <ul className='flex gap-[4rem] justify-center py-9  '>

            <li>
                <Link to="/" className='text-black-500 hover:text-green-600 cursor-pointer'>Home</Link>
            </li>
            <li>
                <Link to="/about"  className='text-black-500 hover:text-green-600 cursor-pointer'>About us</Link>
            </li>
            <li>
                <Link to="/service"  className='text-black-500 hover:text-green-600 cursor-pointer'>Service</Link>
            
            </li>
            <li className='text-black-500 hover:text-green-600 cursor-pointer'>
                <Link to="/testimonial"  className=' text-black-500 hover:opacity-75 rounded-lg border-3  cursor-pointer '>Testimonials</Link>
            </li>
            <li>
                <Link to="/dashboard"  className='text-black-500 hover:text-green-600 cursor-pointer'>Dashboard</Link>
            
            </li>
            <li>
                <Link to="/contact"  className='text-black-500 hover:text-green-600 cursor-pointer'>Contact</Link>
            </li>
            <li>
                <Link to="/tenders"  className='text-black-500 hover:text-green-600 cursor-pointer'>tenders</Link>
            </li>
         
            <li className='border w-[6rem] p-2 bg-green-500 rounded-lg text-center'>
                <Link to="/login"  className=' text-black-500 hover:opacity-75 rounded-lg border-3  cursor-pointer '>Login</Link>
            </li>
          
         
        </ul>
    </div>
  )
}

export default SideBar