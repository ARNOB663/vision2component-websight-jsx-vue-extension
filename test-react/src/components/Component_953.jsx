import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/real-estate/1600x900/154.webp')" }}>
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-white">Real Estate Listings</h1>
          <p className="text-2xl text-white">Find your dream home with us</p>
        </div>
      </header>

      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-2 rounded-lg shadow-lg">
              <div className="px-6 py-6 mb-0 bg-transparent border-0">
                <h2 className="text-2xl font-bold">Search for your dream home</h2>
                <form className="mt-6">
                  <input type="text" placeholder="Search..." className="w-full px-4 py-3 mt-4 text-base leading-6 text-gray-700 transition-colors duration-200 transform bg-white border border-gray-300 rounded placeholder-gray-500 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-100 focus:ring-red-400" />
                  <button type="submit" className="w-full px-4 py-3 mt-4 text-base font-bold text-white transition-all duration-200 transform bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap -mx-2">
          {/* Add your listings here */}
        </div>
      </section>
    </div>
  );
};

export default GeneratedComponent;