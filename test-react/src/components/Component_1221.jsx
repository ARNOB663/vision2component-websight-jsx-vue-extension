import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="bg-transparent flex items-center justify-center py-4">
        <img src="https://static.photos/art/300x300/23.webp" alt="Logo" className="h-16" />
      </header>

      <nav className="bg-black text-white flex justify-center space-x-4 py-2">
        <a href="#" className="px-3 py-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out">Artists</a>
        <a href="#" className="px-3 py-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out">Exhibitions</a>
      </nav>

      <main className="flex flex-col items-center justify-center py-10">
        <h1 className="text-4xl text-center text-black mb-6">Welcome to our Art Gallery</h1>
        <p className="text-lg text-center text-black mb-10">We are a vibrant art gallery dedicated to showcasing the best of contemporary art. Our collection includes a wide range of genres, from abstract to figurative, from traditional to modern. We believe in the power of art to inspire, educate, and connect people.</p>

        {/* Add your image slider here */}
      </main>

      <aside className="flex justify-around py-10">
        <div className="w-1/3 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-center text-black mb-4">Artists</h2>
          {/* Add your artists' bios here */}
        </div>

        <div className="w-1/3 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-center text-black mb-4">Upcoming Exhibitions</h2>
          {/* Add your upcoming exhibitions here */}
        </div>
      </aside>

      <footer className="bg-black text-white flex justify-center py-4">
        <p>© 2022 Art Gallery. All rights reserved.</p>
      </footer>
    </>
  );
};

export default GeneratedComponent;