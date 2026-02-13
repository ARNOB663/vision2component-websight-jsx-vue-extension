import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-red-500 text-white p-4">
        <nav className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">Healthcare Organization</h1>
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

      <main className="p-4">
        <section className="my-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to Healthcare Organization</h2>
          <p className="mb-4">We are a professional and approachable healthcare organization dedicated to providing high-quality healthcare services to our patients. Our mission is to improve the health and well-being of our community through innovative, evidence-based care.</p>
          <video className="w-full h-64 my-4" controls>
            <source src="https://static.photos/health/900x600/115.webp" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
      </main>

      <footer className="bg-red-500 text-white p-4">
        <div className="flex justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Contact Information</h3>
            <p>123 Main St</p>
            <p>Anytown, USA 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@healthcareorg.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Patient Resources</h3>
            <ul>
              <li><a href="#" className="hover:underline">Health Information</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Newsletter</h3>
            <form>
              <input type="email" placeholder="Enter your email" className="p-2 mb-2 w-full" />
              <button type="submit" className="bg-white text-red-500 p-2 w-full">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;