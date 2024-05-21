
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const token = localStorage.getItem("token");
  const params = useParams();
  const userId = params.id;

  const navigate = useNavigate();

  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  //isLoading

  const [isLoading, setIsLoading] = useState(false);

  //fetch users axios
  const fetchUsers = () => {
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/getOne?fieldName=_id&value=${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response.data);
      setNames(response?.data?.fullName);
      setEmail(response?.data?.email);
      setRole(response?.data?.role);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //form handling

  const handleForm = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");

    const formData = new FormData();

    formData.append("email", email);
    formData.append("fullName", names);
    formData.append("role", role);

    axios({
      method: "PUT",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/update/${userId}`,
      data: formData,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        toast.success("Update success");
        setTimeout(() => {
          navigate("/dashboard/userDash");
        }, 2000);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });

    setIsLoading(true);
  };

  return (
    <>
      <ToastContainer />
      <div className="md:p-0 rounded-lg bg-slate-100   ">
        <form
          action="/"
          method="get"
          id="form"
          className="flex rounded-xl flex-col items-center md:items-start bg-white space-y-4 md:px-[4rem] "
        >
          <h2 className="font-bold text-3xl">Edit User </h2>

          <div className="flex flex-col space-y-8  justify-center  md: container ">
            <div className="flex-col  flex justify-between md:w-1/2  ">
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Names
                </label>
                <input
                  value={names}
                  onChange={(e) => {
                    setNames(e.target.value);
                  }}
                  type="text"
                  id="name1"
                  className=" border-2 hover:border-2 border-grey-500 hover:border-secondary rounded-lg px-24 py-4 text-black "
                  placeholder="Enter the title "
                  secondary
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  id="email"
                  className=" border-2 hover:border-2 border-grey-500 hover:border-secondary rounded-lg px-20 py-4 text-black"
                  placeholder="Enter user's email"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Role
                </label>
                <input
                  value={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  type="text"
                  id="name1"
                  className="border-2 hover:border-2 border-grey-500 focus:border-secondary hover:border-secondary rounded-lg py-4 px-20 text-black "
                  placeholder="Enter user's role "
                />
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <button
                className="px-6 w-1/2 bg-secondary text-white py-4 rounded-lg text-xl hover:bg-black hover:text-white"
                onClick={handleForm}
              >
                <p> {isLoading ? "Updating..." : "Update user"}</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditUser;
