import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 font-sans leading-normal tracking-normal">
      <div className="w-full md:w-1/3 bg-white p-5">
        <img src="https://static.photos/health/300x300/54.webp" alt="Logo" className="w-full" />
        <nav className="mt-5">
          <ul>
            <li className="mb-2"><a href="#" className="text-pink-500 hover:text-pink-700">Home</a></li>
            <li className="mb-2"><a href="#" className="text-pink-500 hover:text-pink-700">Services</a></li>
            <li className="mb-2"><a href="#" className="text-pink-500 hover:text-pink-700">Testimonials</a></li>
          </ul>
        </nav>
      </div>
      <div className="w-full md:w-2/3 bg-gray-200 p-5">
        <h1 className="text-3xl mb-5">Welcome to our Healthcare Provider</h1>
        <p className="mb-5">We are a compassionate healthcare provider dedicated to providing high-quality services and treatments to our patients. Our team of experienced professionals is committed to ensuring that every patient receives the best care possible.</p>
        <h2 className="text-2xl mb-5">Our Services</h2>
        <p className="mb-5">We offer a wide range of services including physical therapy, occupational therapy, speech therapy, and more. Our services are designed to meet the unique needs of each patient.</p>
        <h2 className="text-2xl mb-5">Testimonials</h2>
        <p className="mb-5">Here are some testimonials from our patients:</p>
        {/* Add testimonials here */}
      </div>
    </div>
  );
};

export default GeneratedComponent;