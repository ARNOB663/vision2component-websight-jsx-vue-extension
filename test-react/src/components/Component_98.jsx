import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white">
        <div className="container mx-auto flex flex-col px-5 py-5 md:flex-row">
          <div className="flex items-center">
            <img src="https://picsum.photos/seed/98/300/300" alt="Company Logo" className="h-10 w-10" />
            <span className="ml-2 text-xl font-bold uppercase text-gray-800">Construction Company</span>
          </div>
          <nav className="flex-col flex-grow pt-5 md:flex md:flex-row md:items-center md:justify-end md:pt-0">
            <a href="#" className="mt-2 block md:inline-block md:mt-0 md:ml-2 text-gray-600 hover:text-indigo-600">Home</a>
            <a href="#" className="mt-2 block md:inline-block md:mt-0 md:ml-2 text-gray-600 hover:text-indigo-600">About</a>
            <a href="#" className="mt-2 block md:inline-block md:mt-0 md:ml-2 text-gray-600 hover:text-indigo-600">Services</a>
            <a href="#" className="mt-2 block md:inline-block md:mt-0 md:ml-2 text-gray-600 hover:text-indigo-600">Projects</a>
            <a href="#" className="mt-2 block md:inline-block md:mt-0 md:ml-2 text-gray-600 hover:text-indigo-600">Contact</a>
          </nav>
          <button className="mt-5 inline-block px-4 py-2 text-sm leading-none text-white bg-indigo-500 border rounded border-indigo-600 hover:border-transparent hover:text-indigo-500 hover:bg-white">Get a Quote</button>
        </div>
      </header>
      <main>
        {/* Your sections go here */}
      </main>
      <footer className="bg-white">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row">
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Contact Information</p>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Email: info@constructioncompany.com</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Phone: +1 (123) 456-7890</a>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Social Media</p>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;