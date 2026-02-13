import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between p-6">
          <div className="flex items-center">
            <img src="https://picsum.photos/seed/151/300/300" alt="Logo" className="h-10 w-10" />
            <span className="ml-4 text-xl">Architecture Firm</span>
          </div>
          <nav>
            <ul className="flex">
              <li className="mr-6"><a href="#" className="text-red-500 hover:text-red-800">Home</a></li>
              <li className="mr-6"><a href="#" className="text-red-500 hover:text-red-800">About</a></li>
              <li className="mr-6"><a href="#" className="text-red-500 hover:text-red-800">Portfolio</a></li>
              <li><a href="#" className="text-red-500 hover:text-red-800">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container mx-auto p-6">
            <img src="https://picsum.photos/seed/151/900/600" alt="Building" className="w-full" />
          </div>
        </section>

        <section className="portfolio">
          <div className="container mx-auto p-6">
            <h2 className="text-2xl mb-4">Portfolio</h2>
            <div className="grid grid-cols-3 gap-4">
              {/* Portfolio items go here */}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-6">
        <p>&copy; 2022 Architecture Firm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;