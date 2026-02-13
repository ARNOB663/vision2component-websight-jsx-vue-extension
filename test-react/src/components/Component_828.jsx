import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("https://static.photos/travel/1600x900/29.webp")' }}>
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center">
          <img src="https://static.photos/travel/300x300/30.webp" alt="Logo" className="w-16 h-16" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </nav>
        </header>

        <section id="destinations" className="py-8">
          <h2 className="text-2xl font-bold mb-4">Destinations</h2>
          <p>Discover our wide range of exotic destinations. From tropical paradises to lush forests, we have something for everyone.</p>
        </section>

        <section id="packages" className="py-8">
          <h2 className="text-2xl font-bold mb-4">Packages</h2>
          <p>We offer a variety of travel packages to suit your needs. Whether you're looking for a relaxing beach vacation or an action-packed adventure, we have the perfect package for you.</p>
        </section>

        <section id="testimonials" className="py-8">
          <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
          <p>Hear what our satisfied customers have to say about our services. We strive to provide the best travel experience for our clients.</p>
        </section>
      </div>
    </div>
  );
};

export default GeneratedComponent;