import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="antialiased bg-gray-200">
      <header className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/real-estate/1600x900/145.webp')" }}>
      </header>

      <main className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Real Estate Agency</h1>
        <p className="mb-6">
          At our Real Estate Agency, we are committed to providing our clients with the highest quality of service. We understand that buying or selling a home is a big decision, and we are here to help you every step of the way. Whether you're looking for a luxury home, a starter home, or a vacation home, we have the perfect property for you.
        </p>

        <div className="overflow-y-auto h-64 mb-6">
          {/* Scrolling list of properties goes here */}
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <img src="https://static.photos/real-estate/300x300/146.webp" alt="Logo" className="inline-block mb-2" />
        <p>
          123 Main St<br />
          Anytown, USA 12345<br />
          Phone: (123) 456-7890<br />
          Email: info@realestateagency.com
        </p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;