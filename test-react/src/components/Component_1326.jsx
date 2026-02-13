import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="fixed w-full bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src="https://static.photos/business/300x300/128.webp" alt="Logo" className="h-10" />
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
          <div className="w-64">
            <input type="text" placeholder="Search..." className="w-full p-2 border rounded" />
          </div>
        </div>
      </header>

      <main className="container mx-auto pt-24 pb-8">
        <img src="https://static.photos/business/900x600/129.webp" alt="Hero Image" className="w-full" />

        <section className="py-8 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-2xl mb-4">About Us</h2>
            <p>Your long and detailed text about the company goes here.</p>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto">
            <h2 className="text-2xl mb-4">Our Services</h2>
            <p>Your long and detailed text about the services goes here.</p>
          </div>
        </section>

        <section className="py-8 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-2xl mb-4">Contact Us</h2>
            <p>Your long and detailed text about the contact information goes here.</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default GeneratedComponent;