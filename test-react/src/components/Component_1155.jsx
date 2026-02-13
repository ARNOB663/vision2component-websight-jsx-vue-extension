import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Education Platform</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About Us
            </a>
            <a href="#courses" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Courses
            </a>
            <a href="#testimonials" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Testimonials
            </a>
          </div>
        </div>
      </nav>

      <section id="about" className="py-10 px-5">
        <h2 className="text-3xl mb-5">About Us</h2>
        <p className="text-lg">
          At Education Platform, we believe in the power of education to change lives. Our mission is to provide high-quality, accessible education to everyone, everywhere. We offer a wide range of courses in various subjects, from science to language arts, and everything in between. Our experienced and dedicated instructors are committed to helping you reach your full potential. Join us today and start your journey towards a brighter future.
        </p>
      </section>

      <section id="courses" className="py-10 px-5">
        <h2 className="text-3xl mb-5">Courses</h2>
        {/* Course catalog goes here */}
      </section>

      <section id="testimonials" className="py-10 px-5">
        <h2 className="text-3xl mb-5">Testimonials</h2>
        {/* Testimonials slider goes here */}
      </section>
    </div>
  );
};

export default GeneratedComponent;