import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://static.photos/real-estate/300x300/36.webp" alt="Logo" className="h-10" />
          <nav className="ml-6">
            <a href="#" className="text-gray-600 mr-4">Buy</a>
            <a href="#" className="text-gray-600 mr-4">Rent</a>
            <a href="#" className="text-gray-600">Sell</a>
          </nav>
        </div>
        <div>
          <input type="text" placeholder="Search" className="border rounded p-2" />
          <button className="bg-gray-500 text-white p-2 rounded ml-2">Contact Agent</button>
        </div>
      </header>

      <main className="p-4">
        <h1 className="text-2xl mb-4">Welcome to our Real Estate Agency</h1>
        <p className="mb-4">
          We are a team of experienced real estate professionals dedicated to helping you find your dream home. Whether you're looking for a luxury condo, a cozy cottage, or a spacious villa, we've got you covered.
        </p>
        <p className="mb-4">
          Our agents are passionate about real estate and are committed to providing you with the best possible service. They will work hard to understand your needs and preferences, so you can be confident in the property you choose.
        </p>
        {/* Add your featured properties here */}
      </main>

      <footer className="bg-white p-4 text-center">
        <p>© 2022 Real Estate Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;