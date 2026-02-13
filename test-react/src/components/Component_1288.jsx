import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-purple-500 text-white p-4 flex justify-between items-center">
        <img src="https://static.photos/architecture/300x300/90.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto my-8 px-4">
        <section id="services" className="mb-8">
          <h2 className="text-2xl mb-4">Our Services</h2>
          <p className="mb-4">We offer a wide range of construction services including design and planning, project management, and construction.</p>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
        </section>

        <section id="projects" className="mb-8">
          <h2 className="text-2xl mb-4">Our Projects</h2>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://static.photos/architecture/900x600/91.webp" alt="Project 1" />
            <img src="https://static.photos/architecture/900x600/92.webp" alt="Project 2" />
            <img src="https://static.photos/architecture/900x600/93.webp" alt="Project 3" />
            <img src="https://static.photos/architecture/900x600/94.webp" alt="Project 4" />
          </div>
        </section>
      </main>

      <footer className="bg-purple-500 text-white p-4 text-center">
        <p>Contact us at info@constructioncompany.com</p>
        <p>Follow us on <a href="#" className="text-white hover:underline">Facebook</a> and <a href="#" className="text-white hover:underline">Twitter</a></p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;