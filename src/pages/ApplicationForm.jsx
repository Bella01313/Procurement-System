import { useState } from 'react';
import { TiTick } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/img/my project logo.jpg'; // Fixed file name
import axios from 'axios';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        campanyName: '',
        campanyaddress: '',
        contactNumber: '',
        whyHire: '' // Added missing description in state
    });

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmitForm = async(e)=>{
        e.preventDefault();
        await axios({
            method: 'post',
            url: 'https://procurement-backend-red.onrender.com/form',
            
            data: formData,
    
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            
        })

        .then((response)=>{
            
            console.log(response);
            setShowSuccessMessage(true);
            setErrorMessage('');
            navigate('/');
        }).catch((Error)=>{
            console.log(Error);
            setShowSuccessMessage(false);
        })
    }
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const data = new FormData();
    //     for (const key in formData) {
    //         data.append(key, formData[key]);
    //     }

    //     try {
    //         const response = await fetch('https://procurement-backend-red.onrender.com/form', {
    //             method: 'POST',
    //             body: data,
    //         });

    //         if (response.ok) {
    //             setShowSuccessMessage(true);
    //             setErrorMessage('');
    //         } else {
    //             setErrorMessage('Failed to submit the form. Please try again.');
    //         }
    //     } catch (error) {
    //         setErrorMessage('An error occurred. Please try again later.');
    //     }
    // };

    const handleClose = () => {
        navigate('/tenders');
    };

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
                {errorMessage && (
                    <p className="text-red-500 mb-4 px-[4rem]">{errorMessage}</p>
                )}
                <p className='px-[4rem]'>Please fill out the form below</p>
                <form onSubmit={handleSubmitForm} className="mt-4">
                    <div className="mb-4 px-[1rem]">
                        <label htmlFor="fullName" className="block">Full Names</label>
                        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4 px-[1rem]">
                        <label htmlFor="email" className="block">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4 px-[1rem]">
                        <label htmlFor="campanyName" className="block">Company Name</label>
                        <input type="text" id="campanyName" name="campanyName" value={formData.campanyName} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4 px-[1rem]">
                        <label htmlFor="campanyaddress" className="block">Company Address</label>
                        <input type="text" id="campanyaddress" name="campanyaddress" value={formData.campanyaddress} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4 px-[1rem]">
                        <label htmlFor="contactNumber" className="block">Contact Number</label>
                        <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4 px-[1rem]">
                        <label htmlFor="receipt" className="block">Upload CV</label>
                        <input type="file" id="receipt" name="receipt" onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4 px-[1rem]">
                        <label htmlFor="whyHire" className="block">Why hire you</label>
                        <textarea id="whyHire" name="whyHire" value={formData.whyHire} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
                    </div>
                    <button type="submit" className="bg-green-600 hover:opacity-75 text-white ml-4 mb-2 py-2 rounded-md w-[25rem] focus:outline-none focus:bg-blue-600">Submit</button>
                </form>
            </div>
            {showSuccessMessage && (
                <p className="text-xl text-mono ml-[63rem] text-blue-600">Form received successfully, you will receive a message on your phone shortly <TiTick className="bg-gray-200 rounded-full text-4xl mt-[3rem] ml-[2rem] w-[10rem] h-[10rem]" /></p>
            )}
        </>
    );
};

export default ApplicationForm;
