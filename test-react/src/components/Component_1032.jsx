import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/art/1600x900/33.webp')" }}>
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center">
            <li className="mx-3"><a href="#" className="text-white">Home</a></li>
            <li className="mx-3"><a href="#" className="text-white">Artworks</a></li>
            <li className="mx-3"><a href="#" className="text-white">Exhibitions</a></li>
            <li className="mx-3"><a href="#" className="text-white">About</a></li>
            <li className="mx-3"><a href="#" className="text-white">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-4">
        <h1 className="text-4xl text-center my-8">Welcome to our Art Gallery</h1>
        <p className="text-center">
          We are a premier art gallery dedicated to showcasing the finest works of contemporary and established artists. Our collection spans a wide range of genres, from abstract expressionism to pop art, and everything in between. We believe in the power of art to inspire, uplift, and connect us all.
        </p>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="bg-cover bg-center h-64" style={{ backgroundImage: "url('https://static.photos/art/1600x900/33.webp')" }}></div>
          <div className="bg-cover bg-center h-64" style={{ backgroundImage: "url('https://static.photos/art/1600x900/33.webp')" }}></div>
          <div className="bg-cover bg-center h-64" style={{ backgroundImage: "url('https://static.photos/art/1600x900/33.webp')" }}></div>
          <div className="bg-cover bg-center h-64" style={{ backgroundImage: "url('https://static.photos/art/1600x900/33.webp')" }}></div>
          {/* Add more artworks as needed */}
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p>
          Upcoming Exhibitions:
          Join us for our next exhibition featuring the work of local artist Jane Doe. The exhibition will take place on July 15th at 2pm at our main gallery.
        </p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;