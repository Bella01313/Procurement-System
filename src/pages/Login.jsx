import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import Logo from '../assets/img/my project logo.jpg'
import { IoEyeSharp } from "react-icons/io5";
<IoEyeSharp />

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("https://procurement-backend-red.onrender.com/auth/login", {
        email,
        password,
      });
      console.log(response)
      toast.success(response.data.message);

      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.access_token);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="font-jost">
        <div className="container mx-auto flex justify-center items-center h-screen">
          <ToastContainer />
          <div className="border-4 border-green-600 p-8 rounded-lg w-full max-w-md">
            <img src={Logo} alt="" className="w-full mb-8" />
            <form className="space-y-4">
              <h2 className="text-2xl text-green-600 font-bold">LOGIN HERE!</h2>
              <p>
                Don't have an account yet?{" "}
                <Link to="/signup" className="text-secondary text-red-400 underline">
                  Sign up
                </Link>
              </p>
              <div>
                <label htmlFor="email" className="block font-semibold mb-2">
                  Enter your email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  id="email"
                  className="border-2 rounded-lg w-full px-3 py-2"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block font-semibold mb-2">
                  Enter your password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  className="border-2 rounded-lg w-full px-3 py-2"
                  placeholder="Enter your password"
                />
              </div>
              <Link to="/forgetPassword" className="text-red-600 font-bold hover:text-red-800">
                Forget Password
              </Link>
              <div className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <label className="ml-2">Remember me</label>
              </div>
              <button
                type="submit"
                onClick={handleLogin}
                className="w-full bg-green-600 py-3 rounded-lg text-xl font-bold hover:opacity-75 hover:text-white flex items-center justify-center"
              >
                {isLoading ? (
                  <ThreeDots height={30} width={30} radius={4} color="white" ariaLabel="three-dots-loading" />
                ) : (
                  "Log in"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
