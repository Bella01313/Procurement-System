import { Link } from 'react-router-dom';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { LuUsers } from 'react-icons/lu';
import { MdManageHistory } from 'react-icons/md';
import Logo from '../assets/img/my project logo.jpg';

const Approved = () => {
  return (
    <div className='flex'>
      

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
     <main className="flex-1  border-4 ml-[20rem] w-[49rem] ">

jfjfjfjfj

     </main>
    </div>
  );
}

export default Approved;
