
import { LuUsers } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";

import { HiOutlineDocumentReport } from "react-icons/hi";

import { CiSearch } from "react-icons/ci";
import { TbUrgent } from "react-icons/tb";

import { useEffect, useRef,useState } from 'react';
import Chart from 'chart.js/auto';

import { Link } from 'react-router-dom';
import Logo from '../assets/img/my project logo.jpg';

import axios from "axios";

import { IoMdLogOut } from "react-icons/io";
import { GrCompliance } from "react-icons/gr";
import { FcProcess } from "react-icons/fc";



const Dashboard = () => {




    // Barchart section 

    const chart1Ref = useRef(null);
    const chart2Ref = useRef(null);
    const chart3Ref = useRef(null);
    const chart1InstanceRef = useRef(null);
    const chart2InstanceRef = useRef(null);
    const chart3InstanceRef = useRef(null);

    useEffect(() => {
        // Function to create and update Chart.js instance
        const createOrUpdateChart = (chartRef, chartType, chartData, chartOptions) => {
            if (chartRef && chartRef.current) {
                // Destroy any existing chart instance
                if (chartRef.current.chart) {
                    chartRef.current.chart.destroy();
                }

                const ctx = chartRef.current.getContext('2d');

                // Create new chart instance
                return new Chart(ctx, {
                    type: chartType,
                    data: chartData,
                    options: chartOptions
                });
            }
        };

        // Create or update first chart (bar chart)
        chart1InstanceRef.current = createOrUpdateChart(
            chart1Ref,
            'bar',
            {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'User',
                    data: [65, 59, 80, 81, 56, 55, 40],
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

        // Create or update second chart (line chart)
        chart2InstanceRef.current = createOrUpdateChart(
            chart2Ref,
            'line',
            {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Contact',
                    data: [85, 34, 80, 81, 56, 55, 40],
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

        // Create or update third chart (doughnut chart)
        chart3InstanceRef.current = createOrUpdateChart(
            chart3Ref,
            'doughnut',
            {
                labels: ['user', 'contact', 'User', 'Contact'],
                datasets: [{
                    label: 'User',
                    data: [300, 50, 100],
                    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 237, 76543)', 'rgba(255, 206, 86, 1)'],
                    borderWidth: 1
                }]
            },
            {}
        );
        return () => {
            // Destroy chart instances when the component unmounts
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
    }, []);

    const [userCount, setUserCount] = useState(0);
          
    useEffect(() => {
        async function CountUser() {
          try {
            const response = await axios({
              method: 'GET',
              url: 'https://procurement-backend-red.onrender.com/user',
              headers: {
                //Authorization: `Bearer ${token}`, // Assuming token is defined somewhere in your component
              },
            });
      
            const userCount = response.data.length;
            setUserCount(userCount);
            
            // Do something with the user count
          } catch (error) {
            console.log(error);
          }
        }
        
        CountUser();
      }, []);
   
            
  


    return (
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

                                    <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8"> <b><GrCompliance  className="mt-[0.3rem]" /></b> Approved tasks</a>
                                </li>
                            </Link>

                            <Link to="/pendingTasks" >
                                <li className="mb-4 hover:bg-white rounded-lg p-2">

                                    <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8"> <b><FcProcess  className="mt-[0.3rem]" /></b> Pending tasks</a>
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
                <p className="py-[8rem] w-[10rem]  ml-[3rem]">

                    <div className="rounded-lg bg-white text-center ">
                      <a href="./login" className="text-black">  <IoMdLogOut className="pl-1 ml-[2rem] text-red-400 " />Logout</a>
                    </div>
                </p>
            </aside >

            <main className="flex-1 border-4 ml-[20rem] w-[49rem] ">

                <h6 className="text-green-700">Pages / Dashboard</h6>
                <h2 className="text-2xl  mb-4">Dashboard</h2>

                <div className="bg-white border flex border-gray-300 rounded-md w-[17rem] h-[2rem] focus:outline-none focus:ring-2 focus:ring-green-500 ml-[50rem] -mt-[3rem] text-green-500">
                    <input
                        type="text"
                        className="text-black flex gap-2 outline-none bg-transparent"
                        placeholder="Search"
                    />
                    <CiSearch className="mt-[0.3rem]" />
                </div>



                <div className=" flex gap-2 mt-[1rem]">

                    <span className="bg-green-400 border border-gray-300 gap-12 w-[17rem] rounded-md px-4  focus:outline-none focus:ring-2 focus:ring-green-500">
                        <div className="  "> <small ><b className="ml- text-xl text-blue-700 ">Users </b></small>  </div>
                        <p className="flex mt-[3rem] -ml-[rem] gap-2"><TbUrgent className="mt-[rem] text-2xl " /> Total Users <b className="text-nomo ">{userCount}</b>  </p>
                    </span>


                    <span className="bg-green-500  border border-gray-300 gap-12 w-[17rem] rounded-md px-4  focus:outline-none focus:ring-2 focus:ring-green-500">
                        <div className=" flex "> <small ><b className="ml- text-xl text-blue-700">Approved task  </b></small>  </div>
                        <p className="flex mt-[3rem] -ml-[rem] gap-6"><TbUrgent className="mt-[rem] text-2xl " /> Total USER <b className=" italic  font-mono ">50 people</b>  </p>
                    </span>
                    <span className="bg-yellow-400  border border-gray-300 gap-12 w-[18rem] rounded-md px-4  focus:outline-none focus:ring-2 focus:ring-green-500">
                        <div className=" flex "> <small ><b className="ml- text-xl text-blue-700">Appending task</b></small>  </div>
                        <p className="flex mt-[3rem] -ml-[rem] gap-6"><TbUrgent className="mt-[rem] text-2xl " /> Total contact <b className=" italic  font-mono ">50 people</b>  </p>
                    </span>
                    <span className="bg-blue-400 border border-gray-300 gap-12 w-[17rem] rounded-md px-4  focus:outline-none focus:ring-2 focus:ring-green-500">
                        <div className=" flex "> <small ><b className="ml- text-xl text-blue-700">Applicants</b></small>  </div>
                        <p className="flex mt-[3rem] -ml-[rem] gap-2"><TbUrgent className="mt-[rem] text-2xl " /> Total Users <b className="text-nomo ">50 people</b>  </p>
                    </span>


                

                </div>
                <div>
                    <div className="font-bold font-mono text-2xl">Barcharts</div>
                    <div className="flex  gap-[5rem] w-[100rem] h-[rem]">
                        <div className="w-1/3">
                            <canvas ref={chart1Ref}></canvas>
                        </div>
                        <div className="w-1/3">
                            <canvas ref={chart2Ref}></canvas>
                        </div>
                        {/* <div className="w-1/3">
              <canvas ref={chart3Ref}></canvas>
            </div>  */}
                    </div>
                </div>

             
            </main>
        </div >
    );
}

export default Dashboard;