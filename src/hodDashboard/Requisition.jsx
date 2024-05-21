

const Requisition = () => {
    return (
        <div className="border-4 rounded-lg border-green-600 flex  items-center w-[42rem] my-[10rem] ml-[20rem] h-[23rem]">
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
                <button type="submit" className="border-2  font-bold  p-2 bg-green-600 hover:opacity-75 w-[40rem] text-xl ml-2">Requisition</button>
            </div>

        </div>
    )
}

export default Requisition