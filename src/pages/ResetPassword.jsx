import Logo from '../assets/img/my project logo1.jpg';
import { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const isValid = () => {
    let valid = true;
    if (!password.trim()) {
      setPasswordErr('Password is required');
      valid = false;
    } else {
      setPasswordErr('');
    }
    if (!email.trim()) {
      setEmailErr('Email is required');
      valid = false;
    } else {
      setEmailErr('');
    }
    return valid;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (isValid()) {
      try {
        const response = await axios({
          method: 'POST',
          url: "https://procurement-backend-red.onrender.com/reset-password",
          headers: {
            "Content-Type": 'application/json'
          },
          data: {
            email: email,
            newPassword: password,
          }
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="font-jost">
      <div className='container flex flex-col -mt-[6rem] shadow  bg-gradient-to-b from-white via-blue-90  to-blue-100 h-[58rem]'>
        <div className='shadow-md  bg-gradient-to-b from-white via-blue-90  to-blue-100'>
        <form onSubmit={handleSignUp} className='w-full ml-5 max-w-md flex flex-col'>
        <img src={Logo} alt="logo" className='px-[4rem] ' />
        <h1 className='text-green-600 font-bold ml-[9rem] text-2xl mb-3'>Reset Password</h1>
        <h1 className='text-gray-600 '>Set a new password below</h1>
          <label htmlFor="email" className='font-bold'>Email :</label>
          <input
            className='border-2 rounded-lg p-2'
            type=""
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailErr && (<p className='text-red-500 font-sans'>{emailErr}</p>)}
          <label htmlFor="password" className='font-bold'>New Password :</label>
          <input
            className='border-2 rounded-lg p-2'
            type="password"
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordErr && (<p className='text-red-50 font-sans'>{passwordErr}</p>)}
          <button type="submit" className='text-center bg-green-500 text-white font-bold mt-4 mb-4 font-mono p-2 rounded-lg hover:opacity-75'>
            Reset Password
          </button>
        </form>
        
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
