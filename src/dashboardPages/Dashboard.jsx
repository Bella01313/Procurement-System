import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Chart from 'chart.js/auto';
import { LuUsers } from 'react-icons/lu';
import { MdManageHistory } from 'react-icons/md';
import { HiOutlineDocumentReport } from 'react-icons/hi';

import { TbUrgent } from 'react-icons/tb';
import { IoMdLogOut } from 'react-icons/io';
import { GrCompliance } from 'react-icons/gr';
import { FcProcess } from 'react-icons/fc';
import Logo from '../assets/img/my project logo.jpg';

const Dashboard = () => {
    const chart1Ref = useRef(null);
    const chart2Ref = useRef(null);
    const chart3Ref = useRef(null);
    const chart1InstanceRef = useRef(null);
    const chart2InstanceRef = useRef(null);
    const chart3InstanceRef = useRef(null);

    const [userCount, setUserCount] = useState(0);
    const [approvedTaskCount, setApprovedTaskCount] = useState(0);
    const [applicantCount, setApplicantCount] = useState(0);

    useEffect(() => {
        const createOrUpdateChart = (chartRef, chartType, chartData, chartOptions) => {
            if (chartRef && chartRef.current) {
                if (chartRef.current.chart) {
                    chartRef.current.chart.destroy();
                }

                const ctx = chartRef.current.getContext('2d');

                return new Chart(ctx, {
                    type: chartType,
                    data: chartData,
                    options: chartOptions
                });
            }
        };

        chart1InstanceRef.current = createOrUpdateChart(
            chart1Ref,
            'bar',
            {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'User',
                    data: [65, 59, 80, 81, 56, 55, userCount],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        );

        chart2InstanceRef.current = createOrUpdateChart(
            chart2Ref,
            'line',
            {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Applicants',
                    data: [85, 34, 80, 81, 56, 55, applicantCount],
                    fill: false,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        );

        chart3InstanceRef.current = createOrUpdateChart(
            chart3Ref,
            'doughnut',
            {
                labels: ['user', 'contact', 'User', 'Contact'],
                datasets: [{
                    label: 'User',
                    data: [300, 50, 100],
                    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 237, 1)', 'rgba(255, 206, 86, 1)'],
                    borderWidth: 1
                }]
            },
            {}
        );

        return () => {
            if (chart1InstanceRef.current) {
                chart1InstanceRef.current.destroy();
            }
            if (chart2InstanceRef.current) {
                chart2InstanceRef.current.destroy();
            }
            if (chart3InstanceRef.current) {
                chart3InstanceRef.current.destroy();
            }
        };
    }, [userCount, applicantCount]);

    useEffect(() => {
        async function fetchUserCount() {
            try {
                const response = await axios.get('https://procurement-backend-red.onrender.com/user');
                setUserCount(response.data.length);
            } catch (error) {
                console.log(error);
            }
        }

        async function fetchApprovedTasksCount() {
            try {
                const response = await axios.get('https://procurement-backend-red.onrender.com/allRequest');
                setApprovedTaskCount(response.data.length);
            } catch (error) {
                console.log(error);
            }
        }

        async function fetchApplicantCount() {
            try {
                const response = await axios.get('https://procurement-backend-red.onrender.com/candidate');
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
            <div className="flex ">
            <aside className="bg-green-600 w-1/5 h-[40rem] fixed">
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
                <p className="py-[8rem] w-[10rem] ml-[3rem]">
                    <div className="rounded-lg bg-white text-center">
                        <Link to="/login">
                            <p className="mb-4 hover:bg-green-600 hover:text-white border-2 rounded-lg p-2">
                                <a href="#" className="flex gap-2 ml-8">
                                    <b><IoMdLogOut className="mt-[0.3rem]" /></b>Logout
                                </a>
                            </p>
                        </Link>
                    </div>
                </p>
            </aside>

                <main className="flex-1 border-4 ml-[20rem] w-[49rem]">
                    <h2 className="text-2xl text-green-600 font-bold mb-4 py-3">Admin Dashboard</h2>
                    <div className="flex gap-2 mt-[2rem]">
                        <span className="bg-green-400 border border-gray-300 gap-12 w-[17rem] rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <div className="">
                                <small><b className="text-xl text-blue-700">Users</b></small>
                            </div>
                            <p className="flex mt-[3rem] gap-2">
                                <TbUrgent className="text-2xl" /> Total Users <b>{userCount}</b>
                            </p>
                        </span>

                        <span className="bg-green-500 border border-gray-300 gap-12 w-[17rem] rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <div className="flex">
                                <small><b className="text-xl text-blue-700">All requisition</b></small>
                            </div>
                            <p className="flex mt-[3rem] gap-6">
                                <TbUrgent className="text-2xl" /> Total requisition <b>{approvedTaskCount}</b>
                            </p>
                        </span>

                        <span className="bg-yellow-400 border border-gray-300 gap-12 w-[18rem] rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <div className="flex">
                                <small><b className="text-xl text-blue-700">Approved tasks</b></small>
                            </div>
                            <p className="flex mt-[3rem] gap-6">
                                <TbUrgent className="text-2xl" /> Total approved tasks <b>50 people</b>
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

                    <div>
                        <div className="font-bold font-mono text-2xl py-[3rem]">Barcharts</div>
                        <div className="flex gap-[5rem] w-[100rem]">
                            <div className="w-1/3">
                                <canvas ref={chart1Ref}></canvas>
                            </div>
                            <div className="w-1/3">
                                <canvas ref={chart2Ref}></canvas>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
