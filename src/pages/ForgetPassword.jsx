import Logo from '../assets/img/my project logo1.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');

  const isValid = () => {
    let valid = true
    if (!email.trim()) {
      setEmailErr('Email is required')
      valid = false
    } else {
      setEmailErr('')
    }
    valid = true
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    if (isValid() === true) {
      try {
        await axios({
          method: 'POST',
          url: "https://procurement-backend-red.onrender.com/forgot-password",
          headers: {
            "Content-Type": 'application/json'
          },
          data: {
            email: email,
          }
        }).then((response) => {
          console.log(response.data);
        }).catch((error) => {
          console.error(error);
        })
      } catch (error) {
        console.error(error);
      }
    }
  }


  return (
    <div className="font-jost">
      <div className='container flex flex-col -mt-[6rem] shadow  bg-gradient-to-b from-white via-blue-90  to-blue-100 h-[58rem]'>
        <div className='shadow-md   bg-gradient-to-b from-white via-blue-90  to-blue-100'>
          <form action="" className='w-full ml-[2rem] mr-2 flex flex-col'>
          <img src={Logo} alt="logo" className='w-[20rem]' />
          <h1 className='ml-[7rem] mb-2'>Forgot Password?</h1>
          <h1 className='mb-2'>Input email we send you the link for reset password</h1>
          <label htmlFor="email">Email:</label>
          <input className='border-2 rounded-lg w-[19rem] p-2' type="text" placeholder='input your email address' value={email} onChange={(e) => setEmail(e.target.value)} />


          {emailErr ? (<p className='text-red-500 font-sans '>{emailErr}</p>) : null}
          <Link to="/resetPassword"><button type="submit" className='text-center bg-green-500 mt-4 mb-3 text-white font-bold font-mono p-2 rounded-lg hover:opacity-75'
            onClick={(e) => {
              handleSignUp(e);
              
            }}>send email</button></Link>
            
            </form>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword