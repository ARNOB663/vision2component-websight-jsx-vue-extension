import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("https://static.photos/art/1600x900/183.webp")' }}>
        <nav className="flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Digital Marketing Agency</span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a href="#testimonials" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Testimonials
              </a>
              <a href="#careers" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Careers
              </a>
            </div>
            <div>
              <a href="#contact" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                Contact Us
              </a>
            </div>
          </div>
        </nav>
      </header>
      <section id="testimonials" className="py-12">
        <h2 className="text-3xl text-center">Testimonials</h2>
        {/* Add your testimonials here */}
      </section>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex flex-wrap px-5">
          <div className="w-full md:w-1/2">
            <h5 className="uppercase mb-6 text-lg">Links</h5>
            <ul className="list-reset mb-6">
              <li className="mt-2"><a href="#blog" className="text-gray-400 hover:text-white">Blog</a></li>
              <li className="mt-2"><a href="#careers" className="text-gray-400 hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <h5 className="uppercase mb-6 text-lg">Social</h5>
            <ul className="list-reset mb-6">
              <li className="mt-2"><a href="#facebook" className="text-gray-400 hover:text-white">Facebook</a></li>
              <li className="mt-2"><a href="#twitter" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li className="mt-2"><a href="#instagram" className="text-gray-400 hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;