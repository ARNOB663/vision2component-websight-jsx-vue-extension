import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="antialiased bg-gray-200">
      <header className="bg-white p-4 shadow">
        <nav className="flex justify-between">
          <div>
            <a href="#" className="text-lg font-bold text-gray-800">Restaurant Name</a>
          </div>
          <div>
            <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">Menu</a>
            <a href="#" className="text-white bg-yellow-500 hover:bg-yellow-700 px-4 py-2 rounded">Reserve</a>
          </div>
        </nav>
      </header>

      <main className="flex p-4">
        <aside className="w-1/4 p-4">
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <p className="text-gray-600">
            We are a family-owned restaurant dedicated to providing the best food in the city. Our menu features a variety of dishes made with fresh, locally sourced ingredients.
          </p>
          <h2 className="text-lg font-bold mb-4 mt-8">Events</h2>
          <p className="text-gray-600">
            We host a variety of events throughout the year. Check our events page for more information.
          </p>
          <h2 className="text-lg font-bold mb-4 mt-8">Catering</h2>
          <p className="text-gray-600">
            We offer catering services for all types of events. Contact us for more information.
          </p>
        </aside>

        <section className="w-3/4 p-4">
          <h1 className="text-2xl font-bold mb-4">Welcome to Our Restaurant</h1>
          <img src="https://static.photos/restaurant/900x600/138.webp" alt="Food" className="mb-4"/>
          <p className="text-gray-600">
            Our restaurant is known for its delicious food and warm, friendly service. We are proud to serve the community and look forward to welcoming you soon.
          </p>
        </section>
      </main>

      <footer className="bg-white p-4 shadow">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-bold mb-4">Sign Up for Our Newsletter</h2>
            <form>
              <input type="email" placeholder="Enter your email" className="w-full p-2 mb-4"/>
              <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded">Sign Up</button>
            </form>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">Facebook</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;