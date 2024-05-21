import Logo from '../assets/img/my project logo.jpg'
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
    <div className="tab">
      <div className='login'>
        <img src={Logo} alt="logo" className='logo' />
        <h1 className='heading'>Forgot Password?</h1>
        <h1>Input your email address below to reset <br />your password</h1>
        <label htmlFor="email">Email:</label>
        <input className='input' type="text" placeholder='input your email address' value={email} onChange={(e) => setEmail(e.target.value)} />
        {emailErr ? (<p className='text-red-500 font-sans '>{emailErr}</p>) : null}
        <Link to="/resetPassword"><button type="submit" className='text-center bg-green-400 text-white font-bold font-mono p-2 rounded-lg hover:opacity-75'
          onClick={(e) => { 
            handleSignUp(e);
            // console.log('gfhjbkl;');
            }}>Continue</button></Link>

      </div>
    </div>
  )
}

export default ForgetPassword