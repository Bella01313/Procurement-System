import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/img/my project logo.jpg';

const AddTenderForm = () => {
    const [title, setTitle] = useState('');
    const [qualification, setQualification] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState([]);
    const [deadline, setDeadline] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('qualification', qualification);
        formData.append('location', location);
        for (let i = 0; i < image.length; i++) {
            formData.append('image', image[i]);
        }
        formData.append('deadline', deadline);
        console.log(formData);
        try {
           const res= await axios.post('https://procurement-backend-red.onrender.com/tender',formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(res);
            navigate('/tenderDash');
        } catch (error) {
            console.error("There was an error adding the tender!", error);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-md border-4 border-green-600 p-4 mt-10">
            <img src={Logo} alt="Logo" className='mx-auto w-24 mb-4' /> 
            <h2 className="text-2xl font-bold mb-4 text-center">Add New Tender</h2>
            <form onSubmit={handleSubmit} encType={'multipart/form-data'}>
                <div className="mb-4">
                    <label htmlFor="title" className="block">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="qualification" className="block">Qualification</label>
                    <input
                        type="text"
                        id="qualification"
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block">Location</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block">Image</label>
                    <input
                        type="file"
                        id="image"
                        name='image'
                        onChange={(e) => setImage(e.target.files)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="deadline" className="block">Deadline</label>
                    <input
                        type="date"
                        id="deadline"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                        multiple
                    />
                </div>
                <button
                    type="submit"
                    className="bg-green-600 hover:opacity-75 text-white py-2 rounded-md w-full focus:outline-none"
                >
                    Add Tender
                </button>
            </form>
        </div>
    );
};

export default AddTenderForm;
