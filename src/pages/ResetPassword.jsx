import Logo from '../assets/img/my project logo.jpg';
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
    <div className="tab">
      <div className='login'>
        <img src={Logo} alt="logo" className='logo' />
        <h1 className='heading'>Reset Password</h1>
        <h1 className='text-gray-400 px-[3.5rem]'>Set a new password below</h1>
        <form onSubmit={handleSignUp}>
          <label htmlFor="email">Email :</label>
          <input
            className='input'
            type="text"
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailErr && (<p className='text-red-500 font-sans'>{emailErr}</p>)}
          <label htmlFor="password">New Password</label>
          <input
            className='input'
            type="password"
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordErr && (<p className='text-red-50 font-sans'>{passwordErr}</p>)}
          <button type="submit" className='text-center bg-green-400 text-white font-bold font-mono p-2 rounded-lg hover:opacity-75'>
            Reset Password
          </button>
        </form>
        <a href="/login" className='text-center'>Back to Login</a>
      </div>
    </div>
  );
};

export default ResetPassword;
