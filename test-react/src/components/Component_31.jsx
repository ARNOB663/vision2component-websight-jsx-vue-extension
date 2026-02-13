import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-yellow-500 text-white text-center py-16">
        <h1 className="text-4xl">Welcome to Our Law Firm</h1>
        <p className="mt-4">We are a professional and trustworthy law firm with a clear, easy-to-navigate layout.</p>
      </header>

      <main className="max-w-5xl mx-auto py-8">
        <section className="mb-8">
          <h2 className="text-2xl mb-4">Our Practice Areas</h2>
          <p>We offer a wide range of legal services including criminal defense, family law, and business law.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl mb-4">Our Team</h2>
          <p>Our team of experienced and skilled lawyers are dedicated to providing the best possible service to our clients.</p>
        </section>
      </main>

      <footer className="bg-yellow-500 text-white text-center py-8">
        <p>Contact us at: info@ourlawfirm.com</p>
        <p>Subscribe to our newsletter:</p>
        <form>
          <input type="email" placeholder="Enter your email" className="px-4 py-2 mt-2" />
          <button type="submit" className="bg-white text-yellow-500 px-4 py-2 mt-2">Subscribe</button>
        </form>
      </footer>
    </div>
  );
};

export default GeneratedComponent;