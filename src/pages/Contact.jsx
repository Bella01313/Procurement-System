import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SideBar from './SideBar'
const Contact = () => {
  return (
    <>
      <SideBar />
      <div className="">
        <h1 className="heading">CONTACT US</h1>
        <div className="">
          <div className=" flex flex-row">
            <div className="bg-white text-black text-xl">
            <p className="text-black font-bold text-2xl">Just Say hi!</p>
            <p className="text-black text-xl">Tell us about yourself and we will contact you as soon</p>
            <form action="https://formspree.io/f/mdoqzdlp" method="POST" class="mt-4 ">
              <div className="">
                <label htmlFor="name" className="" >First name:</label>
                <input type="text" name="name" palceholder="Mayank" className="input" />
                <label htmlFor="name">Last Name:</label>
                <input type="text" name="name" palceholder="Agarwal" className="input" />
              </div>
              <div className="" >
                <label htmlFor="name" >Email:</label>
                <input type="email" name="email" palceholder="aline21445@gmail.com" className="input " />
                <label htmlFor="name">Phone No:</label>
                <input type="email" name="email" palceholder="+250-781-796-264" className="input " />
              </div>
              <div className="">
                <label htmlFor="name">Description:</label>
                <textarea name="message" palceholder="hello i need support for ..." class=" input"></textarea><br />
              </div>

              <button type="submit" class="bg-black text-white px-4 py-2 mt-2 rounded-md">Send</button>
            </form>
            </div>
            <div className="bg-green-600  font-bold py-3 p-5  ">
            <h2 className="text-3xl  mb-4  text-white ">contact information</h2>
            <div className="text-white text-xl mb-[3rem]">
              <p>523, Block A</p>
              <p>Kigali, 0000</p>
              <p>Rwanda</p>
            </div>
            <div className="text-white text-xl mb-[3rem] ">
              <p>Email us: procurementsystem@gmail.com</p>
              <p>Call us: +25078012948</p>
            </div>
            <div className="mb-[3rem] text-white text-3xl">Follow us on</div>

            <div>
              <ul className="flex gap-[3rem] font-extrabold text-black ">
                <li className="border-2 rounded-full bg-white text-black"><FaFacebookF /></li>
                <li className="border-2 rounded-full bg-white text-black"><FaLinkedinIn /></li>
                <li className="border-2 rounded-full bg-white text-black"><FaXTwitter /></li>
                <li className="border-2 rounded-full bg-white text-black"><FaInstagram /></li>
              </ul>
            </div>
          </div>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default Contact