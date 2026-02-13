import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/261/1600/900')" }}>
        <nav className="absolute top-0 w-full">
          <ul className="flex justify-center space-x-4 p-6">
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">About</a></li>
            <li><a href="#" className="text-white">Services</a></li>
            <li><a href="#" className="text-white">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-6">
        <section className="flex flex-col md:flex-row justify-around space-y-6 md:space-y-0 md:space-x-6">
          <div className="bg-white p-6">
            <h2 className="text-2xl mb-4">About Us</h2>
            <p className="text-gray-600">We are a tech company dedicated to providing innovative solutions to our customers. Our mission is to make technology more accessible and user-friendly.</p>
          </div>
          <div className="bg-white p-6">
            <h2 className="text-2xl mb-4">Our Services</h2>
            <p className="text-gray-600">We offer a wide range of services including software development, web design, and digital marketing. We strive to deliver the best possible solutions for our clients.</p>
          </div>
          <div className="bg-white p-6">
            <h2 className="text-2xl mb-4">Contact Us</h2>
            <p className="text-gray-600">If you have any questions or need help with your technology needs, please don't hesitate to contact us. We're here to help.</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default GeneratedComponent;