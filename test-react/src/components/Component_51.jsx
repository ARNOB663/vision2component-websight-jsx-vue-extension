import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="flex justify-end p-4 bg-white">
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#past-exhibitions">Past Exhibitions</a></li>
            <li><a href="#artists-bios">Artists' Bios</a></li>
            <li><a href="#shop">Shop</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <section id="past-exhibitions">
          <h2>Past Exhibitions</h2>
          {/* Add your content here */}
        </section>

        <section id="artists-bios">
          <h2>Artists' Bios</h2>
          {/* Add your content here */}
        </section>

        <section id="shop">
          <h2>Shop</h2>
          {/* Add your content here */}
        </section>
      </main>

      <footer className="p-4 bg-white">
        <div className="flex justify-center">
          <img src="https://picsum.photos/seed/51/300/300" alt="Art Gallery Logo" />
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;