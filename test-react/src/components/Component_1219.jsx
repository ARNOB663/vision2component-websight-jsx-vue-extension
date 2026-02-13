import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-200">
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/cars/1600x900/20.webp')" }}>
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Automotive Repair Shop</span>
          </div>
          <div>
            <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">Contact Us</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-6">
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <p className="text-lg">We offer a wide range of services to meet your car's needs. From routine maintenance to major repairs, we're here to help.</p>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
          <p className="text-lg">Hear what our customers have to say about our services.</p>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                  Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-email">
                  Email
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" type="email" />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;