import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Education Institute</h1>
        <p className="text-lg text-justify mb-8">
          At our education institute, we are committed to providing the best education possible. We believe in the power of knowledge and strive to make learning accessible and enjoyable for all. Our experienced and dedicated faculty, combined with our modern facilities, ensure that our students receive the best possible education. We offer a wide range of courses in various subjects, from the basics to the most advanced. Our goal is to prepare our students for a successful future, whether it be in the workplace, in their chosen field, or in their personal life. We believe in the power of education to change lives, and we are dedicated to helping our students reach their full potential.
        </p>
        {/* Carousel */}
        <div className="overflow-hidden rounded-lg shadow-md sm:overflow-visible">
          <div className="flex space-x-6 scroll-snap-type-y snap-mandatory overflow-x-scroll">
            <div className="scroll-snap-align-start w-full min-w-[300px] bg-white p-4 flex items-center justify-center">
              <img src="https://static.photos/education/900x600/61.webp" alt="Testimonial 1" />
            </div>
            <div className="scroll-snap-align-start w-full min-w-[300px] bg-white p-4 flex items-center justify-center">
              <img src="https://static.photos/education/900x600/62.webp" alt="Testimonial 2" />
            </div>
            <div className="scroll-snap-align-start w-full min-w-[300px] bg-white p-4 flex items-center justify-center">
              <img src="https://static.photos/education/900x600/63.webp" alt="Testimonial 3" />
            </div>
          </div>
        </div>

        {/* Search Function */}
        <div className="mt-8">
          <input type="search" placeholder="Search..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* Footer */}
        <footer className="mt-12 bg-white p-4 text-center">
          <a href="#" className="text-blue-500 hover:text-blue-700 mr-4">Privacy Policy</a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mr-4">Terms of Service</a>
          <a href="#" className="text-blue-500 hover:text-blue-700">Contact Us</a>
        </footer>
      </div>
    </div>
  );
};

export default GeneratedComponent;