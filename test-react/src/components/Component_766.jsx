import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-red-500 text-white p-4">
        <h1 className="text-2xl font-bold">Nonprofit Organization</h1>
      </header>

      <main className="flex flex-wrap p-4">
        <section className="w-full md:w-1/2 lg:w-1/3 p-4">
          <h2 className="text-xl font-bold mb-2">Mission Statement</h2>
          <p className="text-gray-700">
            At Nonprofit Organization, we believe in the power of community and strive to make a difference in the world. We are dedicated to providing aid and support to those in need, and we believe that everyone has the potential to make a positive impact.
          </p>
        </section>

        <section className="w-full md:w-1/2 lg:w-1/3 p-4">
          <h2 className="text-xl font-bold mb-2">Featured Stories</h2>
          {/* Add your featured stories here */}
        </section>

        <section className="w-full md:w-1/2 lg:w-1/3 p-4">
          <h2 className="text-xl font-bold mb-2">Volunteer Opportunities</h2>
          {/* Add your volunteer opportunities here */}
        </section>
      </main>

      <footer className="bg-red-500 text-white p-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p className="text-gray-300">
              Learn more about our mission and our team.
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-lg font-bold mb-2">Contact Information</h3>
            <p className="text-gray-300">
              Get in touch with us.
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-lg font-bold mb-2">Privacy Policy</h3>
            <p className="text-gray-300">
              Read our privacy policy.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;