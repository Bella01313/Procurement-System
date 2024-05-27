import Logo from '../assets/img/services.jpg';

const Service = () => {
  return (
    <>
      <div className='font-jost'>
        <div className='flex flex-col bg-gradient-to-b from-white via-blue-90 to-blue-100 w-full h-full'>
          <h1 className='text-green-600 font-bold mt-[9rem] text-center text-2xl md:text-4xl'>WHAT ACTUALLY DOES</h1>
          <h1 className='text-green-800 font-bold text-2xl text-center  animate-pulse transition duration-500 ease-in-out'>........................................</h1>
          <div className='flex justify-center'>
            <img src={Logo} alt="image" className='py-8 px-8 md:px-32 lg:px-48 p-4 object-cover w-full md:w-auto' />
          </div>
          <div>
            <section className="">
              <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                  <h2 className="text-2xl font-bold sm:text-3xl">----------ADVERTISING BLOSSOM----------</h2>
                  <p className="mt-4 text-center text-2xl text-gray-700">
                    Choose what you need to do here below
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { title: "Vendor Management", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium." },
                    { title: "Purchase Requisition", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium." },
                    { title: "Supplier Quotation and Selection", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium." },
                    { title: "Purchase Order Management", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium." },
                    { title: "Contact Management", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium." },
                    { title: "Digital campaigns", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium." }
                  ].map((service, index) => (
                    <a
                      key={index}
                      className="block rounded-xl border-2 border-green-600 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                      <h2 className="mt-4 text-xl font-bold">{service.title}</h2>
                      <p className="mt-1 text-sm text-gray-700">{service.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
