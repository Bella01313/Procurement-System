import { Link } from 'react-router-dom'
import Logo from '../assets/img/my project logo.jpg'
import { TbHomeBolt } from "react-icons/tb";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { LiaServicestack } from "react-icons/lia";
import { VscCommentDiscussion } from "react-icons/vsc";
import { MdWorkspacesFilled } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const SideBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='bg-white w-full flex fixed top-0 justify-between items-center p-4 '>
            <div>
                <img src={Logo} alt="Logo" className='w-[10rem] lg:ml-[10rem]' />
            </div>
            <ul className='hidden lg:flex gap-[3rem] justify-center items-center'>
                <Link to="/" >
                    <li className="mb-4">
                        <a href="#" className="text-black hover:text-white hover:bg-green-600 rounded-lg p-2 font-bold flex"><TbHomeBolt className="mt-[0.3rem]" /> Home</a>
                    </li>
                </Link>
                <Link to="/about" >
                    <li className="mb-4">
                        <a href="#" className="text-black hover:text-white hover:bg-green-600 rounded-lg p-2 font-bold flex"><BsFillInfoCircleFill className="mt-[0.3rem]" /> About</a>
                    </li>
                </Link>
                <Link to="/service" >
                    <li className="mb-4">
                        <a href="#" className="text-black hover:text-white hover:bg-green-600 rounded-lg p-2 font-bold flex"><LiaServicestack className="mt-[0.3rem]" /> Service</a>
                    </li>
                </Link>
                <Link to="/testimonial" >
                    <li className="mb-4">
                        <a href="#" className="text-black hover:text-white hover:bg-green-600 rounded-lg p-2 font-bold flex"><VscCommentDiscussion className="mt-[0.3rem]" /> Testimonials</a>
                    </li>
                </Link>
                <Link to="/tenders" >
                    <li className="mb-4">
                        <a href="#" className="text-black hover:text-white hover:bg-green-600 rounded-lg p-2 font-bold flex"><MdWorkspacesFilled className="mt-[0.3rem]" /> Tenders</a>
                    </li>
                </Link>
                <Link to="/contact" >
                    <li className="mb-4">
                        <a href="#" className="text-black hover:text-white hover:bg-green-600 rounded-lg p-2 font-bold flex"><IoIosContacts className="mt-[0.3rem]" /> Contact</a>
                    </li>
                </Link>
                <Link to="/login" >
                    <li className="mb-4">
                        <a href="#" className="text-black hover:text-white hover:bg-green-600 rounded-lg p-2 font-bold bg-green-600 flex">Login</a>
                    </li>
                </Link>
            </ul>
            <div className='lg:hidden'>
                <GiHamburgerMenu className='text-3xl cursor-pointer' onClick={() => setMenuOpen(!menuOpen)} />
            </div>
            {menuOpen && (
                <ul className='lg:hidden flex flex-col items-center gap-4 absolute top-[4.5rem] left-0 w-full bg-white p-4 shadow-lg'>
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        <li className="mb-4">
                            <a href="#" className="text-black hover:text-white hover:bg-green-600 rounded-lg p-2 font-bold flex"><TbHomeBolt className="mt-[0.3rem]" /> Home</a>
                        </li>
                    </Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>
                        <li className="mb-4">
                            <a href="#" className="text-black hover:text-white hover:bg-green-600 rounded-lg p-2 font-bold flex"><BsFillInfoCircleFill className="mt-[0.3rem]" /> About</a>
                        </li>
                    </Link>
                    <Link to="/service" onClick={() => setMenuOpen(false)}>
                        <li className="mb-4">
                            <a href="#" className="text-black hover:text-white hover:bg-green-600 rounded-lg p-2 font-bold flex"><LiaServicestack className="mt-[0.3rem]" /> Service</a>
                        </li>
                    </Link>
                    <Link to="/testimonial" onClick={() => setMenuOpen(false)}>
                        <li className="mb-4">
                            <a href="#" className="text-black hover:text-white hover:bg-green-600 rounded-lg p-2 font-bold flex"><VscCommentDiscussion className="mt-[0.3rem]" /> Testimonials</a>
                        </li>
                    </Link>
                    <Link to="/tenders" onClick={() => setMenuOpen(false)}>
                        <li className="mb-4">
                            <a href="#" className="text-black hover:text-white hover:bg-green-600 rounded-lg p-2 font-bold flex"><MdWorkspacesFilled className="mt-[0.3rem]" /> Tenders</a>
                        </li>
                    </Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>
                        <li className="mb-4">
                            <a href="#" className="text-black hover:text-white hover:bg-green-600 rounded-lg p-2 font-bold flex"><IoIosContacts className="mt-[0.3rem]" /> Contact</a>
                        </li>
                    </Link>
                    <Link to="/login" onClick={() => setMenuOpen(false)}>
                        <li className="mb-4  ">
                            <a href="#" className="text-black transparent hover:text-white hover:bg-green-600 rounded-lg p-2 font-bold bg-green-600  flex">Login</a>
                        </li>
                    </Link>
                </ul>
            )}
        </div>
    )
}

export default SideBar;
