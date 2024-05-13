
import Logo from '../assets/img/my project logo.jpg'

const Footer = () => {
    return (
        <>
        <div className='bg-green-400  gap-[5rem] h-[30rem] bg-gradient-to-b from-white via-white to-green-100 mt-[2rem] rounded-lg'>
        <div className='bg-green-400 flex  gap-[5rem] h-[30rem] bg-gradient-to-b from-white via-white to-green-100 mt-[2rem] rounded-lg'>
            <div className='w-[25%]'>
                <img src={Logo} alt="logo" className='flex justify-start items-start w-[10rem] ml-[10rem] rounded-lg ' />
                <h1 className='flex justify-start items-start w-[15rem] ml-[10rem] text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem sapiente accusantium ad odio corrupti dolorum maiores sequi minus. Sit labore ut autem blanditiis aut deserunt nam quasi saepe quidem.</h1>
            </div>
            <div  className='flex flex-col gap-4' >
                <h1 className='text-green-500 font-bold text-2xl py-8'>SERVICES</h1>
                <p className='text-gray-600'>Business Consultancy</p>
                <p className='text-gray-600'>Digital Marketing</p>
                <p className='text-gray-600'>Market analysis</p>
                <p className='text-gray-600'>Web Development</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-green-500 font-bold text-2xl py-8'>ABOUT US</h1>
                <p className='text-gray-600'>Overview</p>
                <p className='text-gray-600'>Why Us</p>
                <p className='text-gray-600'> Awards & Recognitions</p>
                <p className='text-gray-600'> Team</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-green-500 font-bold text-2xl py-8'>CONTACT INFO</h1>
                <p className='text-gray-600'>144 tw street,Kigali</p>
                <p className='text-gray-600'>Kacyiru ,1204 africa</p>
                <p className='text-gray-600'> procurementSystem.@gmail.com</p>
                <p className='text-gray-600'> +250847477575757</p>
            </div>
            
        </div>
          
        
         </div>
         </>
    )
}

export default Footer