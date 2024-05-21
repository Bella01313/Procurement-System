




import { LuUsers } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";

import { HiOutlineDocumentReport } from "react-icons/hi";

import { Link } from 'react-router-dom';


const AccountDash = () => {




    return (
        <>
            <div className="flex ">

                <aside className="bg-green-700 w-1/5 h-full  absolute">
                    <div className="flex flex-col ">

                        {/* Sidebar Navigation */}
                        <nav>
                            <img className="w-[10rem] ml-3" src="../src/assets/img/logo.png" alt="" />
                            <ul className="mt-[2rem] text-xl  ">
                                <Link to="/dashboard" >
                                    <li className="mb-4">
                                        <a href="#" className=" text-white hover:text-green-300 flex gap-2 ml-8"><b><HiOutlineDocumentReport className="mt-[0.3rem]" /></b>Dashboard </a>
                                    </li>
                                </Link>
                                <Link to="/UserDash" >

                                    <li className="mb-4">

                                        <a href="#" className="text-white hover:text-green-300 flex gap-2 ml-8"> <b><LuUsers className="mt-[0.3rem]" /></b> Users</a>
                                    </li>
                                </Link>

                                <Link to="/AccountDash" >
                                    <li className="mb-4">

                                        <a href="#" className="text-white hover:text-green-300 flex gap-2 ml-8"> <b><LuUsers className="mt-[0.3rem]" /></b> Profile</a>
                                    </li>
                                </Link>
                                <Link to="/AnalyticsDash" >
                                    <li className="mb-4">
                                        <a href="#" className="text-white hover:text-green-300 flex gap-2 ml-8"> <b><MdManageHistory className="mt-[0.3rem]" /></b>Analytics</a>
                                    </li>
                                </Link>

                                <Link to="/AdminDash" >
                                    <li className="mb-4">
                                        <a href="#" className="text-white hover:text-green-300 flex gap-2 ml-8"> <b><MdManageHistory className="mt-[0.3rem]" /></b>Adminstrator</a>
                                    </li>
                                </Link>
                                <div className="">
                                    <a href="#" className=" hover:text-green-300  ml-8"><b>Logout</b></a>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </aside >
            </div >

        </>
    );
}

export default AccountDash;