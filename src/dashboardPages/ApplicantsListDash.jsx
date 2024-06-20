import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from "../assets/img/my project logo.jpg";
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { LuUsers } from 'react-icons/lu';

const ApplicationListDash = () => {
    const [applicants, setApplicants] = useState([]);
    const [tenders, setTenders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [applicantCount, setApplicantCount] = useState(0);
    const [selectedApplicants, setSelectedApplicants] = useState({});
    
    

    useEffect(() => {
        const fetchApplicantsAndTenders = async () => {
            try {
                const [applicantsResponse, tendersResponse] = await Promise.all([
                    axios.get('https://procurement-backend-red.onrender.com/candidate'),
                    axios.get('https://procurement-backend-red.onrender.com/tenders')
                ]);

                setApplicants(applicantsResponse.data);
                setTenders(tendersResponse.data);
                setApplicantCount(applicantsResponse.data.length);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchApplicantsAndTenders();
    }, []);

    const handleSelect = (id) => {
        setSelectedApplicants((prevSelected) => ({
            ...prevSelected,
            [id]: !prevSelected[id],
        }));
    };
    
    const handleReject = async (id) => {
        try {
            await axios.post(`https://procurement-backend-red.onrender.com/reject-application/?id=${id}`);
            setApplicants((prevApplicants) => prevApplicants.filter(applicant => applicant._id !== id));
            setApplicantCount((prevCount) => prevCount - 1);
        } catch (error) {
            console.error('Error rejecting applicant:', error);
        }
    };

    const getTenderTitle = (tenderId) => {
        const tender = tenders.find(t => t.id === tenderId);
        return tender ? tender.title : 'Unknown Tender';
    };

    return (
        <>
              <aside className="bg-green-600 w-1/5 h-[43rem] fixed">
                    <div className="flex flex-col ">
                        <img src={Logo} alt="" className="w-[10rem] bg-transparent ml-8 rounded-full mt-[1rem]" />

                        {/* Sidebar Navigation */}
                        <nav>
                            <ul className="mt-[2rem] text-xl">
                                <Link to="/dashboard">
                                    <li className="mb-4 hover:bg-white rounded-lg p-2">
                                        <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8">
                                            <b><HiOutlineDocumentReport className="mt-[0.3rem]" /></b>Dashboard
                                        </a>
                                    </li>
                                </Link>
                                <Link to="/UserDash">
                                    <li className="mb-4 hover:bg-white rounded-lg p-2">
                                        <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8">
                                            <b><LuUsers className="mt-[0.3rem]" /></b> Users
                                        </a>
                                    </li>
                                </Link>
                                <Link to="/approvedTasks">
                                    <li className="mb-4 hover:bg-white rounded-lg p-2">
                                        <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8">
                                            <b><GrCompliance className="mt-[0.3rem]" /></b> Approved tasks
                                        </a>
                                    </li>
                                </Link>
                        
                                <Link to="/requisitionListDash">
                                    <li className="mb-4 hover:bg-white rounded-lg p-2">
                                        <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8">
                                            <b><MdManageHistory className="mt-[0.3rem]" /></b>Requisition List
                                        </a>
                                    </li>
                                </Link>
                                <Link to="/tenderDash">
                                    <li className="mb-4 hover:bg-white rounded-lg p-2">
                                        <a href="#" className="text-white hover:text-green-600 flex gap-2 ml-8">
                                            <b><MdManageHistory className="mt-[0.3rem]" /></b>Tenders
                                        </a>
                                    </li>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                    <p className="py-[8rem] w-[10rem] ml-[3rem]">
                        <div className="rounded-lg bg-white text-center">
                            <Link to="/">
                                <p className="mb-4 hover:bg-green-600 hover:text-white border-2 rounded-lg p-2">
                                    <a href="#" className="flex gap-2 ml-8">
                                        <b><IoMdLogOut className="mt-[0.3rem]" /></b>Logout
                                    </a>
                                </p>
                            </Link>
                        </div>
                    </p>
                </aside>

            <main className="flex-1 lg:ml-[20rem] p-4">
                <div>
                    <h1 className="text-green-600 font-bold text-2xl text-center mt-6 underline">THE LIST OF SUPPLIER APPLICANTS</h1>
                    <h2 className="text-center text-lg mt-4">Total Applicants: {applicantCount}</h2>
                    {loading ? (
                        <p className="text-center mt-4">Loading...</p>
                    ) : (
                        <ul className="mt-4 border-green-600 space-y-4">
                            {applicants.map(applicant => (
                                <li key={applicant._id} className="border-4 border-green-200 hover:bg-green-100 rounded-lg p-4 flex flex-col">
                                    <p><strong>Name:</strong> {applicant.fullName}</p>
                                    <p><strong>Email:</strong> {applicant.email}</p>
                                    <p><strong>CV:</strong> {applicant.cv}</p>
                                    <p><strong>Company Address:</strong> {applicant.companyAddress}</p>
                                    <p><strong>Company Name:</strong> {applicant.companyName}</p>
                                    <p><strong>Contact Number:</strong> {applicant.contactNumber}</p>
                                    <p><strong>Why we hire you:</strong> {applicant.whyHire}</p>
                                    <p><strong>Applied for:</strong> {getTenderTitle(applicant.tenderId)}</p>
                                    <div className="flex gap-4 mt-2">
                                        <button
                                            className={`px-4 py-2 rounded ${selectedApplicants[applicant._id] ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
                                            onClick={() => handleSelect(applicant._id)}
                                        >
                                            {selectedApplicants[applicant._id] ? 'Selected' : 'Select'}
                                        </button>
                                        <button
                                            className={`px-4 py-2 bg-red-500 text-white rounded`}
                                            onClick={() => handleReject(applicant._id)}
                                        >
                                            Reject
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </main>
        </>
    );
};

export default ApplicationListDash;
