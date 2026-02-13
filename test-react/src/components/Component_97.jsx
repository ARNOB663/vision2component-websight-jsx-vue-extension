import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white text-center">
        <h1 className="text-5xl p-5">Art Gallery</h1>
        <nav className="bg-gray-600">
          <ul className="flex justify-around">
            <li className="p-5"><a href="#" className="text-white">Home</a></li>
            <li className="p-5"><a href="#" className="text-white">About</a></li>
            <li className="p-5"><a href="#" className="text-white">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 p-5">
          <img src="https://picsum.photos/seed/97/900/600" alt="Artwork" className="w-full"/>
        </div>
        {/* Repeat the above div for each artwork */}
      </main>

      <footer className="bg-white text-center text-gray-400 p-5">
        <p>123 Art Gallery Street, City, Country | Phone: (123) 456-7890 | Email: info@artgallery.com</p>
        <div className="flex justify-center">
          <a href="#" className="text-gray-400 p-2"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-gray-400 p-2"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-400 p-2"><i className="fab fa-instagram"></i></a>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;