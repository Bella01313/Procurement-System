import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { LuUsers } from 'react-icons/lu';
import { VscGitPullRequestCreate } from 'react-icons/vsc';
import Logo from '../assets/img/my project logo.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HodPendingTasks = () => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const requestData = {
      title,
      description,
      status: "pending task",
      Quantity: quantity
    };

    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://procurement-backend-red.onrender.com/create",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        // Save request to local storage
        const existingRequests = JSON.parse(localStorage.getItem('pendingTasks')) || [];
        existingRequests.push(requestData);
        localStorage.setItem('pendingTasks', JSON.stringify(existingRequests));

        toast.success("Request created successfully");
        setTimeout(() => {
          navigate("/pendingTasks"); // Redirect to the pending tasks page
        }, 2000);
      } else {
        toast.error("Failed to create request");
      }
    } catch (error) {
      console.error("Error details:", error.response ? error.response.data : error.message);
      toast.error("An error occurred: " + (error.response ? error.response.data.message : error.message));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex'>
      <ToastContainer />

      <aside className="bg-green-600 w-1/5 h-[40rem] absolute">
        <div className="flex flex-col">
          <img src={Logo} alt="" className="w-[10rem] bg-transparent ml-8 rounded-full mt-[1rem]" />

          <nav>
            <img className="w-[10rem] ml-3" src="../src/assets/img/logo.png" alt="" />
            <ul className="mt-[2rem] text-xl">
              <Link to="/hodDashboard">
                <li className="mb-4 hover:bg-white rounded-lg p-3">
                  <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8"><b><HiOutlineDocumentReport className="mt-[0.3rem]" /></b>Dashboard</a>
                </li>
              </Link>

              <Link to="/hodTenders">
                <li className="mb-4 hover:bg-white rounded-lg p-3">
                  <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8"><b><VscGitPullRequestCreate className="mt-[0.3rem]" /></b>Requisition</a>
                </li>
              </Link>

              <Link to="/hodTenders">
                <li className="mb-4 hover:bg-white rounded-lg p-3">
                  <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8"><b><LuUsers className="mt-[0.3rem]" /></b>Tenders</a>
                </li>
              </Link>

              <Link to="/hodApplicantList">
                <li className="mb-4 hover:bg-white rounded-lg p-3">
                  <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8"><b><LuUsers className="mt-[0.3rem]" /></b>Applicants List</a>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
        <p className="py-[8rem] w-[10rem] ml-[3rem]">
          <div className="rounded-lg bg-white hover:bg-gray-300 text-center p-2">
            <a href="./login" className="text-black">Logout</a>
          </div>
        </p>
      </aside>
      <main className="flex-1 border-4 ml-[20rem] w-[49rem]">
        <div className="border-4 rounded-lg border-green-600 flex items-center w-[42rem] my-[10rem] ml-[20rem] h-[23rem]">
          <div className="flex flex-col">
            <form onSubmit={handleFormSubmit}>
              <table className="w-[40rem] my-2 py-2 ml-3 bg-white border-4">
                <thead>
                  <tr>
                    <th className="py-2 border-b border-r text-2xl">Name</th>
                    <th className="py-2 border-b text-2xl">Request</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-r font-bold">Title</td>
                    <td className="py-2 px-4 border-b">
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Type the title"
                        className="py-2 px-4 border-b font-medium"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-r font-bold">Quantity</td>
                    <td className="py-2 px-4 border-b">
                      <input
                        type="text"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="Type the quantity"
                        className="py-2 px-4 border-b font-medium"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-r font-bold">Description</td>
                    <td className="py-2 px-4 border-b">
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Type the description"
                        className="py- px-4 border-b font-medium"
                        required
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                type="submit"
                className="border-2 font-bold p-2 bg-green-600 hover:opacity-75 w-[40rem] text-xl ml-2"
              >
                {isLoading ? "Submitting..." : "Requisition"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HodPendingTasks;
