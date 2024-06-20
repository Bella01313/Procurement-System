import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LuUsers } from 'react-icons/lu';
import { MdManageHistory } from 'react-icons/md';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { TbUrgent } from 'react-icons/tb';
import { IoMdLogOut } from 'react-icons/io';
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
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
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
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
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
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
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
    }, []);

    return (
        <div className="font-jost">
            <div className="flex">
            <aside className="bg-green-600 w-1/5 h-[45rem] fixed">
                <div className="flex flex-col ">
                    <img src={Logo} alt="" className="w-[10rem]  bg-transparent ml-8 rounded-full mt-[1rem]" />

                    {/* Sidebar Navigation */}
                    <nav>
                        <img className="w-[10rem] ml-3" src="../src/assets/img/logo.png" alt="" />
                        <ul className="mt-[2rem] text-xl  ">
                            <Link to="/hodDashboard" >
                                <li className="mb-4  hover:bg-white rounded-lg p-3">
                                    <a href="#" className=" text-white hover:text-green-600 flex gap-2 ml-8"><b><HiOutlineDocumentReport className="mt-[0.3rem]" /></b>Dashboard </a>
                                </li>
                            </Link>

                            <Link to="/hodPendingTasks" >
                                <li className="mb-4  hover:bg-white rounded-lg p-3">

                                    <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8"> <b><LuUsers className="mt-[0.3rem]" /></b> Pending tasks</a>
                                </li>
                            </Link>

                            <Link to="/hodTenders" >
                                <li className="mb-4 hover:bg-white rounded-lg p-3">

                                    <a href="#" className="text-white  hover:text-green-600 flex gap-2 ml-8 "> <b><LuUsers className="mt-[0.3rem]" /></b> Tenders</a>
                                </li>
                            </Link>
                            <Link to="/hodApplicantList" >

                                <li className="mb-4  hover:bg-white rounded-lg p-3">

                                    <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8"> <b><LuUsers className="mt-[0.3rem]" /></b> Applicants List</a>
                                </li>
                            </Link>

                            <Link to="/hodRequisitionList" >

                                <li className="mb-4  hover:bg-white rounded-lg p-3">

                                    <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8"> <b><LuUsers className="mt-[0.3rem]" /></b> Requisition List</a>
                                </li>
                            </Link>
                            {/* Add more sidebar links as needed */}
                        </ul>
                    </nav>
                </div>
                <p className="py-[8rem] w-[10rem] ml-[3rem]">

                    <div className="rounded-lg bg-white  hover:bg-gray-300 text-center p-2">
                        <a href="/" className="text-black">Logout</a>
                    </div>
                </p>
            </aside >

                <main className="flex-1  ml-[17rem] w-[49rem]">
                    <h2 className="text-2xl text-green-600 font-bold mb-4 ml-[20rem] py-3">Head of department  Dashboard</h2>
                    <div className="flex gap-[4rem] ml-[20rem] mt-[2rem]">
                   
                        <span className="bg-green-500 border border-gray-300 gap-12 w-[17rem] rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <Link to="/hodRequisitionList">
                                <div className="flex">
                                    <small><b className="text-xl text-blue-700">All requisition</b></small>
                                </div>
                            </Link>
                            <p className="flex mt-[3rem] gap-6">
                                <TbUrgent className="text-2xl" /> Total requisition <b>{approvedTaskCount}</b>
                            </p>
                        </span>

                     

                        <span className="bg-blue-400 border border-gray-300 gap-12 w-[17rem] rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <Link to="/hodApplicantList">
                                <div className="flex">
                                    <small><b className="text-xl text-blue-700">Applicants</b></small>
                                </div>
                            </Link>
                            <p className="flex mt-[3rem] gap-2">
                                <TbUrgent className="text-2xl" /> Total Applicants <b>{applicantCount}</b>
                            </p>
                        </span>
                    </div>
                    <h1 className='py-[8rem] ml-[20rem] text-2xl text-green-600 font-bold -my-[6rem]'>Request something here!</h1>
                    <div className="border-4 rounded-lg border-green-600 flex   items-center w-[42rem]  ml-[20rem] h-[23rem]">
                   
            <div className=" flex flex-col">
            
                <table className="w-[40rem] -mt-2  my-2 py-2 ml-3 bg-white  border-4">

                    <thead>
                        <tr>
                            <th className="py-2   border-b border-r text-2xl ">Name</th>
                            <th className="py-2  border-b text-2xl">Request</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b border-r font-bold">Tittle</td>
                            <td className="py-2 px-4 border-b">
                                <input type="text" placeholder="type the tittle" className="py-2 px-4 border-b font-medium" />
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b border-r font-bold">Quantity</td>
                            <td className="py-2 px-4 border-b">
                                <input type="text" placeholder="type the Quantity" className="py-2 px-4 border-b font-medium" />
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b border-r font-bold">Description</td>
                            <td className="py-2 px-4 border-b">
                                <textarea type="text" placeholder="type the Description" className="py- px-4 border-b font-medium" />
                            </td>
                        </tr>
                 
                    </tbody>

                </table>
                <button type="submit" className="border-2  font-bold  p-2 bg-green-600 hover:opacity-75 w-[40rem] text-xl ml-2">Requisition</button>
            </div>

        </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
