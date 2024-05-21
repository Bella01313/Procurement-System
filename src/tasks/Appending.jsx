import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { LuUsers } from 'react-icons/lu';
import { MdManageHistory } from 'react-icons/md';
import Logo from '../assets/img/my project logo.jpg';

const PendingTasks = () => {
  const [pendingTasks, setPendingTasks] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('pendingTasks')) || [];
    setPendingTasks(tasks);
  }, []);

  return (
    <div className='flex'>
      <aside className="bg-green-600 w-1/5 h-[44rem] absolute">
        <div className="flex flex-col">
          <img src={Logo} alt="" className="w-[10rem] bg-transparent ml-8 rounded-full mt-[1rem]" />

          <nav>
            <ul className="mt-[2rem] text-xl">
              <Link to="/dashboard">
                <li className="mb-4 hover:bg-white rounded-lg p-2">
                  <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8"><b><HiOutlineDocumentReport className="mt-[0.3rem]" /></b>Dashboard</a>
                </li>
              </Link>
              <Link to="/UserDash">
                <li className="mb-4 hover:bg-white rounded-lg p-2">
                  <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8"><b><LuUsers className="mt-[0.3rem]" /></b>Users</a>
                </li>
              </Link>
              <Link to="/approvedTasks">
                <li className="mb-4 hover:bg-white rounded-lg p-2">
                  <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8"><b><LuUsers className="mt-[0.3rem]" /></b>Approved tasks</a>
                </li>
              </Link>
              <Link to="/pendingTasks">
                <li className="mb-4 hover:bg-white rounded-lg p-2">
                  <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8"><b><LuUsers className="mt-[0.3rem]" /></b>Pending tasks</a>
                </li>
              </Link>
              <Link to="/AccountDash">
                <li className="mb-4 hover:bg-white rounded-lg p-2">
                  <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8"><b><LuUsers className="mt-[0.3rem]" /></b>Profile</a>
                </li>
              </Link>
              <Link to="/tenderDash">
                <li className="mb-4 hover:bg-white rounded-lg p-2">
                  <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8"><b><MdManageHistory className="mt-[0.3rem]" /></b>Tenders</a>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
        <p className="py-[8rem] w-[10rem] ml-[3rem]">
          <div className="rounded-lg bg-white text-center p-2">
            <a href="./login" className="text-black">Logout</a>
          </div>
        </p>
      </aside>
      <main className="flex-1 border-4 ml-[20rem] w-[49rem]">
        <div className="border-4 rounded-lg border-green-600 flex items-center w-[42rem] my-[10rem] ml-[20rem] h-[23rem]">
          <div className="flex flex-col">
            <h2 className="text-2xl mb-4">Pending Tasks</h2>
            <table className="w-[40rem] my-2 py-2 ml-3 bg-white border-4">
              <thead>
                <tr>
                  <th className="py-2 border-b border-r text-2xl">Title</th>
                  <th className="py-2 border-b text-2xl">Description</th>
                  <th className="py-2 border-b text-2xl">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {pendingTasks.length > 0 ? (
                  pendingTasks.map((task, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b border-r">{task.title}</td>
                      <td className="py-2 px-4 border-b">{task.description}</td>
                      <td className="py-2 px-4 border-b">{task.Quantity}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="py-2 px-4 border-b text-center">No pending tasks</td>
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
