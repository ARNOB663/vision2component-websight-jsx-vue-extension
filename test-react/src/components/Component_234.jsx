import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-green-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src="https://picsum.photos/seed/234/300/300" alt="Logo" className="h-10" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="py-20 text-center">
        <h1 className="text-4xl mb-4">Welcome to Our Financial Services</h1>
        <p className="text-lg mb-8">We provide top-notch financial services to help you achieve your financial goals.</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Get Started</button>
      </section>

      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl mb-8 text-center">Our Services</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <h3 className="text-2xl mb-4">Service 1</h3>
              <p>We provide a wide range of financial services, including but not limited to, investment advice, tax planning, and retirement planning.</p>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <h3 className="text-2xl mb-4">Service 2</h3>
              <p>Our team of experienced financial advisors is here to help you navigate the complex world of finance.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-green-500 text-white p-4 text-center">
        <p>&copy; 2022 Financial Services. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;