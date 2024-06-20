import { HiOutlineDocumentReport } from 'react-icons/hi';
import { LuUsers } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Logo from '../assets/img/my project logo.jpg';
import axios from 'axios';

const HodTenders = () => {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);
    const [tenders, setTenders] = useState([]);
    const [currentPageNumber, setCurrentPageNumber] = useState(0);
    const tendersPerPage = 4;

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
    const tendersVisited = currentPageNumber * tendersPerPage;
    const pageCount = Math.ceil(tenders.length / tendersPerPage);

    const displayTenders = tenders.slice(tendersVisited, tendersVisited + tendersPerPage);
    const handlePageChange = ({ selected }) => {
        setCurrentPageNumber(selected);
    };

    return (
        <>
            <div className='flex'>
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
                        <a href="./login" className="text-black">Logout</a>
                    </div>
                </p>
            </aside >
    
        <div className="container mx-auto lg:my-[13rem] my-4 p-4">
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1 lg:ml-20">
                    <div className="flex flex-col-reverse gap-2">
                        {displayTenders.map((tender) => (
                            <div className="flex flex-col lg:flex-row" key={tender.id}>
                                <div className='border-2 rounded-lg w-full lg:w-[50rem] h-[18rem] lg:h-[12rem]'>
                                    <img src={tender.image} alt="Tender" className='lg:w-[5rem] my-[3rem] w-[8rem] rounded-full h-auto' />
                                    <div className='p-3'>
                                        <p className='font-bold text-green-600 text-xl hover:text-green-700 ml-[12rem]  lg:-my-[6rem] my-[2rem]'>{tender.title}</p>
                                        <p className='font-bold lg:ml-[12rem]'>{tender.location}</p>
                                        <p className='font-bold ml-[12rem]'>Published on {formattedDate} | Deadline {new Date(tender.deadline).toLocaleDateString()}</p>
                                        <p className='font-bold ml-[12rem]'>{tender.qualification}</p>
                                        <Link to="/applicationForm">
                                            <button className='border-2 rounded-lg bg-green-600 hover:opacity-75 p-1 text-white ml-[12rem] mb-4'>Apply Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={handlePageChange}
                        containerClassName={"pagination"}
                        previousLinkClassName={"previousBttn bg-green-600 hover:opacity-75 rounded-lg p-2"}
                        nextLinkClassName={"nextBttn bg-green-600 hover:opacity-75 rounded-lg p-2"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive px-1 rounded-lg bg-blue-300"}
                        className='flex gap-5 ml-[3rem] mt-3 p-2 rounded-lg bg:gray-100'
                    />
                </div>
              
            </div>
        </div>
            </div>
        </>
    );
};

export default HodTenders;
