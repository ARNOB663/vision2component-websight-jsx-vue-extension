import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-green-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src="https://picsum.photos/seed/376/300/300" alt="Bank Logo" />
          <div>
            <button className="bg-white text-green-500 px-4 py-2 mr-2">Login</button>
            <button className="bg-white text-green-500 px-4 py-2">Sign Up</button>
          </div>
        </div>
      </header>

      <nav className="bg-green-200 text-white p-4">
        <div className="container mx-auto">
          <ul className="flex justify-around">
            <li><a href="#accounts">Accounts</a></li>
            <li><a href="#loans">Loans</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto p-4">
        <section id="accounts">
          <h2 className="text-2xl mb-4">Accounts</h2>
          <p>At our bank, we offer a wide range of accounts to meet your financial needs. Whether you're a student, a business owner, or just looking for a simple savings account, we have the right account for you.</p>
        </section>

        <section id="loans">
          <h2 className="text-2xl mb-4">Loans</h2>
          <p>We offer a variety of loans to help you achieve your financial goals. Whether you're looking for a personal loan for a home purchase, a business loan for your growing business, or a car loan for your dream car, we have the right loan for you.</p>
        </section>

        <section id="services">
          <h2 className="text-2xl mb-4">Services</h2>
          <p>Our bank offers a variety of services to make your banking experience as smooth as possible. From online banking to mobile banking, we have the right service for you. Plus, our friendly customer service team is always here to help you with any questions or concerns you may have.</p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;