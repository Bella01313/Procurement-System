import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import About from './pages/About' 
import Contact from './pages/Contact'
import ForgetPassword from './pages/ForgetPassword'

import './App.css'

function App() {
 

  return (
    <>
<Router>
  
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/SignUp" element={<SignUp/>} />
    <Route path="/resetPassword" element={<ResetPassword/>} />
    <Route path="/ForgetPassword" element={<ForgetPassword />} />
  </Routes>
</Router>
    </>
  )
}

export default App
