import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <img src="https://static.photos/real-estate/900x600/14.webp" alt="Header image" className="w-full" />
          <div className="mt-4">
            <input type="text" placeholder="Search for listings" className="w-full px-4 py-2 rounded-lg" />
          </div>
        </header>

        <main className="flex flex-wrap -mx-4">
          <section className="w-full md:w-1/2 px-4 mb-8">
            <h2 className="text-2xl mb-4">Property Listings</h2>
            {/* Property listings go here */}
          </section>

          <section className="w-full md:w-1/2 px-4 mb-8">
            <h2 className="text-2xl mb-4">About Us</h2>
            <p className="mb-4">
              At our Real Estate Agency, we are committed to providing our clients with the highest level of service and expertise. We understand that buying or selling a home is a big decision, and we are here to help you every step of the way. Our team of experienced real estate professionals is dedicated to finding the perfect property for you, whether you're looking for a starter home, a luxury estate, or a vacation home. We work hard to ensure that our clients are completely satisfied with their experience.
            </p>

            <h2 className="text-2xl mb-4">Agent Profiles</h2>
            {/* Agent profiles go here */}

            <h2 className="text-2xl mb-4">Testimonials</h2>
            {/* Testimonials go here */}
          </section>
        </main>
      </div>
    </div>
  );
};

export default GeneratedComponent;