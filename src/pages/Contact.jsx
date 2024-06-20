import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useForm } from '@formspree/react';
import "./Contact.css"; 

// Contact form
function ContactForm() {
  const [state, handleSubmit] = useForm("xwkgjlze");
  if (state.succeeded) {
    return window.alert("Thanks for the message!");
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="input-container">
        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
        <input type="text" name="first-name" placeholder="Mayank" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
      </div>
      <div className="input-container">
        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
        <input type="text" name="last-name" placeholder="Agarwal" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
      </div>
      <div className="input-container">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" name="email" placeholder="aline21445@gmail.com" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
      </div>
      <div className="input-container">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone No</label>
        <input type="tel" name="phone" placeholder="+250-781-796-264" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
      </div>
      <div className="input-container">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea name="description" placeholder="Hello, I need support for ..." className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"></textarea>
      </div>
      <button type="submit" disabled={state.submitting} className="w-full  bg-green-600 text-white p-2 hover:bg-green-700 font-bold  rounded-xl">
        Send Message
      </button>
    </form>
  );
}

const Contact = () => {
  return (
    <>
      <div className="font-jost">
        <h1 className="text-center text-3xl md:text-4xl py-[6rem] mt-[10rem]  text-green-600 font-bold">CONTACT 📞 US</h1>
        <h1 className='text-green-800 font-bold text-xl py-[9rem] -mt-[16rem] md:text-2xl  text-center animate-pulse'>....................................</h1>
        <div className="container  mx-auto my-7 lg:-my-[3rem] ">
          <div className="flex mt-10 flex-col lg:flex-row gap-8">
            <div className="flex-1  p-[8rem] h-[8rem] md:h-[40rem] md:p-[12rem] bg-green-600 text-white rounded-lg">
              <h2 className="font-bold text-2xl -mt-[5rem]">Just Say Hi!</h2>
              <p className="text-lg">Tell us about yourself and we will contact you as soon as possible.</p>
              <ContactForm />
            </div>
            <div className="flex-1 bg-green-600 text-center py-[5rem] text-white p-7 h-[40rem]  mb-[18rem] rounded-lg">
              <h2 className="text-2xl md:text-3xl mb-4">Contact Information</h2>
              <div className="text-lg mb-6">
                <p>523, Block A</p>
                <p>Kigali, 0000</p>
                <p>Rwanda</p>
              </div>
              <div className="text-lg mb-6">
                <p>procurement.system.red@gmail.com</p>
                <p>Call us: +250-781-796-283</p>
              </div>
          <h1 className="font-bold">"Your feedback is important to us. Please leave a message."</h1>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
