import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import pc1 from '../assets/img/tender.jpg';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

const TendersPage = () => {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);
    const [tenders, setTenders] = useState([]);
    const [currentPageNumber, setCurrentPageNumber] = useState(0);
    const tendersPerPage = 4;

    useEffect(() => {
        const fetchTenders = async () => {
            try {
                const response = await axios.get('https://procurement-backend-red.onrender.com/tenders');
                setTenders(response.data);
            } catch (error) {
                console.error("There was an error fetching the tenders!", error);
            }
        };

        fetchTenders();
    }, []);

    const handlePageChange = ({ selected }) => {
        setCurrentPageNumber(selected);
    };

    const tendersVisited = currentPageNumber * tendersPerPage;
    const pageCount = Math.ceil(tenders.length / tendersPerPage);

    const displayTenders = tenders.slice(tendersVisited, tendersVisited + tendersPerPage);

    return (
        <div className="container mx-auto lg:my-[13rem] my-4 p-4">
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1 lg:ml-20">
                    <div className="flex flex-col-reverse gap-2">
                        {displayTenders.map((tender) => (
                            <div className="flex flex-col lg:flex-row" key={tender.id}>
                                <div className='border-2 rounded-lg w-full lg:w-[50rem] h-[18rem] lg:h-[12rem]'>
                                    <img src={tender.image} alt="Tender" className='lg:w-[5rem] my-[3rem] w-[8rem] rounded-full h-auto' />
                                    <div className='p-3'>
                                        <p className='font-bold text-green-600 text-xl hover:text-green-700 ml-[12rem]  lg:-my-[6rem] my-[2rem]'>{tender.title}</p>
                                        <p className='font-bold lg:ml-[12rem]'>{tender.location}</p>
                                        <p className='font-bold ml-[12rem]'>Published on {formattedDate} | Deadline {new Date(tender.deadline).toLocaleDateString()}</p>
                                        <p className='font-bold ml-[12rem]'>{tender.qualification}</p>
                                        <Link to="/applicationForm">
                                            <button className='border-2 rounded-lg bg-green-600 hover:opacity-75 p-1 text-white ml-[12rem] mb-4'>Apply Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={handlePageChange}
                        containerClassName={"pagination"}
                        previousLinkClassName={"previousBttn bg-green-600 hover:opacity-75 rounded-lg p-2"}
                        nextLinkClassName={"nextBttn bg-green-600 hover:opacity-75 rounded-lg p-2"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive px-1 rounded-lg bg-blue-300"}
                        className='flex gap-5 ml-[3rem] mt-3 p-2 rounded-lg bg:gray-100'
                    />
                </div>
                <div className='lg:w-2/5 flex flex-col gap-8 lg:mt-0'>
                    <img src={pc1} alt="Tender" className='w-full h-screen' />
                </div>
            </div>
        </div>
    )
}

export default TendersPage;
