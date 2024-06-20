import Logo from '../assets/img/my project logo1.jpg'
import { Link } from "react-router-dom";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { MdLocalPhone } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <div className='  bg-gradient-to-b from-white via-blue-100 to-blue-200'>
                <div className=' mx-auto px-6 h-[10rem]'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                        <div>
                        <img src={Logo} alt="logo" className='w- mt-[4rem] py-[2rem] px-2 ' />
                        </div>
                        <div className='flex flex-col items-start'>
                         
                            <p className=" text-gray-600 py-[9rem]">
                            <h1 className='text-green-500 font-bold text-xl lg:text-2xl py-4 lg:-mt-[4rem]'>Motto</h1>
                            Savings Simplified, Procurement Amplified &quote; encapsulates a powerful concept that highlights the benefits of savings-related activities. It signifies the implementation of strategies and practices that enable organizations to achieve cost reduction.
                            </p>
                          
                        </div>

                        <div className='flex flex-col lg:py-[4rem]'>
                            <h1 className='text-green-500 font-bold text-xl lg:text-2xl py-4 lg:py-8'>Useful Links</h1>
                            <Link to="/">
                            <p className='text-gray-600 hover:text-blue-500'>Home</p>
                            </Link>
                            <Link to="/about">
                            <p className='text-gray-600 hover:text-blue-500 '>About</p>
                            </Link>
                            <Link to="/service">
                            <p className='text-gray-600 hover:text-blue-500'>Services</p>
                            </Link>
                            <Link to="/tenders">
                            <p className='text-gray-600 hover:text-blue-500'>Tenders</p>
                            </Link>
                            <Link to="/contact">
                            <p className='text-gray-600 hover:text-blue-500'>Contact</p>
                            </Link>
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
