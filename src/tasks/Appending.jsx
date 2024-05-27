import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { LuUsers } from 'react-icons/lu';
import { MdManageHistory } from 'react-icons/md';
import Logo from '../assets/img/my project logo.jpg';
import { ToastContainer, toast } from 'react-toastify';
import { IoMdLogOut } from "react-icons/io";
import { GrCompliance } from "react-icons/gr";
import { FcProcess } from "react-icons/fc";
import 'react-toastify/dist/ReactToastify.css';

const PendingTasks = () => {
  const [pendingTasks, setPendingTasks] = useState([]);
  const [approvedTasks, setApprovedTasks] = useState([]);

  useEffect(() => {
    const pending = JSON.parse(localStorage.getItem('pendingTasks')) || [];
    setPendingTasks(pending);

    const approved = JSON.parse(localStorage.getItem('approvedTasks')) || [];
    setApprovedTasks(approved);
  }, []);

  const handleApprove = (index) => {
    const tasks = [...pendingTasks];
    const [approvedTask] = tasks.splice(index, 1);
    localStorage.setItem('pendingTasks', JSON.stringify(tasks));
    setPendingTasks(tasks);

    const newApprovedTasks = [...approvedTasks, approvedTask];
    localStorage.setItem('approvedTasks', JSON.stringify(newApprovedTasks));
    setApprovedTasks(newApprovedTasks);

    toast.success("Task approved successfully");
  };

  const handleDelete = (index) => {
    const tasks = [...pendingTasks];
    tasks.splice(index, 1);
    localStorage.setItem('pendingTasks', JSON.stringify(tasks));
    setPendingTasks(tasks);
    toast.error("Task deleted successfully");
  };

  return (
    <div className='flex'>
      <ToastContainer />
      <aside className="bg-green-600 w-1/5 h-[44rem] fixed">
        <div className="flex flex-col">
          <img src={Logo} alt="Logo" className="w-[10rem] bg-transparent ml-8 rounded-full mt-[1rem]" />

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
              <Link to="/pendingTasks">
                <li className="mb-4 hover:bg-white rounded-lg p-2">
                  <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8">
                    <b><FcProcess className="mt-[0.3rem]" /></b> Pending tasks
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
        <div className="py-[8rem] w-[10rem] ml-[3rem]">
          <div className="rounded-lg bg-white text-center">
            <Link to="/login">
              <p className="mb-4 hover:bg-green-600 hover:text-white border-2 rounded-lg p-2">
                <a href="#" className="flex gap-2 ml-8">
                  <b><IoMdLogOut className="mt-[0.3rem]" /></b>Logout
                </a>
              </p>
            </Link>
          </div>
        </div>
      </aside>
      <main className="flex-1 flex items-center justify-center ml-[20rem] h-[44rem]">
        <div className="border-4 border-green-600 rounded-lg flex items-center justify-center w-3/4 h-3/4">
          <div className="border-4 border-gray-300 bg-white w-11/12 h-11/12 flex flex-col items-center justify-center">
            <h2 className="text-2xl mb-4">Pending Tasks</h2>
            <table className="w-[90%] my-2 py-2 bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 border-b border-r text-2xl">Title</th>
                  <th className="py-2 border-b text-2xl">Description</th>
                  <th className="py-2 border-b text-2xl">Quantity</th>
                  <th className="py-2 border-b text-2xl">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingTasks.length > 0 ? (
                  pendingTasks.map((task, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b border-r">{task.title}</td>
                      <td className="py-2 px-4 border-b">{task.description}</td>
                      <td className="py-2 px-4 border-b">{task.Quantity}</td>
                      <td className="py-2 px-4 border-b">
                        <button
                          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                          onClick={() => handleApprove(index)}
                        >
                          Approve
                        </button>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-2 px-4 border-b text-center">No pending tasks</td>
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

export default PendingTasks;
