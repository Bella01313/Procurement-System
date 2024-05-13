

import Kice2 from '../assets/img/about us.jpg'

const About = () => {
  return (
    <>
  
    <div className='bg-gradient-to-b from-white via-gray-100 to-blue-100' >
      <h1 className='heading'>ABOUT US</h1>
      <div>
        <div className='flex flex-row justify-between p-[3rem]'>
          <div className='pl-[4rem] w-[50%] py-[4.5rem] border border-gray-300 rounded-lg'>
          
          <p className='text-green-500 font-extrabold  mb-[3rem] text-3xl'>REACH ON OUR ABOUT US PAGE</p>
          <p>
          A Full Stack Developer specializing in building procurement systems possesses a comprehensive skill set that enables them to handle both the frontend and backend aspects of the application. This individual is proficient in various programming languages such as JavaScript, HTML, CSS, and frameworks like React.js or Angular for frontend development. They also possess expertise in server-side technologies such as Node.js or Django for backend development.
          </p>
          <p>
          In addition to their technical proficiency, a Full Stack Developer for procurement systems should have a deep understanding of procurement processes and workflows. They are familiar with concepts such as strategic sourcing, supplier management, contract management, and purchasing. This knowledge allows them to design and develop solutions that align with the specific requirements and challenges of the procurement domain.
          </p>
       
       
          </div>
          <div className='border border-gray-300 rounded-lg'>
            <img src={Kice2} alt="our image" className='h-[40rem] p-6' />
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default About