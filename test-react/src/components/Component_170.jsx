import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="relative">
        <img src="https://picsum.photos/seed/170/900/600" alt="Background Image" className="w-full h-screen object-cover" />
        <div className="absolute top-0 right-0 p-4 hidden hover:block">
          <nav>
            {/* Navigation menu goes here */}
          </nav>
        </div>
      </div>

      <section className="py-16">
        <h1 className="text-4xl text-center">Welcome to Our Architecture Firm</h1>
        <p className="text-center mt-4">
          We are a team of experienced architects dedicated to creating unique and innovative designs. Our passion for design and our commitment to quality make us the perfect choice for your next project.
        </p>
      </section>

      <section className="py-16">
        <h2 className="text-3xl text-center">Our Portfolio</h2>
        {/* Portfolio items go here */}
      </section>

      <section className="py-16">
        <h2 className="text-3xl text-center">Our Blog</h2>
        {/* Blog posts go here */}
      </section>
    </div>
  );
};

export default GeneratedComponent;