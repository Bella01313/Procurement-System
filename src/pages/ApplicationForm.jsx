
import { useState } from 'react';
// import { TiTick } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
// import { useNavigate } from 'react-router-dom';
import Logo from '../assets/img/my project logo.jpg'; 
import { ThreeDots } from 'react-loader-spinner';
//import { IoMdClose } from "react-icons/io";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {  toast } from "react-toastify";
const ApplicationForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [cv, setCv] = useState('');
    const [whyHire, setWhyHire] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    const handleSubmit= async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        console.log("CV file:", cv); // Log the cv state variable
    
        const form = {
            fullName: fullName,
            email: email,
            companyName: companyName,
            companyAddress: companyAddress,
            contactNumber: contactNumber,
            cv: cv, // Ensure this is correctly set
            whyHire: whyHire,
        };
    
        console.log("Form data:", form); // Log the form data object
        
        try {
            const response = await axios.post(`https://procurement-backend-red.onrender.com/form`, form,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const { message } = response.data;
            console.log(response);
            toast.success(message);
            navigate('/tenders');
        } catch (error) {
            console.error("Error:", error);
      toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    

    const handleClose = () => {
        // Implement closing logic here
    };

    // Render your form and other UI elements here

    return (
        <>
            <div className="max-w-md mx-auto bg-white rounded-md border-4 border-green-600">
                <h1 className='bg-green-600 font-bold text-3xl p-3 flex justify-end'>
                    <IoMdClose onClick={handleClose} className='text-red-700 font-bold hover:opacity-75 cursor-pointer' />
                </h1>
                <div>
                    <img src={Logo} alt="Logo" className='px-[5rem]' />
                </div>
                <h2 className="text-2xl font-bold mb-4 px-[4rem]">Supplier Application Form</h2>
             
                <p className='px-[4rem]'>Please fill out the form below</p>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="mb-4 px-[1rem]">
                        <label htmlFor="fullName" className="block">Full Names</label>
                        <input type="text" id="fullName" name="fullName" value={fullName} onChange={(E)=>setFullName(E.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4 px-[1rem]">
                        <label htmlFor="email" className="block">Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4 px-[1rem]">
                        <label htmlFor="campanyName" className="block">Company Name</label>
                        <input type="text" id="campanyName" name="campanyName" value={companyName} onChange={(e)=>setCompanyName(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4 px-[1rem]">
                        <label htmlFor="campanyaddress" className="block">Company Address</label>
                        <input type="text" id="campanyaddress" name="campanyaddress" value={companyAddress} onChange={(e)=>setCompanyAddress(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4 px-[1rem]">
                        <label htmlFor="contactNumber" className="block">Contact Number</label>
                        <input type="text" id="contactNumber" name="contactNumber" value={contactNumber} onChange={(e)=>setContactNumber(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4 px-[1rem]">
                        <label htmlFor="receipt" className="block">Upload CV</label>
                        <input type="file" id="receipt" name="cv"  onChange={(e) => setCv(e.target.files[0])} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4 px-[1rem]">
                        <label htmlFor="whyHire" className="block">Why hire you</label>
                        <textarea id="whyHire" placeholder='begin with the title for tender,your description follow' name="whyHire" value={whyHire} onChange={(e)=>setWhyHire(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
                    </div>
                    <button
            type="submit"
            className="w-full bg-green-600  py-3 rounded-lg text-xl mb-3 font-bold hover:bg-green-700 hover:text-white"
          >
            {isLoading ? (
              <ThreeDots
                height="30"
                width="30"
                radius="4"
                color="white"
                ariaLabel="three-dots-loading"
              />
            ) : (
              "submit"
            )}
        
          </button>
                </form>
            </div>
       
        </>
    );
};

export default ApplicationForm;
