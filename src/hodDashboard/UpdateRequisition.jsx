import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const UpdateRequisition = () => {

    const handleClose = () => {
        navigate('/hodRequisitionList');
    };

  return (
    <div className="max-w-[42rem] mx-auto bg-white rounded-md border-4 my-[10rem]  border-green-600">
       <h1 className='bg-green-600 font-bold text-3xl p-3 flex justify-end'>
                    <IoMdClose onClick={handleClose} className='text-red-700 font-bold hover:opacity-75 cursor-pointer' />
                </h1>

    <div className=" flex flex-col">
        <table className="w-[40rem] my-2 py-2 ml-3 bg-white  border-4">
            <thead>
                <tr>
                    <th className="py-2   border-b border-r text-2xl ">Name</th>
                    <th className="py-2  border-b text-2xl">Request</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-2 px-4 border-b border-r font-bold">Tittle</td>
                    <td className="py-2 px-4 border-b">
                        <input type="text" placeholder="type the tittle" className="py-2 px-4 border-b font-medium" />
                    </td>
                </tr>
                <tr>
                    <td className="py-2 px-4 border-b border-r font-bold">Quantity</td>
                    <td className="py-2 px-4 border-b">
                        <input type="text" placeholder="type the Quantity" className="py-2 px-4 border-b font-medium" />
                    </td>
                </tr>
                <tr>
                    <td className="py-2 px-4 border-b border-r font-bold">Description</td>
                    <td className="py-2 px-4 border-b">
                        <textarea type="text" placeholder="type the Description" className="py- px-4 border-b font-medium" />
                    </td>
                </tr>
         
            </tbody>

        </table>
        <button type="submit" className="border-2  font-bold mb-2 p-2 bg-green-600 hover:opacity-75 w-[40rem] text-xl ml-2">Update</button>
    </div>

</div>
  )
}

export default UpdateRequisition