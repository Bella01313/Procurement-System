import kice from '../assets/img/home image.jpg';
import About from '../pages/About';
import Service from '../pages/Service';

import Testimonials from './Testimonials';
import Contact from './Contact'

const HomePage = () => {
  return (
    <>
    <div className='flex flex-col gap-3'>
      <div className='font-jost'>
        <div className="flex flex-col md:flex-row mt-8 md:mt-16 bg-gradient-to-b from-white via-blue-90 to-blue-100 w-full gap-8 md:gap-2">
          
          <div className="px-4 md:pl-40 md:w-1/2 py-[6rem]">
            <p className="text-3xl md:text-5xl animate-fade-in-slow font-bold leading"> &rdquo;Procurement Perfected &rdquo;</p>
            <span className="text-3xl md:text-5xl font-bold md:px-16 text-green-400">Savings Secured &rdquo;.</span>
            <p className="py-6 text-lg animate-fade-in-slow md:text-2xl text-gray-600">
            &rdquo; Savings Simplified, Procurement Amplified &rdquo;<br />
              encapsulates a powerful concept that highlights the benefits<br />
              and objectives of an efficient procurement process. In this context &rdquo; Savings Simplified &rdquo; alludes to the streamlining and optimization of within the procurement function. &rdquo;<br />
              Savings-related activities It signifies the implementation of strategies and practices that enable organizations to achieve cost reduction, enhance operational efficiency, and maximize the value derived from their procurement efforts. <br /><br />
            </p>

            <div className="flex bg-white rounded-full w-full md:w-96 p-2 gap-4 md:gap-20">
              <input type="text" placeholder="username@yourdomain.com" className="text-xl w-full md:w-64 pl-6" />
              <a href="/signUp">
                <button className="bg-green-600 hover:bg-green-500 text-white rounded-full w-24 p-3">Sign up</button>
              </a>
            </div>
          </div>
          
          <div className='flex flex-col border border-gray-400 rounded-lg shadow-lg w-full md:w-2/5 h-60 md:h-96 p-4 gap-4 md:gap-8 animate-pulse transition duration-500 ease-in-out my-8 md:my-32'>
            <img src={kice} alt="" className='object-cover h-full w-full' />
          </div>
        </div>
        
        <div className='-mt-[8rem]'><About /></div>
        <div className='-my-[4rem]'><Service /></div>
        <div className='-my-[4rem]'><Testimonials /></div>
        <div className=''></div>
        <div><Contact/></div>
      </div>
      </div>
    </>
  );
};

export default HomePage;
