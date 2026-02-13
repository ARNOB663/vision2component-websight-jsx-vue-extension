import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('https://picsum.photos/seed/306/1600/900')" }}>
        <div className="text-center">
          <img src="https://picsum.photos/seed/306/300/300" alt="Restaurant Logo" className="mx-auto mb-4" />
          <h1 className="text-4xl text-white">Welcome to Our Restaurant</h1>
          <p className="text-xl text-white mb-4">Experience the best food in town</p>
          <a href="#" className="bg-white text-indigo-500 px-4 py-2 rounded">Make a Reservation</a>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="mb-8">
          <h2 className="text-3xl mb-4">Our Menu</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <img src="https://picsum.photos/seed/306/900/600" alt="Dish 1" className="mb-2" />
              <h3 className="text-xl">Dish 1</h3>
              <p>A delicious appetizer made with locally sourced ingredients.</p>
            </div>
            <div>
              <img src="https://picsum.photos/seed/306/900/600" alt="Dish 2" className="mb-2" />
              <h3 className="text-xl">Dish 2</h3>
              <p>A savory main course that is sure to satisfy.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl mb-4">Testimonials</h2>
          {/* Add testimonials here */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl mb-4">Location</h3>
              <p>123 Main St, City, State</p>
              {/* Add map here */}
            </div>
            <div>
              <h3 className="text-xl mb-4">Links</h3>
              <ul>
                <li><a href="#" className="text-indigo-300">Menu</a></li>
                <li><a href="#" className="text-indigo-300">Reservations</a></li>
                <li><a href="#" className="text-indigo-300">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;