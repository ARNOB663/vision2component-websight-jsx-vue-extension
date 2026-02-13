import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 shadow">
        <h1 className="text-3xl font-bold">Architecture Firm</h1>
      </header>

      <main className="container mx-auto p-4">
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
            We are a leading architectural firm specializing in creating unique and innovative designs. Our team of experienced architects and designers work closely with our clients to understand their needs and translate them into stunning architectural designs. We believe in the power of design to transform spaces and create a sense of comfort and well-being.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <p className="text-lg">
            We offer a wide range of services including interior design, exterior design, landscape design, and more. Our designs are not just beautiful, but also functional and sustainable. We work closely with our clients to ensure that their needs are met and exceeded.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Our Portfolio</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Add your images here */}
          </div>
        </section>
      </main>

      <footer className="bg-white p-4 shadow text-center">
        <p className="text-lg">© 2022 Architecture Firm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;