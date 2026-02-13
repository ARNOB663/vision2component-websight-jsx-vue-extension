import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Healthcare</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>
      <div className="container mx-auto">
        <section className="bg-white border-b py-8">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2">
              <h1 className="text-5xl font-bold leading-none mt-12">Healthcare</h1>
              <p className="leading-normal mt-6">
                At Healthcare, we are committed to providing the highest quality healthcare services to our patients. Our team of experienced healthcare professionals is dedicated to providing personalized care and ensuring that every patient receives the best possible treatment. We believe in a holistic approach to health, which means that we treat not just the symptoms, but also the underlying causes.
              </p>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8">
                Schedule an Appointment
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <img src="https://picsum.photos/900/600?image=105" alt="Healthcare" className="w-full"/>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GeneratedComponent;