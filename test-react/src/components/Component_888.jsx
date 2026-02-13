import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="w-full">
        <img src="https://picsum.photos/900/600" alt="Header Image" className="w-full" />
      </header>
      <div className="flex flex-wrap">
        <aside className="w-full lg:w-1/4 p-4">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="mb-4">We are a leading architecture firm specializing in creating unique and innovative designs. Our team of experienced architects and designers work closely with our clients to bring their vision to life.</p>
          <h2 className="text-2xl font-bold mb-4 mt-8">Testimonials</h2>
          <p className="mb-4">"Working with this firm was a great experience. They understood our needs and delivered a product that exceeded our expectations." - John Doe</p>
          <h2 className="text-2xl font-bold mb-4 mt-8">Contact Us</h2>
          <p className="mb-4">Phone: 123-456-7890<br />Email: info@architecturefirm.com</p>
        </aside>
        <main className="w-full lg:w-3/4 p-4">
          <h1 className="text-3xl font-bold mb-4">Our Portfolio</h1>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <img src="https://picsum.photos/900/600" alt="Project 1" className="w-full" />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <img src="https://picsum.photos/900/600" alt="Project 2" className="w-full" />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <img src="https://picsum.photos/900/600" alt="Project 3" className="w-full" />
            </div>
            {/* Add more projects as needed */}
          </div>
        </main>
      </div>
    </>
  );
};

export default GeneratedComponent;