import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import ForgetPassword from './pages/ForgetPassword';
import Dashboard from './dashboardPages/Dashboard';
import AddUser from './dashboardPages/AddUser';
import UpdateUser from './dashboardPages/UpadateUser'; // Corrected typo in filename
import Users from './dashboardPages/Users';
import Layout from './pages/Layout';
import Approved from './tasks/Approved';
import Testimonials from './pages/Testimonials';
import Appending from './tasks/Appending';
import './App.css';
import UserDash from './pages/UserDash'; // Corrected filename casing
import AccountDash from './pages/AccountDash';
import AdminDash from './pages/AdminDash';
import TendersPage from './tenders/TendersPage';
import ApplicationForm from './pages/ApplicationForm';
import ApplicantList from './pages/ApplicantList.jsx';
import Requisition from './hodDashboard/Requisition';
import HodDashboard from './hodDashboard/HodDashboard';
import HodPendingTasks from './hodDashboard/HodPendingTasks.jsx';
import HodTenders from './hodDashboard/HodTenders.jsx';
import HodApplication from './hodDashboard/HodApplication.jsx';
import TenderDash from './dashboardPages/TenderDash.jsx';
import AddTender from './tenders/AddTender.jsx';
import HodRequisitionList from './hodDashboard/hodRequisitionList.jsx';
import UpdateRequisition from './hodDashboard/UpdateRequisition.jsx';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonial" element={<Testimonials />} />
            <Route path="/tenders" element={<TendersPage />} />
          </Route>

          <Route path="/users" element={<Users />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/updateuser" element={<UpdateUser />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/userdash" element={<UserDash />} />
          <Route path="/accountdash" element={<AccountDash />} />
          <Route path="/admindash" element={<AdminDash />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/approvedTasks" element={<Approved />} />
          <Route path="/pendingTasks" element={<Appending />} />
          <Route path="/applicationFrom" element={<ApplicationForm />} />
          <Route path="/requisition" element={<Requisition/>} />
          <Route path="/applicantlist" element={<ApplicantList />} />
          <Route path="/hodDashboard" element={<HodDashboard />} />
          <Route path="/hodPendingTasks" element={<HodPendingTasks />} />
          <Route path="/hodTenders" element={<HodTenders />} />
          <Route path="/hodApplicantList" element={<HodApplication/>}/>
          <Route path="/addTenders" element={<AddTender/>}/>
          <Route path="/tenderDash" element={<TenderDash/>}/>
          <Route path="/hodRequisitionList" element={<HodRequisitionList/>}/>
          <Route path="/updateRequisition" element={<UpdateRequisition/>}/>
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
