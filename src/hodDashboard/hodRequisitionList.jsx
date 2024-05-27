import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LuUsers } from "react-icons/lu"

import { HiOutlineDocumentReport } from "react-icons/hi";
import Logo from '../assets/img/my project logo.jpg'


const HodRequisitionList = () => {
  const [requisitions, setRequisitions] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRequisitions = async () => {
      try {
        const response = await axios.get('https://procurement-backend-red.onrender.com/allRequest');
        setRequisitions(response.data);
      } catch (error) {
        setErrorMessage('Failed to fetch requisitions. Please try again.');
        console.error('Error fetching requisitions:', error);
      }
    };

    fetchRequisitions();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://procurement-backend-red.onrender.com/request/${id}`);
      setRequisitions(requisitions.filter(req => req._id !== id));
    } catch (error) {
      setErrorMessage('Failed to delete requisition. Please try again.');
      console.error('Error deleting requisition:', error);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/updateRequisition/${id}`);
  };

  return (


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


    <div className="flex-1 border-4 ml-[20rem] w-[49rem]">
      <h1 className="text-2xl font-bold mb-6 text-green-600">Requisition List</h1>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <ul>
        {requisitions.map(req => (
          <li key={req._id} className="mb-4 p-4 border rounded-md shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{req.title}</h2>
                <p className="text-gray-700">{req.description}</p>
              </div>
              <div className="flex gap-2">
                <Link to="/updateRequisition">
                <button
                  onClick={() => handleUpdate(req._id)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
                >
                  Update
                </button>
                </Link>
                <button
                  onClick={() => handleDelete(req._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default HodRequisitionList;
