import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LuUsers } from 'react-icons/lu';
import { MdManageHistory } from 'react-icons/md';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { TbUrgent } from 'react-icons/tb';
import { IoMdLogOut } from 'react-icons/io';
import { GrCompliance } from 'react-icons/gr';
import { FcProcess } from 'react-icons/fc';
import Logo from '../assets/img/my project logo.jpg';

const Dashboard = () => {
    const [userCount, setUserCount] = useState(0);
    const [approvedTaskCount, setApprovedTaskCount] = useState(0);
    const [applicantCount, setApplicantCount] = useState(0);

    const token = localStorage.getItem('token');

    useEffect(() => {
        async function fetchUserCount() {
            try {
                const response = await axios.get('https://procurement-backend-red.onrender.com/user', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserCount(response.data.length);
            } catch (error) {
                console.log(error);
            }
        }

        async function fetchApprovedTasksCount() {
            try {
                const response = await axios.get('https://procurement-backend-red.onrender.com/allRequest', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setApprovedTaskCount(response.data.length);
            } catch (error) {
                console.log(error);
            }
        }

        async function fetchApplicantCount() {
            try {
                const response = await axios.get('https://procurement-backend-red.onrender.com/candidate', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setApplicantCount(response.data.length);
            } catch (error) {
                console.log(error);
            }
        }

        fetchUserCount();
        fetchApprovedTasksCount();
        fetchApplicantCount();
    }, [token]);

    return (
        <div className="font-jost">
            <div className="flex ">
                <aside className="bg-green-600 w-1/5 h-[43rem] fixed">
                    <div className="flex flex-col ">
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
                        
                                <Link to="/requisitionListDash">
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

                <main className="flex-1 ml-[20rem] w-[49rem]">
                    <h2 className="text-2xl text-green-600 font-bold mb-4 ml-[10rem] py-3">Admin Dashboard</h2>
                    <div className="flex gap-6 ml-[10rem] mt-[2rem]">
                        <span className="bg-green-400 border border-gray-300 w-[17rem] rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <div className="">
                                <small><b className="text-xl text-blue-700">Users</b></small>
                            </div>
                            <p className="flex mt-[3rem] gap-2">
                                <TbUrgent className="text-2xl" /> Total Users <b>{userCount}</b>
                            </p>
                        </span>

                        <span className="bg-yellow-500 border border-gray-300 gap-12 w-[17rem] rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <div className="flex">
                                <small><b className="text-xl text-blue-700">All requisition</b></small>
                            </div>
                            <p className="flex mt-[3rem] gap-6">
                                <TbUrgent className="text-2xl" /> Total requisition <b>{approvedTaskCount}</b>
                            </p>
                        </span>

                        <span className="bg-blue-400 border border-gray-300 gap-12 w-[17rem] rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <div className="flex">
                                <small><b className="text-xl text-blue-700">Applicants</b></small>
                            </div>
                            <p className="flex mt-[3rem] gap-2">
                                <TbUrgent className="text-2xl" /> Total Applicants <b>{applicantCount}</b>
                            </p>
                        </span>
                    </div>
                </main>
            </div>
            <PendingTasks />
        </div>
    );
};

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
        <div>
            <main className="flex-1 flex items-center ml-[18rem] justify-center  h-[44rem]">

                <div className=" rounded-lg flex items-center justify-center w-3/4 h-3/4">

                    <div className="border-4 border-green-600 rounded-lg  bg-white w-11/12 h-11/12 -mt-[28rem] flex flex-col items-center justify-center">
                        <h2 className="text-2xl text-green-600 font-bold mb-3">Pending Tasks</h2>
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
};

export default Dashboard;
