import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="bg-white text-gray-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Real Estate Agency</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#properties" className="mr-5 hover:text-gray-900">Properties</a>
            <a href="#about" className="mr-5 hover:text-gray-900">About</a>
            <a href="#contact" className="mr-5 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>
      <section className="py-20">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <div className="w-full mb-6 lg:mb-0">
            <img src="https://static.photos/real-estate/900x600/155.webp" alt="Real Estate" />
          </div>
        </div>
      </section>
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            About Us
          </h2>
          <div className="w-full mb-4">
            <p className="leading-loose text-lg text-gray-800 text-center px-4">
              At Real Estate Agency, we are committed to providing our clients with the best possible service. We understand that buying or selling a home is a big decision, and we are here to help you every step of the way. We have a team of experienced real estate professionals who are dedicated to providing you with the information and support you need. Whether you are looking for a new home, selling your current home, or investing in real estate, we are here to help.
            </p>
          </div>
        </div>
      </section>
      <footer className="bg-white">
        <div className="container mx-auto px-8">
          <p className="text-gray-800 text-center p-5 m-0">
            © 2022 Real Estate Agency. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default GeneratedComponent;