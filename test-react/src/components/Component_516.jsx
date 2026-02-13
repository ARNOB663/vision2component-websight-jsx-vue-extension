import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-500 text-white text-center py-16">
        <h1 className="text-4xl">Welcome to Our Education Institution</h1>
        <p className="mt-4 text-xl">We are a leading institution in the field of education.</p>
      </header>

      <main className="container mx-auto p-4 flex flex-col md:flex-row">
        <section className="md:w-1/2 p-4">
          <h2 className="text-2xl mb-4">About Us</h2>
          <p className="text-lg">Our institution is dedicated to providing high-quality education to students from all walks of life. We offer a wide range of degrees and programs, catering to the needs of our students.</p>
        </section>

        <section className="md:w-1/2 p-4">
          <h2 className="text-2xl mb-4">Degrees and Programs</h2>
          <ul className="list-disc pl-4">
            <li><a href="#" className="text-blue-500 hover:text-blue-700">Degree 1</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-700">Degree 2</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-700">Degree 3</a></li>
          </ul>
        </section>
      </main>

      <footer className="bg-blue-500 text-white text-center py-8">
        <h2 className="text-2xl mb-4">Important Dates</h2>
        <p className="text-lg">Event 1: Date</p>
        <p className="text-lg">Event 2: Date</p>

        <h2 className="text-2xl mb-4 mt-8">Quick Links</h2>
        <ul className="list-disc pl-4">
          <li><a href="#" className="text-white hover:text-gray-300">Link 1</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Link 2</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Link 3</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default GeneratedComponent;