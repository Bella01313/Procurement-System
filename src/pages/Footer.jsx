import Logo from '../assets/img/my project logo.jpg'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiGmail, SiAmazonsimpleemailservice } from "react-icons/si";
import { MdLocalPhone } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <div className='  bg-gradient-to-b from-white via-blue-100 to-blue-200'>
                <div className=' mx-auto px-6 h-[15rem]'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                        <div className='flex flex-col items-start'>
                            <img src={Logo} alt="logo" className='w-40 mt-[4rem] py-3 rounded-lg' />
                            <p className=" text-gray-600 py-4">
                                &quote;Savings Simplified, Procurement Amplified &quote; encapsulates a powerful concept that highlights the benefits of savings-related activities. It signifies the implementation of strategies and practices that enable organizations to achieve cost reduction.
                            </p>
                            <div>
                                <ul className="flex gap-4 font-extrabold text-black ">
                                    <li className="border-2 rounded-full p-3 hover:text-white hover:bg-green-600 bg-white"><FaFacebookF /></li>
                                    <li className="border-2 rounded-full p-3 hover:text-white hover:bg-green-600 bg-white"><FaLinkedinIn /></li>
                                    <li className="border-2 rounded-full p-3 hover:text-white hover:bg-green-600 bg-white"><SiGmail /></li>
                                    <li className="border-2 rounded-full p-3 hover:text-white hover:bg-green-600 bg-white"><FaInstagram /></li>
                                </ul>
                            </div>
                        </div>

                        <div className='flex flex-col lg:py-[4rem]'>
                            <h1 className='text-green-500 font-bold text-xl lg:text-2xl py-4 lg:py-8'>Useful Links</h1>
                            <p className='text-gray-600'>Home</p>
                            <p className='text-gray-600'>About us</p>
                            <p className='text-gray-600'>Services</p>
                            <p className='text-gray-600'>Testimonials</p>
                            <p className='text-gray-600'>Tenders</p>
                            <p className='text-gray-600'>Contact</p>
                        </div>

                        <div className='flex flex-col lg:py-[4rem]'>
                            <h1 className='text-green-500 font-bold text-xl lg:text-2xl py-4 lg:py-8'>Contact</h1>
                            <p className='text-gray-600'>KN street 403k</p>
                            <p className='text-gray-600'>Kigali, Rwanda</p>
                            <p className="text-gray-600">
                                <a href="mailto:procurement.system.red@gmail.com" className="text-black hover:text-white hover:bg-green-600 rounded-lg p-2 gap-2 flex">
                                    <SiAmazonsimpleemailservice className="mt-[0.3rem]" />
                                    procurement.system.red@gmail.com
                                </a>
                            </p>
                            <p className="text-gray-600">
                                <a href="tel:+250781796283" className="text-black hover:text-white hover:bg-green-600 rounded-lg p-2 gap-2 flex">
                                    <MdLocalPhone className="mt-[0.3rem]" />
                                    +250-781-796-283
                                </a>
                            </p>
                        </div>

                        <div className='flex flex-col lg:py-[4rem]'>
                            <h1 className='text-green-500 font-bold text-xl lg:text-2xl py-4 lg:py-8'>Newsletter</h1>
                            <p className='text-gray-600'>Be the first to get the latest from us</p>
                            <div className="flex bg-white rounded-lg border-2 w-full p-2 mt-4">
                                <input type="text" placeholder="Enter the email" className="text-lg lg:text-xl w-full p-2" />
                                <a href="/contact">
                                    <button className="bg-black hover:bg-white text-white hover:text-black font-bold w-24 lg:w-32 p-2 py-3">Sign up</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center  text-black bg-gradient-to-b from-white via-blue-100 to-blue-200 py-8 mt-[14rem]'>
                    <p>All Rights Reserved &copy; 2024. Designed by <span className='font-bold'>ABAA*4*group</span> [in SheCanCode]👌🏼👌🏼 %%*</p>
                </div>
            </div>
        </>
    )
}

export default Footer;
