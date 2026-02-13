import React from 'react';

const GeneratedComponent = () => (
  <div className="bg-gray-200">
    <header className="flex items-center justify-between bg-blue-800 text-white p-4">
      <img src="https://picsum.photos/seed/268/300/300" alt="Logo" className="h-10" />
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#case-studies" className="hover:underline">Case Studies</a></li>
          <li><a href="#company-culture" className="hover:underline">Company Culture</a></li>
        </ul>
      </nav>
    </header>

    <main className="max-w-4xl mx-auto p-4">
      <section id="services" className="my-8">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <p className="mb-4">We provide a wide range of consulting services including strategy development, business process optimization, and digital transformation. Our team of experts has the knowledge and experience to help your business succeed.</p>
        <img src="https://picsum.photos/seed/268/900/600" alt="Consulting" className="my-4" />
      </section>

      <section id="case-studies" className="my-8">
        <h2 className="text-2xl font-bold mb-4">Case Studies</h2>
        <p className="mb-4">We have worked with a variety of clients, from startups to large corporations. Our case studies provide insights into how we have helped our clients achieve their goals.</p>
        <img src="https://picsum.photos/seed/268/900/600" alt="Case Study" className="my-4" />
      </section>

      <section id="company-culture" className="my-8">
        <h2 className="text-2xl font-bold mb-4">Company Culture</h2>
        <p className="mb-4">At our consulting firm, we value a diverse and inclusive workplace. We believe that our success is directly tied to our team's success. We strive to create a positive and supportive environment where everyone can thrive.</p>
        <img src="https://picsum.photos/seed/268/900/600" alt="Company Culture" className="my-4" />
      </section>
    </main>
  </div>
);

export default GeneratedComponent;