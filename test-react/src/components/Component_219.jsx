import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/219/1600/900')" }}>
        <nav className="absolute top-0 w-full">
          <ul className="flex justify-center space-x-4 pt-6">
            <li><a href="#showcase" className="text-white">Showcase</a></li>
            <li><a href="#about" className="text-white">About Us</a></li>
            <li><a href="#services" className="text-white">Services</a></li>
          </ul>
        </nav>
      </header>

      <section id="showcase" className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl mb-4">Welcome to our Tech Company</h1>
        <p className="text-center mb-8">We are a leading provider of cutting-edge technology solutions. Our team of experts is dedicated to delivering the best possible service to our clients.</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
      </section>

      <section id="about" className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl mb-4">About Us</h1>
        <p className="text-center mb-8">Our company was founded in 2005 with the goal of revolutionizing the tech industry. We have a track record of success and are proud of our reputation for excellence.</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
      </section>

      <section id="services" className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl mb-4">Our Services</h1>
        <p className="text-center mb-8">We offer a wide range of services including software development, IT consulting, and cybersecurity. We are committed to providing our clients with the best possible service.</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
      </section>
    </div>
  );
};

export { GeneratedComponent };