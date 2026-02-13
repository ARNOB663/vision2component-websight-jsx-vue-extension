import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="flex justify-center items-center h-64 bg-white">
        <img src="https://static.photos/business/300x300/179.webp" alt="Logo" className="h-16" />
      </header>

      <nav className="flex justify-center items-center h-16 bg-gray-800 text-white">
        <ul className="flex space-x-4">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <section className="flex flex-col items-center justify-center h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/business/1600x900/178.webp')" }}>
        <h1 className="text-4xl text-white">Welcome to Our Tech Company</h1>
        <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded">Learn More</button>
      </section>

      <section className="flex justify-around my-8">
        <div className="w-1/3 p-4 text-center">
          <img src="https://static.photos/business/900x600/180.webp" alt="Icon 1" className="mx-auto" />
          <h2 className="text-2xl my-2">Our Services</h2>
          <p>We provide top-notch services in the tech industry. Our team of experts is dedicated to providing the best solutions for your needs.</p>
        </div>

        <div className="w-1/3 p-4 text-center">
          <img src="https://static.photos/business/900x600/181.webp" alt="Icon 2" className="mx-auto" />
          <h2 className="text-2xl my-2">Our Innovation</h2>
          <p>We are always pushing the boundaries of what's possible in the tech industry. We are always innovating and creating new solutions.</p>
        </div>

        <div className="w-1/3 p-4 text-center">
          <img src="https://static.photos/business/900x600/182.webp" alt="Icon 3" className="mx-auto" />
          <h2 className="text-2xl my-2">Our Team</h2>
          <p>Our team is made up of experienced professionals who are passionate about what they do. We are committed to delivering the best results.</p>
        </div>
      </section>
    </div>
  );
};

export default GeneratedComponent;