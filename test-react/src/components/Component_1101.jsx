import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover bg-center" style={{ backgroundImage: 'url("https://static.photos/health/1600x900/102.webp")' }}>
      <header className="bg-white text-center p-12">
        <h1 className="text-5xl font-bold mb-4">Health and Wellness</h1>
        <p className="text-xl">
          At our health and wellness center, we believe in the power of nature to heal and nurture. We offer a wide range of services to help you feel your best.
        </p>
      </header>

      <section className="bg-white text-center p-12">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-xl">
          We offer a variety of services to help you feel your best. From personalized nutrition plans to mindful yoga, we've got you covered.
        </p>
      </section>

      <section className="bg-white text-center p-12">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-xl">
          We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form className="w-full max-w-sm mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Message" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default GeneratedComponent;