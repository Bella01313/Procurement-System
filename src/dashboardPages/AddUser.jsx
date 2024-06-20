import axios from "axios";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../assets/img/my project logo.jpg'; // Ensure this path is correct

const AddUser = () => {
  const navigate = useNavigate();

  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const userData = {
      name: names,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      role: role,
    };

    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://procurement-backend-red.onrender.com/user",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("User added successfully");
        setTimeout(() => {
          navigate("/UserDash");
        }, 2000);
      } else {
        toast.error("Failed to add user");
      }
    } catch (error) {
      console.error("Error details:", error.response ? error.response.data : error.message);
      toast.error("An error occurred: " + (error.response ? error.response.data.message : error.message));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col justify-center items-center border-4 rounded-lg border-green-600 w-[30rem] ml-[30rem] mt-[5rem]">
        <div>
          <img src={Logo} alt="logo" className="w-[20rem]" />
        </div>
        <h2 className="text-green-600 font-bold">Create User Account Here</h2>
        <form id="form" className="my-4" onSubmit={handleForm}>
          <div className="flex flex-col">
            <label htmlFor="name1">Names</label>
            <input
              value={names}
              onChange={(e) => setNames(e.target.value)}
              type="text"
              id="name1"
              className="border-2 rounded-lg p-3"
              placeholder="Enter Names"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="border-2 rounded-lg p-3"
              placeholder="Enter user's email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="role">Role</label>
            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              type="text"
              id="role"
              className="border-2 rounded-lg p-3"
              placeholder="Enter user's role"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold mb-2">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="input border-2 rounded-lg p-3"
              placeholder="Enter password"
              minLength="6"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block font-semibold mb-2"
            >
              Confirm Password
            </label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              id="confirmPassword"
              className="input border-2 rounded-lg p-3"
              placeholder="Confirm password"
              minLength="6"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-[5rem] py-4 border-2 bg-green-500 rounded-lg mt-4 text-xl hover:bg-green-600"
            >
              {isLoading ? "Adding User..." : "Add User"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUser;
