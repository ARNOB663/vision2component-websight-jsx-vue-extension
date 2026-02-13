import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://picsum.photos/1600/900')" }}>
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-end">
            <li className="px-3"><a href="#" className="text-white">Home</a></li>
            <li className="px-3"><a href="#" className="text-white">Services</a></li>
            <li className="px-3"><a href="#" className="text-white">Projects</a></li>
            <li className="px-3"><a href="#" className="text-white">About Us</a></li>
            <li className="px-3"><a href="#" className="text-white">Contact</a></li>
          </ul>
        </nav>
        <div className="container mx-auto px-6 flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="my-4 text-5xl font-bold leading-tight text-white">Welcome to our construction company</h1>
            <p className="leading-normal text-white text-2xl mb-8">We are a leading construction company in the industry, offering a wide range of services to meet your needs. Our team of experienced professionals is dedicated to delivering high-quality, safe, and efficient construction projects.</p>
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50 mx-auto" src="https://picsum.photos/900/600" alt="Image"/>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white text-center rounded-t rounded-b-none overflow-hidden">
              <p className="w-full py-6 flex-grow">Service 1</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white text-center rounded-t rounded-b-none overflow-hidden">
              <p className="w-full py-6 flex-grow">Testimonial 1</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white text-center rounded-t rounded-b-none overflow-hidden">
              <p className="w-full py-6 flex-grow">Team Member 1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-10">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap mx-3 mb-6">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-2">Contact Us</h2>
          </div>
          <div className="flex flex-wrap mx-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Name"/>
          </div>
          <div className="flex flex-wrap mx-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="email" placeholder="Email"/>
          </div>
          <div className="flex flex-wrap mx-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Message
            </label>
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Message"></textarea>
          </div>
          <div className="md:flex md:items-center">
            <button className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Submit
            </button>
          </div>
        </form>
      </div>
      <footer className="bg-white">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6">
              <a className="text-green-500 no-underline hover:underline text-right md:text-left" href="#">Safety Certifications</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GeneratedComponent;