import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="fixed w-full bg-white">
        <nav className="container mx-auto flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">IT Services</span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
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
      </header>
      <section className="relative">
        <img className="w-full" src="https://static.photos/art/900x600/112.webp" alt="IT Services"/>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl text-white">IT Services</h1>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <a href="#contact" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Contact Us
          </a>
        </div>
      </section>
      <section className="container mx-auto flex flex-wrap py-6">
        <div className="w-full md:w-2/3 flex flex-col flex-grow flex-shrink">
          <div className="flex flex-col w-full md:w-2/3 mb-6">
            <h2 className="text-xl font-bold">About Us</h2>
            <p className="leading-normal mt-4">
              At IT Services, we are committed to providing high-quality IT services to our clients. Our team of experienced professionals is dedicated to delivering innovative solutions that meet the unique needs of each business. We understand that every business is unique, which is why we tailor our services to meet your specific requirements. Whether you need help with software development, IT infrastructure, or cloud services, we have the expertise to deliver results.
            </p>
          </div>
          <div className="flex flex-col w-full md:w-2/3 mb-6">
            <h2 className="text-xl font-bold">Our Services</h2>
            <p className="leading-normal mt-4">
              Our services include software development, IT infrastructure, cloud services, cybersecurity, and more. We work with a wide range of technologies and platforms, and we are always exploring new ways to improve our services.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
          <div className="flex flex-col w-full mb-6">
            <h2 className="text-xl font-bold">Testimonials</h2>
            <p className="leading-normal mt-4">
              "IT Services has been a great partner for us. They have helped us with our IT needs and have always delivered on their promises. We highly recommend them."
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GeneratedComponent;