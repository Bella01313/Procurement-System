
import {Link} from 'react-router-dom'
import Logo from '../assets/img/my project logo.jpg'

const SignUp = () => {
  return (
    <div className="tab1">
      
    <div className='loginn'>
  <img src={Logo} alt="logo" className='logo' />
      <h1 className='heading'>  Create account here!</h1>
  <label htmlFor="HeadlineAct" className="block text-sm font-bold text-black-900"> Role </label>
  <select
    name="HeadlineAct"
    id="HeadlineAct"
    placeholder="Select a role"
    className="mt-1.5 w-full rounded-lg  border-2 p-2 text-gray-700 sm:text-sm"
  >
    <option value="" className="text-gray-700"> please Select a role</option>
    <option value="A">Admin</option>
    <option value="Em">HOD</option>
    <option value="E">Manager</option>
    <option value="s">Maketing officer</option>
    <option value="s">supplier</option>
  </select>

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
  )
}

export default SignUp