
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { LuUsers } from 'react-icons/lu';
import pc1 from '../assets/img/10004.jpg'
import pc2 from '../assets/img/10001.jpg'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/my project logo.jpg'
const HodTenders = () => {
    return (



        <>
            <div className='flex'>
                
                <aside className="bg-green-600 w-1/5 h-[40rem] absolute">
                    <div className="flex flex-col ">
                    <img src={Logo} alt="" className="w-[10rem]  bg-transparent ml-8 rounded-full mt-[1rem]" />

                        {/* Sidebar Navigation */}
                        <nav>

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

                <div className="flex-1  border-4 ml-[20rem] w-[49rem]">
                <div className="flex flex-col mt-[1rem] gap-4 ml-[10rem]">
               
                    <div className=" flex flex-row gap-[3rem]">
                        <div className=' border-2 rounded-lg  w-[50rem] h-[12rem] '>
                            <img src={Logo} alt="" className=' px-4 w-[11rem]' />
                            <div className=' ml-[14rem] -my-[4rem]'>
                                <p className='font-bold text-green-600 text-xl hover:text-green-700'>Supply of the Transformers</p>
                                <p className='font-bold'>Rwanda ,Kigali</p>
                                <p className='font-bold'>Published on 03-04-2024 | Deadline 06-06-2024</p>
                                <p className='font-bold'> Not specified</p>
                                <Link to="/applicationFrom">
                                    <button className='border-2 rounded-lg mt-2 bg-green-600 hover:opacity-75 p-1'>Apply Now</button>
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className=" flex flex-row gap-[3rem]">
                        <div className=' border-2 rounded-lg  w-[50rem] h-[12rem] '>
                            <img src={Logo} alt="" className=' px-4 w-[11rem]' />
                            <div className=' ml-[14rem] -my-[4rem]'>
                                <p className='font-bold text-green-600 text-xl hover:text-green-700'>Supply of the Transformers</p>
                                <p className='font-bold'>Rwanda ,Kigali</p>
                                <p className='font-bold'>Published on 03-04-2024 | Deadline 06-06-2024</p>
                                <p className='font-bold'> Not specified</p>
                                <Link to="/applicationFrom">
                                    <button className='border-2 rounded-lg mt-2 bg-green-600 hover:opacity-75 p-1'>Apply Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-row gap-[3rem]">
                        <div className=' border-2 rounded-lg  w-[50rem] h-[12rem] '>
                            <img src={Logo} alt="" className=' px-4 w-[11rem]' />
                            <div className=' ml-[14rem] -my-[4rem]'>
                                <p className='font-bold text-green-600 text-xl hover:text-green-700'>Supply of the Transformers</p>
                                <p className='font-bold'>Rwanda ,Kigali</p>
                                <p className='font-bold'>Published on 03-04-2024 | Deadline 06-06-2024</p>
                                <p className='font-bold'> Not specified</p>
                                <Link to="/applicationFrom">
                                    <button className='border-2 rounded-lg mt-2 bg-green-600 hover:opacity-75 p-1'>Apply Now</button>
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className=" flex flex-row gap-[3rem]">
                        <div className=' border-2 rounded-lg  w-[50rem] h-[12rem] '>
                            <img src={Logo} alt="" className=' px-4 w-[11rem]' />
                            <div className=' ml-[14rem] -my-[4rem]'>
                                <p className='font-bold text-green-600 text-xl hover:text-green-700'>Supply of the Transformers</p>
                                <p className='font-bold'>Rwanda ,Kigali</p>
                                <p className='font-bold'>Published on 03-04-2024 | Deadline 06-06-2024</p>
                                <p className='font-bold'> Not specified</p>
                                <Link to="/applicationFrom">
                                    <button className='border-2 rounded-lg mt-2 bg-green-600 hover:opacity-75 p-1'>Apply Now</button>
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className=" flex flex-row gap-[3rem]">
                        <div className=' border-2 rounded-lg  w-[50rem] h-[12rem] '>
                            <img src={Logo} alt="" className=' px-4 w-[11rem]' />
                            <div className=' ml-[14rem] -my-[4rem]'>
                                <p className='font-bold text-green-600 text-xl hover:text-green-700'>Supply of the Transformers</p>
                                <p className='font-bold'>Rwanda ,Kigali</p>
                                <p className='font-bold'>Published on 03-04-2024 | Deadline 06-06-2024</p>
                                <p className='font-bold'> Not specified</p>
                                <Link to="/applicationFrom">
                                    <button className='border-2 rounded-lg mt-2 bg-green-600 hover:opacity-75 p-1'>Apply Now</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>
        </>

    )
}

export default HodTenders