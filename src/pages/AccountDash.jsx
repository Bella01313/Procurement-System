




import { LuUsers } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";
import { useState } from 'react';

import { HiOutlineDocumentReport } from "react-icons/hi";

import { Link } from 'react-router-dom';
import Logo from "../assets/img/my project logo.jpg";


const AccountDash = () => {

    const [savedMessage, setSavedMessage] = useState("");

    const handleSaveChanges = () => {
        // Perform saving changes logic here
        // For demonstration purposes, let's just set a message
        setSavedMessage("profile Changed successfully!");
    };


    return (
        <>
            <div className="flex ">
            <aside className="bg-green-600 w-1/5 h-[44rem] absolute">
                <div className="flex flex-col ">
                    <img src={Logo} alt="" className="w-[10rem]  bg-transparent ml-8 rounded-full mt-[1rem]" />

                    {/* Sidebar Navigation */}
                    <nav>
            
                        <ul className="mt-[2rem] text-xl  ">
                            <Link to="/dashboard" >
                                <li className="mb-4 hover:bg-white rounded-lg p-2">
                                    <a href="#" className=" text-white hover:text-green-600 flex gap-2 ml-8"><b><HiOutlineDocumentReport className="mt-[0.3rem]" /></b>Dashboard </a>
                                </li>
                            </Link>
                            <Link to="/UserDash" >

                                <li className="mb-4 hover:bg-white rounded-lg p-2">

                                    <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8"> <b><LuUsers className="mt-[0.3rem]" /></b> Users</a>
                                </li>
                            </Link>

                            <Link to="/approvedTasks" >
                                <li className="mb-4 hover:bg-white rounded-lg p-2">

                                    <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8"> <b><LuUsers className="mt-[0.3rem]" /></b> Approved tasks</a>
                                </li>
                            </Link>

                            <Link to="/pendingTasks" >
                                <li className="mb-4 hover:bg-white rounded-lg p-2">

                                    <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8"> <b><LuUsers className="mt-[0.3rem]" /></b> Pending tasks</a>
                                </li>
                            </Link>

                            <Link to="/AccountDash" >
                                <li className="mb-4 hover:bg-white rounded-lg p-2">

                                    <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8"> <b><LuUsers className="mt-[0.3rem]" /></b> Profile</a>
                                </li>
                            </Link>
                        
                            <Link to="/tenderDash" >
                                <li className="mb-4 hover:bg-white rounded-lg p-2">
                                    <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8"> <b><MdManageHistory className="mt-[0.3rem]" /></b>Tenders</a>
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
            </aside >

                <main className="flex-1 bg-slate-300 ml-[19rem] p-10 w-[75.9rem] h-full absolute">
                    <div className="container mx-auto px-14 py-20">
                        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md w-[30rem] absolute  h-[34rem] overflow-hidden">
                            <div className="p-4">
                                <h2 className="text-2xl font-bold mb-4">Profile</h2>
                                <div className="flex">
                                    <div className="mb-4">
                                        <label htmlFor="firstName" className=" font-semibold gap-[3rem]  mb-1">First Name</label>
                                        <input type="text" id="firstName" className="form-input border-2 p-3 border-gray-500 rounded-lg " placeholder="Uwizeyimana" />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="lastName" className="block font-semibold mb-1">Last Name</label>
                                        <input type="text" id="lastName" className="form-input w-full p-3 border-2 border-gray-500 rounded-lg" placeholder="Alice" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block font-semibold mb-1">Email</label>
                                    <input type="email" id="email" className="form-input w-full p-3 border-2 border-gray-500 rounded-lg" placeholder="Alice21445@gmail.com" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="mobile" className="block font-semibold mb-1">Mobile Number</label>
                                    <input type="tel" id="mobile" className="form-input w-full border-2 border-gray-500 rounded-lg p-3" placeholder="0781*********" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="address" className="block font-semibold mb-1">Department Address</label>
                                    <input type="text" id="address" className="form-input w-full border-2 border-gray-500 rounded-lg p-3" placeholder="Kimisagara Sector, Bus stop, House Number" />
                                </div>

                                <button onClick={handleSaveChanges} className="bg-green-500 text-white  py-3 w-[26rem] rounded hover:bg-green-700">Save changes</button>
                            </div>
                        </div>
                    </div>
                </main >
            </div >
            {savedMessage && <p className="text-blue-700 ml-[22rem] text-4xl -mt-[37rem]">{savedMessage}</p>}
        </>
    );
}

export default AccountDash;