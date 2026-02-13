import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="flex justify-between items-center p-4 bg-white">
        <img src="https://static.photos/fitness/300x300/83.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Membership</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="p-4">
        {/* Hero section */}
        <section className="mb-8">
          <img src="https://static.photos/fitness/900x600/84.webp" alt="Hero Image" className="w-full h-64 object-cover" />
        </section>

        {/* Services section */}
        <section className="mb-8">
          <h2 className="text-2xl mb-4">Our Services</h2>
          {/* Add your services here */}
        </section>

        {/* Membership section */}
        <section className="mb-8">
          <h2 className="text-2xl mb-4">Membership Plans</h2>
          {/* Add your membership plans here */}
        </section>

        {/* Sign up section */}
        <section>
          <h2 className="text-2xl mb-4">Sign Up for a Free Trial</h2>
          {/* Add your sign up form here */}
        </section>
      </main>

      <footer className="p-4 bg-white">
        {/* Footer content */}
        {/* Add your class schedule, testimonials, and contact form here */}
      </footer>
    </div>
  );
};

export default GeneratedComponent;