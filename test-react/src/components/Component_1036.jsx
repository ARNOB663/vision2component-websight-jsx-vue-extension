import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-indigo-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://static.photos/art/300x300/38.webp" alt="Bank Logo" className="h-10" />
            <h1 className="ml-4 text-2xl">Banking Institution</h1>
          </div>
          <nav>
            <ul className="flex">
              <li className="mr-4"><a href="#" className="hover:underline">Home</a></li>
              <li className="mr-4"><a href="#" className="hover:underline">About</a></li>
              <li className="mr-4"><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
          <div>
            <input type="text" placeholder="Search..." className="p-2 rounded" />
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <section className="mb-8 bg-white p-4 rounded shadow">
          <h2 className="text-2xl mb-4">About Us</h2>
          <p>At Banking Institution, we are committed to providing our customers with the best possible banking services. Our team of experienced professionals is dedicated to ensuring that your needs are met in a timely and efficient manner. We offer a wide range of banking products and services, including checking and savings accounts, loans, mortgages, and investment options.</p>
        </section>

        <section className="mb-8 bg-white p-4 rounded shadow">
          <h2 className="text-2xl mb-4">Our Services</h2>
          <p>We offer a variety of banking services to meet your needs. Whether you're looking for personal banking, commercial banking, or investment banking, we have the solutions for you. Our services include but are not limited to:</p>
          <ul className="list-disc ml-8">
            <li>Checking and savings accounts</li>
            <li>Loans</li>
            <li>Mortgages</li>
            <li>Investment options</li>
          </ul>
        </section>

        <section className="mb-8 bg-white p-4 rounded shadow">
          <h2 className="text-2xl mb-4">Contact Us</h2>
          <p>If you have any questions or need assistance with our services, please don't hesitate to contact us. Our customer service team is available 24/7 to assist you.</p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;