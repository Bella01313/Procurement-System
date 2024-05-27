import { HiOutlineDocumentReport } from 'react-icons/hi';
import { LuUsers } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import Logo from '../assets/img/my project logo.jpg';
import axios from 'axios';

const HodTenders= () => {
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
            <aside className="bg-green-600 w-1/5 h-[40rem] absolute">
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

                            {/* Add more sidebar links as needed */}
                        </ul>
                    </nav>
                </div>
                <p className="py-[8rem] w-[10rem] ml-[3rem]">

                    <div className="rounded-lg bg-white  hover:bg-gray-300 text-center p-2">
                        <a href="./login" className="text-black">Logout</a>
                    </div>
                </p>
            </aside >

                <div className="flex-1  border-4 ml-[20rem]  w-[49rem]">
                    <div className="flex flex-col mt-[2rem]  gap-4 ml-[10rem]">
                     
                        {tenders.map((tender) => (
                            <div className="flex flex-row gap-[3rem]" key={tender.id}>
                                <div className='border-2  rounded-lg w-[50rem]  h-[15rem] bg-white'>
                                    <img src={tender.image} alt="Tender" className='p-4 w-[7rem] px-3 mt-4 rounded-full' />
                                    <div className='ml-[10rem] -my-[3rem]'>
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

export default HodTenders;
