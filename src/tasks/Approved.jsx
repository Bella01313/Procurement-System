import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { LuUsers } from 'react-icons/lu';
import { IoMdLogOut } from "react-icons/io";
import { GrCompliance } from "react-icons/gr";
import { FcProcess } from "react-icons/fc";
import { MdManageHistory } from 'react-icons/md';
import Logo from '../assets/img/my project logo.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApprovedTasks = () => {
  const [approvedTasks, setApprovedTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const approved = JSON.parse(localStorage.getItem('approvedTasks')) || [];
    setApprovedTasks(approved);
  }, []);

  const handleAddTender = (index) => {
    const task = approvedTasks[index];
    task.status = 'checked';

    // Save updated tasks back to localStorage
    const updatedTasks = [...approvedTasks];
    updatedTasks[index] = task;
    localStorage.setItem('approvedTasks', JSON.stringify(updatedTasks));
    setApprovedTasks(updatedTasks);

    toast.success('Tender added successfully!');
    navigate('/addTenders', { state: { task } });
  };

  return (
    <div className='flex'>
      <ToastContainer />
      <aside className="bg-green-600 w-1/5 h-[44rem] fixed">
        <div className="flex flex-col">
          <img src={Logo} alt="" className="w-[10rem] bg-transparent ml-8 rounded-full mt-[1rem]" />
          
          {/* Sidebar Navigation */}
          <nav>
            <ul className="mt-[2rem] text-xl">
              <Link to="/dashboard">
                <li className="mb-4 hover:bg-white rounded-lg p-2">
                  <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8">
                    <b><HiOutlineDocumentReport className="mt-[0.3rem]" /></b>Dashboard
                  </a>
                </li>
              </Link>
              <Link to="/UserDash">
                <li className="mb-4 hover:bg-white rounded-lg p-2">
                  <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8">
                    <b><LuUsers className="mt-[0.3rem]" /></b> Users
                  </a>
                </li>
              </Link>
              <Link to="/approvedTasks">
                <li className="mb-4 hover:bg-white rounded-lg p-2">
                  <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8">
                    <b><GrCompliance className="mt-[0.3rem]" /></b> Approved tasks
                  </a>
                </li>
              </Link>
            
            
              <Link to="/hodRequisitionList">
                <li className="mb-4 hover:bg-white rounded-lg p-2">
                  <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8">
                    <b><MdManageHistory className="mt-[0.3rem]" /></b>Requisition List
                  </a>
                </li>
              </Link>
              <Link to="/tenderDash">
                <li className="mb-4 hover:bg-white rounded-lg p-2">
                  <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8">
                    <b><MdManageHistory className="mt-[0.3rem]" /></b>Tenders
                  </a>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
        <p className="py-[8rem] w-[10rem] ml-[3rem]">
          <div className="rounded-lg bg-white text-center">
            <Link to="/">
              <p className="mb-4 hover:bg-green-600 hover:text-white border-2 rounded-lg p-2">
                <a href="#" className="flex gap-2 ml-8">
                  <b><IoMdLogOut className="mt-[0.3rem]" /></b>Logout
                </a>
              </p>
            </Link>
          </div>
        </p>
      </aside>
      <main className="flex-1 flex items-center justify-center ml-[20rem]">
        <div className="border-4 rounded-lg border-green-600 flex items-center justify-center w-[49rem] mt-">
          <div className="w-full p-4 bg-gray-100 rounded-lg flex flex-col items-center">
            <h2 className="text-2xl font-bold text-green-600 mb-3 mt-4">Approved Tasks</h2>
            <table className="w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 border-b border-r text-lg">Title</th>
                  <th className="py-2 border-b text-lg">Description</th>
                  <th className="py-2 border-b text-lg">Quantity</th>
                  <th className="py-2 border-b text-lg">Actions</th>
                </tr>
              </thead>
              <tbody>
                {approvedTasks.length > 0 ? (
                  approvedTasks.map((task, index) => (
                    <tr key={index} >
                      <td className="py-2 px-4 border-b border-r">{task.title}</td>
                      <td className="py-2 px-4 border-b">{task.description}</td>
                      <td className="py-2 px-4 border-b">{task.Quantity}</td>
                      <td className="py-2 px-4 border-b">
                        <button
                          className="bg-green-600 hover:opacity-75 text-white px-4 py-2 rounded"
                          onClick={() => handleAddTender(index)}
                        >
                          Add Tender
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-2 px-4 border-b text-center">No approved tasks</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ApprovedTasks;
