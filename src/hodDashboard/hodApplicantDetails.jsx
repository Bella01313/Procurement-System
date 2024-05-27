
import { useLocation, useNavigate } from 'react-router-dom';

const ApplicantDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { applicant } = location.state || {};

    if (!applicant) {
        return <p className="text-center mt-4">No applicant details available</p>;
    }

    return (
        <div className="p-4">
            <h1 className="text-green-600 font-bold text-2xl text-center mt-6 underline">Applicant Details</h1>
            <div className="mt-4">
                <p><strong>Name:</strong> {applicant.fullName}</p>
                <p><strong>Email:</strong> {applicant.email}</p>
                {/* Add more details here as needed */}
            </div>
            <div className="flex justify-center mt-4">
                <button
                    className="px-4 py-2 bg-gray-500 text-white rounded"
                    onClick={() => navigate(-1)}
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default ApplicantDetails;
