import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-cover bg-center h-64" style={{ backgroundImage: "url('https://static.photos/travel/1600x900/77.webp')" }}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src="https://static.photos/travel/300x300/78.webp" alt="Logo" className="w-10 h-10" />
            <span className="ml-3 text-xl">Travel Agency</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 hover:text-white">Home</a>
            <a href="/destinations" className="mr-5 hover:text-white">Destinations</a>
            <a href="/booking" className="mr-5 hover:text-white">Booking</a>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <section className="container mx-auto px-5 py-24">
          <h1 className="text-3xl mb-4">Welcome to our Travel Agency</h1>
          <p className="mb-8">We are a professional travel agency that offers a wide range of services to meet your travel needs. Whether you're looking for a relaxing beach vacation, an adventurous trek, or a cultural experience, we've got you covered.</p>
          {/* Add your highlighted travel destinations and booking forms here */}
        </section>
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2022 Travel Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;