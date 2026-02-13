import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" style={{ backgroundImage: "url('https://static.photos/architecture/1600x900/79.webp')" }}>
      <header className="bg-white text-center p-4">
        <img src="https://static.photos/architecture/300x300/80.webp" alt="Logo" className="inline-block h-10 w-10 rounded-full mr-2" />
        <h1 className="text-5xl font-bold">Construction Company</h1>
        <nav className="mt-4">
          <a href="#" className="text-green-500 hover:text-green-700 mr-4">Home</a>
          <a href="#" className="text-green-500 hover:text-green-700 mr-4">About</a>
          <a href="#" className="text-green-500 hover:text-green-700 mr-4">Services</a>
          <a href="#" className="text-green-500 hover:text-green-700">Contact</a>
        </nav>
      </header>

      <section className="bg-white text-center p-4">
        <img src="https://static.photos/architecture/900x600/81.webp" alt="Hero Image" className="w-full h-64 object-cover" />
      </section>

      <section className="bg-white text-center p-4">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-200 p-4">Service 1</div>
          <div className="bg-gray-200 p-4">Service 2</div>
          <div className="bg-gray-200 p-4">Service 3</div>
        </div>
      </section>

      <section className="bg-white text-center p-4">
        <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-200 p-4">Project 1</div>
          <div className="bg-gray-200 p-4">Project 2</div>
          <div className="bg-gray-200 p-4">Project 3</div>
        </div>
      </section>

      <footer className="bg-white text-center p-4">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@constructioncompany.com</p>
        <p>Address: 123 Main St, Anytown, USA</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;