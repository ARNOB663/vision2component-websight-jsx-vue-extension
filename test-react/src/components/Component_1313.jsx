import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-orange-500 text-white">
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/restaurant/1600x900/114.webp')" }}>
        <div className="flex justify-center items-center h-screen">
          <img src="https://static.photos/restaurant/300x300/115.webp" alt="Logo" className="h-16" />
        </div>
      </div>

      <div className="container mx-auto py-10">
        <h1 className="text-4xl text-center mb-10">Welcome to Our Restaurant</h1>

        <section id="menu" className="mb-10">
          <h2 className="text-2xl mb-5">Menu</h2>
          <p className="mb-5">Our menu features a variety of delicious dishes made with fresh, locally sourced ingredients. We offer a wide range of appetizers, salads, entrees, and desserts.</p>
          {/* Add your menu items here */}
        </section>

        <section id="location" className="mb-10">
          <h2 className="text-2xl mb-5">Location</h2>
          <p className="mb-5">We are conveniently located in the heart of the city. Our address is 123 Main St, Anytown, USA.</p>
          {/* Add your location details here */}
        </section>

        <section id="contact">
          <h2 className="text-2xl mb-5">Contact Us</h2>
          <p className="mb-5">For reservations, please call us at 555-555-5555 or fill out the form below.</p>
          {/* Add your contact form here */}
        </section>
      </div>

      <footer className="bg-red-500 text-white py-5">
        <div className="container mx-auto">
          <h2 className="text-2xl mb-5">Reserve a Table</h2>
          {/* Add your reservation form here */}
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;