import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/300/1600/900')" }}>
        <div className="flex items-center justify-between p-4">
          <img src="https://picsum.photos/seed/300/300/300" alt="Logo" className="h-16" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white hover:text-gray-200">Home</a></li>
              <li><a href="#" className="text-white hover:text-gray-200">About</a></li>
              <li><a href="#" className="text-white hover:text-gray-200">Services</a></li>
              <li><a href="#" className="text-white hover:text-gray-200">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <section className="my-8">
          <h1 className="text-4xl font-bold">Welcome to our Energy Company</h1>
          <p className="my-4">We are a leading provider of energy solutions, offering a wide range of services to meet your needs. Whether you're looking for solar assessments, energy audits, or any other energy-related services, we're here to help.</p>
          <a href="#" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Get a Quote</a>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <p>© 2022 Energy Company. All rights reserved.</p>
          <p>Follow us on: Twitter | Facebook | Instagram</p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;