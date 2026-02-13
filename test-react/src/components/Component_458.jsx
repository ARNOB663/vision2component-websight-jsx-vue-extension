import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <nav className="flex justify-center items-center h-16 bg-pink-500 text-white">
        <ul className="flex space-x-6">
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="flex justify-center items-center h-64 bg-pink-500 text-white">
        <h1 className="text-4xl">Healthcare Provider</h1>
      </div>

      <div className="flex justify-center items-center h-64 bg-white">
        <div className="flex flex-col space-y-4 w-1/3 p-4">
          <h2 className="text-2xl">Our Services</h2>
          <p>We provide high-quality healthcare services to our patients. Our team of experienced doctors and nurses are dedicated to providing the best care possible.</p>
          <button className="bg-pink-500 text-white p-2 rounded">Learn More</button>
        </div>

        <div className="flex flex-col space-y-4 w-1/3 p-4">
          <h2 className="text-2xl">Patient Testimonials</h2>
          <p>"Healthcare Provider has been a game changer in my life. They have provided me with the best care I could have ever hoped for." - John Doe</p>
          <button className="bg-pink-500 text-white p-2 rounded">Read More</button>
        </div>

        <div className="flex flex-col space-y-4 w-1/3 p-4">
          <h2 className="text-2xl">Call to Action</h2>
          <p>Schedule an appointment today and experience the difference for yourself.</p>
          <button className="bg-pink-500 text-white p-2 rounded">Schedule Now</button>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;