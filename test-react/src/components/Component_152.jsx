import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Logo</span>
        </div>
        <div>
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Donate</a>
        </div>
      </nav>

      <section className="bg-gray-200 py-20 px-4">
        <div className="max-w-xl mx-auto text-center">
          <img src="https://picsum.photos/seed/152/900/600" alt="Non-Profit Image" className="mb-4" />
          <h1 className="text-3xl mb-4">Our Mission</h1>
          <p className="text-lg">
            At our non-profit organization, we strive to make a difference in the world. We believe in the power of compassion and kindness, and we use our resources to help those in need. Join us in our mission to create a better world.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl mb-4 text-center">Testimonials</h2>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <div className="bg-white p-4 rounded">
                <p className="text-lg">
                  "I was touched by the kindness and compassion of this organization. They truly make a difference in the world."
                </p>
                <p className="text-right mt-4">- John Doe</p>
              </div>
            </div>
            {/* Add more testimonials as needed */}
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-20 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl mb-4">Volunteer Opportunities</h2>
          <p className="text-lg">
            We are always looking for volunteers to help us in our mission. Whether you're a professional in a particular field or just a passionate individual, there's a place for you here.
          </p>
          {/* Add more opportunities as needed */}
        </div>
      </section>
    </>
  );
};

export default GeneratedComponent;