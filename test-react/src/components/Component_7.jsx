import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://picsum.photos/seed/7/1600/900')" }}>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center h-full">
          <div className="w-full">
            <img src="https://picsum.photos/seed/7/300/300" alt="Logo" className="mx-auto" />
            <nav className="flex justify-center mt-8">
              <a href="#" className="px-4 py-2 text-white hover:text-gray-300">About</a>
              <a href="#" className="px-4 py-2 text-white hover:text-gray-300">Get Involved</a>
              <a href="#" className="px-4 py-2 text-white hover:text-gray-300">Stories</a>
            </nav>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2">
            <h2 className="text-2xl font-bold mb-4">Recent Projects</h2>
            {/* Add your recent projects here */}
          </div>
          <div className="w-full md:w-1/2 px-2">
            <h2 className="text-2xl font-bold mb-4">Fundraising Events</h2>
            {/* Add your fundraising events here */}
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <h2 className="text-2xl font-bold mb-4">Donate</h2>
              {/* Add your donate options here */}
            </div>
            <div className="w-full md:w-1/2 px-2">
              <h2 className="text-2xl font-bold mb-4">Volunteer</h2>
              {/* Add your volunteer options here */}
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            {/* Add your social media links here */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default GeneratedComponent;