
import axios from "axios";
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Logo from '../assets/img/my project logo.jpg'
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateUser = () => {
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
      <div className="flex flex-col justify-center items-center border-4 rounded-lg border-green-600 w-[30rem] ml-[30rem] mt-[3rem]">
       <div>
        <img src={Logo} alt="" className="w-[20rem0]" />
        </div>
        <h2 className="text-green-600 font-bold py-4">Edit User </h2>
        <form
          action="/"
          method="get"
          id="form"
          className=" "
        >
          <div className="">
            <div className=" ">
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
                className="px-[8.5rem] mb-3 py-4 border-2 mt-3 bg-green-500 rounded-lg text-xl hover:bg-green-600 "
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

export default UpdateUser;
