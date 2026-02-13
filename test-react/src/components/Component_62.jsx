import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-green-500">
      <header className="bg-green-500 text-white text-center py-16">
        <h1 className="text-4xl">Welcome to our Travel Agency</h1>
        <p className="mt-4">We are a dynamic layout featuring full-width images of travel destinations, with a scrolling banner displaying testimonials and call-to-action buttons.</p>
      </header>

      <section className="py-16">
        <div className="container mx-auto">
          {/* Full-width images of travel destinations */}
          <img src="https://picsum.photos/seed/62/900/600" alt="Travel Destinations" className="w-full" />
        </div>
      </section>

      <section className="bg-green-500 text-white py-16">
        <div className="container mx-auto">
          {/* Scrolling banner displaying testimonials */}
          <div className="overflow-x-auto whitespace-nowrap">
            {/* Testimonials */}
            <div className="inline-block px-4">
              <p>"I had the best experience with this travel agency. The itinerary was easy to digest and the staff was very friendly and helpful."</p>
              <p className="mt-4">- John Doe</p>
            </div>
            {/* More testimonials */}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          {/* Call-to-action buttons */}
          <a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Book Now</a>
        </div>
      </section>
    </div>
  );
};

export default GeneratedComponent;