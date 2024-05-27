import { HiOutlineDocumentReport } from 'react-icons/hi';
import { LuUsers } from 'react-icons/lu';
import { MdManageHistory } from "react-icons/md";
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import Logo from '../assets/img/my project logo.jpg';
import axios from 'axios';
import { IoMdLogOut } from "react-icons/io";
import { GrCompliance } from "react-icons/gr";
import { FcProcess } from "react-icons/fc";

const TenderDash = () => {
    const [tenders, setTenders] = useState([]);

    useEffect(() => {
        const fetchTenders = async () => {
            try {
                const response = await axios.get('https://procurement-backend-red.onrender.com/tenders');
                setTenders(response.data);
            } catch (error) {
                console.error("There was an error fetching the tenders!", error);
            }
        };

        fetchTenders();
    }, []);

    return (
        <>
            <div className='flex'>
            <aside className="bg-green-600 w-1/5 h-[44rem] absolute">
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

                <div className="flex-1 border-4 ml-[20rem] w-[49rem]">
                    <div className="flex flex-col mt-[1rem] gap-4 ml-[10rem]">
                        <Link to="/addTenders">
                            <button className='bg-green-600 hover:opacity-75 font-bold rounded-xl w-[7rem] p-3 ml-[43rem] text-white'>Add New</button>
                        </Link>
                        {tenders.map((tender) => (
                            <div className="flex flex-row gap-[3rem]" key={tender.id}>
                                <div className='border-2 rounded-lg w-[50rem] h-[12rem]'>
                                    <img src={tender.image} alt="Tender" className='px-4 w-[11rem]' />
                                    <div className='ml-[14rem] -my-[4rem]'>
                                        <p className='font-bold text-green-600 text-xl hover:text-green-700'>{tender.title}</p>
                                        <p className='font-bold'>{tender.location}</p>
                                        <p className='font-bold'>Published on {new Date(tender.publishDate).toLocaleDateString()} | Deadline {new Date(tender.deadline).toLocaleDateString()}</p>
                                        <p className='font-bold'>{tender.Qualification}</p>
                                        <Link to="/applicationFrom">
                                            <button className='border-2 rounded-lg mt-2 bg-green-600 hover:opacity-75 p-1'>Apply Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TenderDash;
