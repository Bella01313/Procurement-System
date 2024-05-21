import { useState } from 'react';
import { TiTick } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/img/my project logo.jpg' // Fixed file name

const AddTender = () => {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    location: '',
    time: '',
    qualification: '',
    description: '' // Added description to state
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Submit logic here
    setShowSuccessMessage(true);
    setErrorMessage('');
  };

  const handleClose = () => {
    navigate('/tenders');
  };

  return (
    <>
      <div className="max-w-md mt-[5rem] mx-auto bg-white rounded-md border-4 border-green-600">
        <h1 className='bg-green-600 font-bold text-3xl p-3 flex justify-end'>
          <IoMdClose onClick={handleClose} className='text-red-700 font-bold hover:opacity-75 cursor-pointer' />
        </h1>
        {errorMessage && (
          <p className="text-red-500 mb-4 px-[4rem]">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4 px-[1rem]">
            <label htmlFor="title" className="block">Title</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
              required 
            />
          </div>
          <div className="mb-4 px-[1rem]">
            <label htmlFor="location" className="block">Location</label>
            <input 
              type="text" 
              id="location" 
              name="location" 
              value={formData.location} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
              required 
            />
          </div>
          <div className="mb-4 px-[1rem]">
            <label htmlFor="time" className="block">Time</label>
            <input 
              type="text" 
              id="time" 
              name="time" 
              value={formData.time} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
              required 
            />
          </div>
          <div className="mb-4 px-[1rem]">
            <label htmlFor="qualification" className="block">Qualification</label>
            <input 
              type="text" 
              id="qualification" 
              name="qualification" 
              value={formData.qualification} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
              required 
            />
          </div>
          <div className="mb-4 px-[1rem]">
            <label htmlFor="description" className="block">Description</label>
            <input 
              type="text" 
              id="description" 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
              required 
            />
          </div>
          <div className="mb-4 px-[1rem]">
            <label htmlFor="image" className="block">Image</label>
            <input 
              type="file" 
              id="image" 
              name="image" 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="bg-green-600 hover:opacity-75 text-white ml-4 mb-2 py-2 rounded-md w-[25rem] focus:outline-none focus:bg-blue-600">
            Add Tender
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTender;
