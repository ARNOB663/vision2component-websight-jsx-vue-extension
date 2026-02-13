import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="flex justify-center items-center h-24 bg-red-500 text-white">
        <h1 className="text-3xl">Tech Company</h1>
      </header>

      <nav className="flex justify-center items-center h-12 bg-red-400 text-white">
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="flex mt-4">
        <aside className="w-1/4 p-4 bg-white">
          <h2 className="text-xl mb-2">Contact Us</h2>
          <p>123 Main St</p>
          <p>Anytown, USA</p>
          <p>123-456-7890</p>
          <p>info@techcompany.com</p>

          <h2 className="text-xl mt-4 mb-2">Product Categories</h2>
          <ul>
            <li>Software</li>
            <li>Hardware</li>
            <li>Services</li>
          </ul>
        </aside>

        <main className="w-3/4 p-4 bg-white">
          <section>
            <h2 className="text-xl mb-2">About Us</h2>
            <p>At Tech Company, we are dedicated to providing the best technology solutions for our clients. Our team of experts is committed to delivering high-quality products and services that meet the needs of our clients.</p>
          </section>

          <section className="mt-4">
            <h2 className="text-xl mb-2">Our Services</h2>
            <p>We offer a wide range of services, including software development, hardware repair, and IT consulting. Our team of experts is always ready to help you with your technology needs.</p>
          </section>
        </main>
      </div>

      <footer className="flex justify-center items-center h-12 bg-red-400 text-white mt-4">
        <p>Follow us on social media:</p>
        {/* Add social media icons here */}
      </footer>
    </div>
  );
};

export default GeneratedComponent;