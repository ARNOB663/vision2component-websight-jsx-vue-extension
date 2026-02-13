import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-purple-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Digital Marketing Firm</h1>
            <p className="text-sm">Your business partner in digital success</p>
          </div>
          <button className="bg-white text-purple-500 px-4 py-2 rounded">Book a Consultation</button>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Case Studies</h2>
          {/* Case studies content here */}
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          {/* Services content here */}
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
          {/* Testimonials content here */}
        </section>
      </main>

      <footer className="bg-purple-500 text-white p-4">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div>
              <p>Contact: info@digitalmarketingfirm.com</p>
              <p>Privacy Policy</p>
            </div>
            <div>
              <p>Social Media Links</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;