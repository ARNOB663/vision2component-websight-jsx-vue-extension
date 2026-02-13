import React from 'react';

const GeneratedComponent = () => {
  return (
    <div>
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("https://static.photos/travel/1600x900/125.webp")' }}>
        <div className="container mx-auto px-6 md:flex md:items-center md:justify-between py-4">
          <div className="text-center text-white">
            <h1 className="font-bold uppercase text-5xl pt-20 md:pt-0">Travel Agency</h1>
            <h2 className="font-bold text-2xl">Discover the world</h2>
          </div>
        </div>
      </header>

      <nav className="bg-white py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <ul className="flex items-center">
            <li className="mr-6"><a className="text-black hover:text-indigo-800" href="#">Destinations</a></li>
            <li className="mr-6"><a className="text-black hover:text-indigo-800" href="#">Travel Styles</a></li>
            <li className="mr-6"><a className="text-black hover:text-indigo-800" href="#">Tours</a></li>
            <li className="mr-6"><a className="text-black hover:text-indigo-800" href="#">Deals</a></li>
          </ul>
          <div className="flex items-center">
            <input className="border border-gray-300 px-3 py-2 rounded-lg" type="text" placeholder="Search..." />
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        {/* Your content here */}
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          {/* Your footer content here */}
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;