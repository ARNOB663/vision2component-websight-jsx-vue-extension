import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-cover bg-center h-96" style={{ backgroundImage: "url('https://static.photos/real-estate/1600x900/120.webp')" }}>
        <nav className="flex justify-end p-4">
          <a href="#home" className="px-4 py-2 text-white">Home</a>
          <a href="#about" className="px-4 py-2 text-white">About</a>
          <a href="#properties" className="px-4 py-2 text-white">Properties</a>
          <a href="#contact" className="px-4 py-2 text-white">Contact Us</a>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <section id="about" className="my-8">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700">
            We are a real estate agency dedicated to providing our clients with the best possible service. We understand that buying or selling a home can be a big decision, which is why we are here to help. We have a team of experienced real estate professionals who are committed to providing you with the information and support you need.
          </p>
        </section>

        {/* Add more sections here */}

      </main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <p className="mb-4">
            Disclaimer: The information provided on this website is for general informational purposes only and does not constitute professional advice. The content of the website is based on the best information available at the time of publishing and we strive to keep the information up to date and correct, but we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
          </p>
          <p>
            Social Media Links: Facebook, Twitter, Instagram
          </p>
          <p>
            Contact: info@realestateagency.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;