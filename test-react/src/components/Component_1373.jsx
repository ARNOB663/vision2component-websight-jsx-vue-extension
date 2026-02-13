import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <div className="w-full">
        <img src="https://picsum.photos/900/600?image=175" alt="Travel Banner" className="w-full" />
      </div>

      <nav className="bg-green-500 text-white p-4">
        <ul className="flex space-x-4 justify-center">
          <li><a href="#" className="hover:text-green-200">Home</a></li>
          <li><a href="#" className="hover:text-green-200">Destinations</a></li>
          <li><a href="#" className="hover:text-green-200">About Us</a></li>
          <li><a href="#" className="hover:text-green-200">Contact</a></li>
        </ul>
      </nav>

      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to our travel agency</h1>
        <p className="mb-4">
          We are a team of passionate travelers who are dedicated to providing you with the best travel experience. 
          We specialize in creating unforgettable journeys that are both exciting and comfortable. 
          Whether you're looking for a romantic getaway, a family vacation, or a solo adventure, 
          we have the perfect destination for you.
        </p>
        {/* Add more content here */}
      </main>

      <footer className="bg-green-500 text-white p-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-bold mb-2">Contact Us</h2>
              <p>123 Main St<br />Anytown, USA<br />123-456-7890<br />info@travelagency.com</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Map</h2>
              {/* Add map here */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GeneratedComponent;