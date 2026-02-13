import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-6 flex justify-between items-center">
        <img src="https://picsum.photos/seed/49/300/300" alt="Event Logo" className="h-16" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="text-gray-600 hover:text-gray-800">About</a></li>
            <li><a href="#services" className="text-gray-600 hover:text-gray-800">Services</a></li>
            <li><a href="#testimonials" className="text-gray-600 hover:text-gray-800">Testimonials</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <section id="about" className="mb-10">
          <h2 className="text-2xl mb-4">About Us</h2>
          <p className="mb-4">We are a team of passionate event planners who believe in creating unforgettable experiences. Our mission is to make your event a success story.</p>
          <img src="https://picsum.photos/seed/49/900/600" alt="Past Event" className="w-full h-64 object-cover my-4" />
        </section>

        <section id="services" className="mb-10">
          <h2 className="text-2xl mb-4">Our Services</h2>
          <p className="mb-4">We offer a wide range of services including wedding planning, corporate events, social events, and more.</p>
        </section>

        <section id="testimonials" className="mb-10">
          <h2 className="text-2xl mb-4">Client Testimonials</h2>
          <p className="mb-4">Here are some testimonials from our happy clients.</p>
        </section>

        <section id="contact" className="mb-10">
          <h2 className="text-2xl mb-4">Contact Us</h2>
          <p className="mb-4">Ready to plan your next event? Contact us today.</p>
        </section>
      </main>

      <footer className="bg-white p-6 text-center">
        <p className="text-gray-600">© 2022 Event Planning Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export { GeneratedComponent };