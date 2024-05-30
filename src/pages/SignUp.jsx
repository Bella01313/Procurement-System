import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import Logo from "../assets/img/my project logo.jpg";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://procurement-backend-red.onrender.com/auth/signup",
        {
          email,
          name: fullName,
          password,
          confirmPassword: password,
        }
      );

      toast.success(response.data.message);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.access_token);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        toast.error(error.response.data.message || "Signup failed");
      } else if (error.request) {
        // The request was made but no response was received
        toast.error("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error("Error in setting up request");
      }
    } finally {
      setIsLoading(false);
      // Clear form fields after submission
      setEmail("");
      setFullName("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="font-jost">
      <div className="container mx-auto">
        <ToastContainer />
        <div className="flex border-4 w-[30rem] px-[4rem] justify-center mt-[8rem] rounded-xl border-green-600 items-center">
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <img src={Logo} alt="" className="px-4" />
            <h2 className="text-xl text-green-600 mt-12 mb-4 font-bold">
              Create account here!
            </h2>
            <p>
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-secondary underline text-red-500">
                  Login
                </span>
              </Link>
            </p>
            <div className="mb-4 font-bold">
              <label htmlFor="fullName" className="block font-semibold mb-2">
                Full Name
              </label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                id="fullName"
                className="border-2 rounded-lg p-2"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-4 font-bold">
              <label htmlFor="email" className="block font-semibold mb-2">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                className="border-2 rounded-lg p-2"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4 font-bold">
              <label htmlFor="password" className="block font-semibold mb-2">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                className="border-2 rounded-lg p-2"
                placeholder="Enter password"
                minLength="6"
                required
              />
            </div>
            <div className="mb-4 font-bold">
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
                className="border-2 rounded-lg p-2"
                placeholder="Confirm password"
                minLength="6"
                required
              />
            </div>
            <div className="mb-6">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Remember me</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 py-3 rounded-lg text-xl mb-3 font-bold hover:bg-green-700 hover:text-white"
            >
              {isLoading ? (
                <ThreeDots
                  height="30"
                  width="30"
                  radius="4"
                  color="white"
                  ariaLabel="three-dots-loading"
                />
              ) : (
                "Sign up"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
