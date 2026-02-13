import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="block h-8 w-auto" src="https://static.photos/education/900x600/79.webp" alt="Workflow" />
              </div>
              <nav className="ml-6 flex items-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Courses</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Faculty</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Welcome to Our Education Institute</h2>
            <p className="mt-4 text-lg text-gray-500">
              At our education institute, we believe in the power of education to transform lives and create opportunities for growth and success. Our mission is to provide high-quality, accessible education to all, regardless of background or circumstances. We offer a wide range of courses in various subjects, taught by experienced and dedicated faculty. Join us today and start your journey towards a brighter future.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Courses</h2>
            {/* Add your course details here */}
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Faculty</h2>
            {/* Add your faculty details here */}
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Student Testimonials</h2>
            {/* Add your testimonials here */}
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 py-8 md:flex md:items-center md:justify-between">
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">&copy; 2022 Education Institute. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;