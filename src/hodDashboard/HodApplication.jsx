
import { Link } from 'react-router-dom';
import Logo from "../assets/img/my project logo.jpg";
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { LuUsers } from 'react-icons/lu';
const HodApplication = () => {
    return (
        <>
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
            <main className='flex-1  border-4 ml-[20rem] w-[49rem]'>
                <div>
                    <h1 className="text-green-600 font-bold text-2xl text-center order-1 mt-6 underline"> THE LIST OF SUPPLIER APPLICANTS</h1>
               
                </div>
            </main>

        </>
    )
}

export default HodApplication