import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SideBar from './SideBar';
import "./Contact.css"; // Import CSS file for styling

const Contact = () => {
  return (
    <>
      <SideBar />
      <div className="contact">
        <h1 className="heading">CONTACT US</h1>
          <div className="flex flex-row ">
            <div className=" text-xl contact-section p-5">
              <p className=" font-bold text-2xl py-3">Just Say hi!</p>
              <p className="text-xl">Tell us about yourself and we will contact you as soon</p>
              <form action="https://formspree.io/f/mdoqzdlp" method="POST" className="mt-4">
                <div className="input-container">
                  <label htmlFor="first-name">First name:</label>
                  <input type="text" name="first-name" placeholder="Mayank" />
                  <hr className="horizontal-line" />
                </div>
                <div className="input-container">
                  <label htmlFor="last-name">Last Name:</label>
                  <input type="text" name="last-name" placeholder="Agarwal" />
                  <hr className="horizontal-line" />
                </div>
                <div className="input-container">
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" placeholder="aline21445@gmail.com" />
                  <hr className="horizontal-line" />
                </div>
                <div className="input-container">
                  <label htmlFor="phone">Phone No:</label>
                  <input type="tel" name="phone" placeholder="+250-781-796-264" />
                  <hr className="horizontal-line" />
                </div>
                <div className="input-container">
                  <label htmlFor="description">Description:</label>
                  <textarea name="description" placeholder="hello i need support for ..."></textarea>
                  <hr className="horizontal-line" />
                </div>
                <button type="submit"className="bg-green-600 rounded-lg font-bold text-white p-2 hover:opacity-75 w-[30rem]">Send</button>
              </form>
            </div>
            <div className="bg-green-600  font-bold py-6 p-5 contact-section">
              <h2 className="text-3xl mb-4 text-white">Contact Information</h2>
              <div className="text-white text-xl mb-[3rem]">
                <p>523, Block A</p>
                <p>Kigali, 0000</p>
                <p>Rwanda</p>
              </div>
              <div className="text-white text-xl mb-[3rem]">
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
    </>
  )
}

export default Contact;
