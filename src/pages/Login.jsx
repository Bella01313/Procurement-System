import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import Logo from '../assets/img/my project logo.jpg'
import { Link } from "react-router-dom"

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
      
      <div className="tab1">
        <ToastContainer />
        <div className=" border-4 border-green-600 py-4 px-3 ">
          <img src={Logo} alt="" className="w-[20rem] mb-[4rem] px-[3rem] ml-[3rem] " />
          <form className=" -mt-[10rem] p-8">
            <h2 className="text-2xl text-green-600 font-bold  px-[6rem] py-[4rem]">LOGIN HERE!</h2>
            <p>
              Don't have an account yet?<Link to="/signup"><span className="text-secondary text-red-400 underline">Sign up</span></Link> 
            </p>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-2">
                Enter your email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="email"
                className="input"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block font-semibold mb-2">
                Enter your password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                className="input"
                placeholder="Enter your password"
              />
            </div>
            <Link to="/forgetPassword"><h3 className='font-bold text-right text-red-600 '>Forget Password</h3></Link>
            <div className="mb-6 flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <label className="ml-2">Remember me</label>
            </div>
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full bg-secondary  py-3 rounded-lg text-xl font-bold hover:bg-black hover:text-green-700"
            >
              {isLoading ? (
                <ThreeDots
                  height={30}
                  width={30}
                  radius={4}
                  color="white"
                  ariaLabel="three-dots-loading"
                />
              ) : (
                "Log in"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
