import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/222/1600/900')" }}>
        <nav className="absolute top-0 w-full p-4 text-white bg-black bg-opacity-50">
          <ul className="flex justify-center">
            <li className="mx-2"><a href="#projects">Projects</a></li>
            <li className="mx-2"><a href="#about">About</a></li>
            <li className="mx-2"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Welcome to our Architecture Firm</h1>
            <p className="mt-4 text-xl text-white">We are a dynamic team of architects, designers, and engineers dedicated to creating innovative and sustainable buildings.</p>
            <button className="px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded hover:bg-red-700">Learn More</button>
          </div>
        </div>
      </div>
      <section id="projects" className="p-4">
        <h2 className="text-2xl font-bold">Featured Projects</h2>
        {/* Add your projects here */}
      </section>
      <section id="about" className="p-4">
        <h2 className="text-2xl font-bold">About Us</h2>
        {/* Add your about us information here */}
      </section>
      <section id="contact" className="p-4">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        {/* Add your contact information here */}
      </section>
    </>
  );
};

export { GeneratedComponent };