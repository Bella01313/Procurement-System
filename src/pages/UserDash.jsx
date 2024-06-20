import { useState, useEffect } from "react";
import { BsTrashFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Puff } from "react-loader-spinner";
import { LuUsers } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";
import Logo from '../assets/img/my project logo.jpg';
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoMdLogOut } from "react-icons/io";
import { GrCompliance } from "react-icons/gr";
import { FcProcess } from "react-icons/fc";
import "react-toastify/dist/ReactToastify.css";

const UserDash = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userPageNumber, setUserPageNumber] = useState(0);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("https://procurement-backend-red.onrender.com/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Failed to fetch users");
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      try {
        const token = localStorage.getItem("token");
        
        const response = await fetch(`https://procurement-backend-red.onrender.com/user?id=${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        console.log('Response from server:', response);
  
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
  
        const result = await response.json();
        console.log('Delete result:', result);
  
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
        toast.success("Delete successful");
      } catch (error) {
        console.error("Error deleting user:", error);
        toast.error("Delete failed");
      }
    }
  };
  
  
  
  

  const handlePageChange = ({ selected }) => {
    setUserPageNumber(selected);
  };

  const usersVisited = userPageNumber * usersPerPage;
  const pageCount = Math.ceil(users.length / usersPerPage);
  const usersToDisplay = users.slice(usersVisited, usersVisited + usersPerPage).map((user) => (
    <tr key={user._id} className="text-2xl border-b-2 border-b-slate-200">
      <td className="lg:px-[0.5rem] w-[10rem] break-words text-center">{user.email}</td>
      <td className="lg:px-[0rem] text-center">{user.name}</td>
      <td className="md:px-[0.5rem] text-center md:py-[1.5rem]">{user.role}</td>
      <td className="md:px-[0rem] text-center">
        <span className="flex space-x-4 md:pl-8">
          <button onClick={() => handleDelete(user._id)}>
            <BsTrashFill className="text-red-500" />
          </button>
        </span>
      </td>
    </tr>
  ));

  return (
    <>
      <div className="flex">
      <aside className="bg-green-600 w-1/5 h-[43rem] fixed">
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
                        
                                <Link to="/requisitionListDash">
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
        <main className="flex-1 bg-slate-300 ml-[20rem] p-10">
          <div className="relative mb-4">
            <Link to="/AddUser">
              <button className=" ml-[35rem] border rounded-lg p-2 bg-green-600 hover:opacity-75">Add User</button>
            </Link>
          </div>
          <ToastContainer />
          {isLoading ? (
            <Puff
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass="flex justify-center"
            />
          ) : (
            <div className="bg-grey-300 flex flex-col items-center">
              <div className="w-full mb-4 overflow-x-auto">
                <table className="shadow-2xl w-full rounded-xl mx-auto overflow-y-scroll md:overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr className="font-bold text-2xl border-b-2 border-b-slate-200">
                      <th className="px-5">Email</th>
                      <th>Names</th>
                      <th>Role</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>{usersToDisplay}</tbody>
                </table>
              </div>
              <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                pageCount={pageCount}
                onPageChange={handlePageChange}
                containerClassName="flex justify-center space-x-4 mt-4"
                pageClassName="bg-secondary text-white rounded-lg p-3"
                pageLinkClassName="bg-secondary text-white rounded-lg p-3"
                previousLinkClassName="bg-secondary text-white rounded-lg p-3"
                nextLinkClassName="bg-secondary text-white rounded-lg p-3"
              />
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default UserDash;
