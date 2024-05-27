import Kice2 from '../assets/img/about.jpg';

const About = () => {
  return (
    <>
      <div className='font-jost'>
        <div className='bg-gradient-to-b from-white via-blue-90 to-blue-100'>
          <h1 className='text-green-600 font-bold mt-40 text-center text-2xl md:text-4xl'>ABOUT US</h1>
          <h1 className='text-green-800 font-bold text-2xl text-center mt-2 animate-pulse transition duration-500 ease-in-out'>..............</h1>
          <div className='flex flex-col md:flex-row justify-between p-8 md:p-12 lg:p-16'>
            <div className='md:pl-16 w-full md:w-1/2 py-12 md:py-16 border-4 border-green-600 rounded-lg'>
              <p className='text-green-500 px-3 font-extrabold mb-8 text-3xl md:text-5xl'>ABOUT US PAGE</p>
              <p className='text-lg md:text-xl px-3'>
                A Full Stack Developer specializing in building procurement systems possesses a comprehensive skill set that enables them to handle both the frontend and backend aspects of the application. This individual is proficient in various programming languages such as JavaScript, HTML, CSS, and frameworks like React.js or Angular for frontend development. They also possess expertise in server-side technologies such as Node.js or Django for backend development.
              </p>
              <p className='text-lg md:text-xl px-3 mt-4'>
                In addition to their technical proficiency, a Full Stack Developer for procurement systems should have a deep understanding of procurement processes and workflows. They are familiar with concepts such as strategic sourcing, supplier management, contract management, and purchasing. This knowledge allows them to design and develop solutions that align with the specific requirements and challenges of the procurement domain.
              </p>
            </div>
            <div className='border-4 border-green-600 rounded-lg mt-8 md:mt-0  flex justify-center'>
              <img src={Kice2} alt="our image" className='w-[40rem]   p-6 object-cover' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
