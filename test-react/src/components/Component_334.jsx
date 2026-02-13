import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white text-center py-10">
        <img src="https://picsum.photos/seed/334/300/300" alt="Construction Logo" className="w-1/2 mx-auto" />
      </header>
      <nav className="bg-purple-500 text-white text-center py-5">
        <a href="#services" className="px-4">Services</a>
        <a href="#projects" className="px-4">Projects</a>
        <a href="#about" className="px-4">About</a>
      </nav>
      <main className="container mx-auto px-4 py-10">
        <section id="services" className="mb-10">
          <h2 className="text-2xl mb-5">Our Services</h2>
          <p className="mb-5">We offer a wide range of construction services including residential, commercial, and industrial projects. Our team of experienced professionals is dedicated to delivering high-quality work and ensuring your project is completed on time and within budget.</p>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Request a Quote</button>
        </section>
        <section id="projects" className="mb-10">
          <h2 className="text-2xl mb-5">Our Projects</h2>
          <p className="mb-5">We have completed numerous projects across the country. From new construction to renovations and extensions, our team has the expertise to handle any project. Check out our portfolio to see some of our recent work.</p>
        </section>
        <section id="about">
          <h2 className="text-2xl mb-5">About Us</h2>
          <p className="mb-5">Founded in 2005, we have grown to become one of the leading construction companies in the country. Our mission is to build a better world by creating beautiful, functional spaces that enhance the quality of life for our clients and their communities.</p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;