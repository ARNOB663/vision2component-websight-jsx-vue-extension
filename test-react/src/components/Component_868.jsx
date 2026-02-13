import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-900 text-white">
      <header className="bg-gray-800 p-4">
        <h1 className="text-2xl font-bold">Architecture Firm</h1>
      </header>
      <main className="flex flex-col md:flex-row">
        <section className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
            At our architecture firm, we are committed to creating spaces that are not just beautiful, but also functional and sustainable. Our team of experienced architects and designers work closely with our clients to understand their needs and translate them into beautiful, innovative designs.
          </p>
          <h3 className="text-lg font-bold mb-2">Our Services</h3>
          <ul className="list-disc ml-4 mb-4">
            <li>Residential Design</li>
            <li>Commercial Design</li>
            <li>Interior Design</li>
            <li>Landscape Design</li>
          </ul>
          <h3 className="text-lg font-bold mb-2">Our Team</h3>
          <p>
            Our team is made up of highly skilled and experienced professionals who are passionate about creating spaces that are not just beautiful, but also functional and sustainable.
          </p>
        </section>
        <section className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-bold mb-4">Our Work</h2>
          <div className="flex flex-wrap">
            <img src="https://static.photos/architecture/900x600/70.webp" alt="Architecture Project" className="w-full md:w-1/2 p-2" />
            <img src="https://static.photos/architecture/900x600/71.webp" alt="Architecture Project" className="w-full md:w-1/2 p-2" />
            <img src="https://static.photos/architecture/900x600/72.webp" alt="Architecture Project" className="w-full md:w-1/2 p-2" />
            <img src="https://static.photos/architecture/900x600/73.webp" alt="Architecture Project" className="w-full md:w-1/2 p-2" />
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 p-4 text-center">
        <p>© 2022 Architecture Firm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;