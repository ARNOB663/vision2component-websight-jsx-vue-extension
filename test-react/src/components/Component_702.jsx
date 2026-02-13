import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-3">
          <img src="https://static.photos/art/300x300/104.webp" alt="Law Firm Logo" className="h-10" />
          <nav className="flex items-center justify-end">
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-gray-900">Services</a>
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-gray-900">Attorneys</a>
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-3">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Law Firm</h1>
        <p className="mb-4">We are a professional and sleek law firm offering a wide range of legal services. Our team of experienced attorneys are dedicated to providing you with the best possible legal advice and representation.</p>
        {/* Add more content here */}
      </main>

      <footer className="bg-white shadow mt-10 py-6">
        <div className="container mx-auto px-6">
          <p className="mb-4">Contact us:</p>
          <p className="mb-4">Phone: 123-456-7890</p>
          <p className="mb-4">Email: info@ourlawfirm.com</p>
          {/* Add form here */}
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;