
import kice from '../assets/img/home image.jpg';
import About from '../pages/About';
import Service from '../pages/Service';
import Testimonials from './Testimonials';
const HomePage = () => {
  return (
    <>
    <div className="flex mt-[2rem] flex-row bg-gradient-to-b from-white via-gray-100 to-blue-100 w-full h-full gap-[5rem]">
   
      <div className="pl-[10rem] w-[50%] py-[10rem]">
        <p className="text-5xl font-bold ">"Procurement Perfected</p>
        <span className="text-5xl font-bold px-[4rem] text-green-400">Savings Secured."</span>

        <p className="py-6 text-gray-600">"Savings Simplified, Procurement Amplified"<br />
          encapsulates a powerful concept that highlights the benefits<br />
          and objectives of an efficient procurement process. In this context "Savings Simplified" alludes to the streamlining and optimization of within the procurement function." <br />
          Savings-related activities It signifies the implementation of strategies and practices that enable organizations to achieve cost reduction, enhance operational efficiency, and maximize the value derived from their procurement efforts. <br /><br />
        </p>

        <div className="flex bg-white rounded-full w-[40rem] p-2 gap-[10rem]">
          <input type="text" placeholder="username@yourdomain.com" className="text-xl w-[30rem] pl-6 " />
         <a href="/signUp"><button className="bg-green-300 hover:bg-green-500 text-white rounded-full w-[8rem] p-3">Sign up</button></a> 
        </div>
      </div>
      <div className='flex flex-col border- border-gray-400 rounded-lg shadow-lg w-[40%] h-[59vh] p-[2rem] gap-[1rem] animate-pulse transition duration-500 ease-in-out my-[9rem]'>
        <img src={kice} alt="" className=' object-cover no-repeat h-[59vh] ' />
      </div>
    </div>
    <div> <About/></div>
    <div><Service/></div>
    <div><Testimonials/></div>
   
    </>
  );
};

export default HomePage;
