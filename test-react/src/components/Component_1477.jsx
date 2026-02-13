import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white text-center p-4">
        <img src="https://static.photos/art/300x300/79.webp" alt="Art Gallery Logo" className="w-16 h-16 mx-auto" />
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li><a href="#exhibitions" className="text-purple-500 hover:text-purple-700">Exhibitions</a></li>
            <li><a href="#artists" className="text-purple-500 hover:text-purple-700">Artists</a></li>
            <li><a href="#contact" className="text-purple-500 hover:text-purple-700">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <section id="exhibitions" className="mt-8">
          <h2 className="text-2xl mb-4">Exhibitions</h2>
          <p className="text-lg">Discover our forthcoming exhibitions.</p>
        </section>

        <section id="artists" className="mt-8">
          <h2 className="text-2xl mb-4">Artists</h2>
          <p className="text-lg">Meet our talented artists.</p>
        </section>

        <section id="contact" className="mt-8">
          <h2 className="text-2xl mb-4">Contact</h2>
          <p className="text-lg">Get in touch with us.</p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;