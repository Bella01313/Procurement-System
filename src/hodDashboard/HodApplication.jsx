import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from "../assets/img/my project logo.jpg";
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { LuUsers } from 'react-icons/lu';

const HodApplication = () => {
    const [applicants, setApplicants] = useState([]);
    const [tenders, setTenders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [applicantCount, setApplicantCount] = useState(0);
    const [selectedApplicants, setSelectedApplicants] = useState({});
    const [rejectedApplicants, setRejectedApplicants] = useState({});
    

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
            await axios.delete(`https://procurement-backend-red.onrender.com/candidate/${id}`);
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
            <aside className="bg-green-600 w-full lg:w-1/5 h-full lg:h-[45rem] fixed">
                <div className="flex flex-col items-center lg:items-start p-4 ">
                    <img src={Logo} alt="" className="w-[10rem] bg-transparent rounded-full mt-4" />

                    <nav className="mt-8">
                        <ul className="text-xl text-white space-y-4">
                            <Link to="/hodDashboard">
                                <li className="hover:bg-white rounded-lg p-3">
                                    <div className="flex gap-2 hover:text-green-600 ">
                                        <HiOutlineDocumentReport className="mt-[0.3rem]" />
                                        <span>Dashboard</span>
                                    </div>
                                </li>
                            </Link>

                            <Link to="/hodPendingTasks">
                                <li className="hover:bg-white rounded-lg p-3">
                                    <div className="flex gap-2 hover:text-green-600 ">
                                        <LuUsers className="mt-[0.3rem]" />
                                        <span>Pending tasks</span>
                                    </div>
                                </li>
                            </Link>

                            <Link to="/hodTenders">
                                <li className="hover:bg-white rounded-lg p-3">
                                    <div className="flex gap-2 hover:text-green-600 ">
                                        <LuUsers className="mt-[0.3rem]" />
                                        <span>Tenders</span>
                                    </div>
                                </li>
                            </Link>

                            <Link to="/hodApplicantList">
                                <li className="hover:bg-white rounded-lg p-3">
                                    <div className="flex gap-2 hover:text-green-600 ">
                                        <LuUsers className="mt-[0.3rem]" />
                                        <span>Applicants List</span>
                                    </div>
                                </li>
                            </Link>

                            <Link to="/hodRequisitionList">
                                <li className="hover:bg-white rounded-lg p-3">
                                    <div className="flex gap-2 hover:text-green-600 ">
                                        <LuUsers className="mt-[0.3rem]" />
                                        <span>Requisition List</span>
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </nav>

                    <div className="mt-auto py-4">
                        <div className="rounded-lg bg-white hover:bg-gray-300 text-center p-2">
                            <Link to="/login" className="text-black">Logout</Link>
                        </div>
                    </div>
                </div>
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

export default HodApplication;
