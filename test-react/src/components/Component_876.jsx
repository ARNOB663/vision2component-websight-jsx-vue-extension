import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-pink-500 text-white p-4">
        <nav className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Financial Services</h1>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Welcome to our Financial Services</h2>
            <p className="text-lg mb-8">
              At our financial services, we provide a wide range of services to meet your financial needs. Whether you're looking for investment advice, financial planning, or tax services, we're here to help.
            </p>
            <img src="https://static.photos/art/900x600/78.webp" alt="Financial Services" className="w-full h-64 object-cover"/>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            {/* Add your services here */}
          </div>
        </section>
      </main>

      <footer className="bg-pink-500 text-white p-4">
        <div className="container mx-auto px-4">
          <p className="text-center">
            Contact us at: info@financialservices.com | Phone: 123-456-7890
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;