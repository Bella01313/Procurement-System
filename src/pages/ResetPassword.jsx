
import Logo from '../assets/img/my project logo.jpg'
const ResetPassword = () => {
  return (
    <div className="tab">
      <div className='login'>
    <img src={Logo} alt="logo" className='logo' />
        <h1 className='heading'>Reset Password</h1>
        <h1 className='text-gray-400 px-[3.5rem] '>Set a new password below</h1>
        <label htmlFor="email">Email :</label>
        <input className='input' type="text" placeholder='Enter your email address' required />
        <label htmlFor="password"> New Password</label>
        <input className='input' type="password" placeholder='Enter your password' required />
       <a href="/login" className='text-center bg-green-400 text-white font-bold font-mono p-2 rounded-lg hover:opacity-75'> <button type="submit">Reset Password</button></a>

      </div>
    </div>
  )
}

export default ResetPassword