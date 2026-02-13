import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="w-full">
        <img src="https://picsum.photos/seed/233/900/600" alt="Automotive Company Header Image" className="w-full" />
      </header>

      <nav className="bg-red-500 text-white p-4">
        <ul className="flex space-x-4 justify-center">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Vehicles</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <section className="py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Featured Vehicles</h2>
        <p className="mb-4">Discover our range of luxury vehicles, each designed to provide you with the ultimate driving experience. From sports cars to luxury SUVs, we have something for every taste and budget.</p>
        <button className="bg-red-500 text-white px-4 py-2">View Vehicles</button>
      </section>

      <section className="py-8 px-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Vehicle Specifications</h2>
            <p>Explore our vehicles and find the one that best suits your needs. Our vehicles come with a range of features, from advanced safety technologies to cutting-edge technology.</p>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Financing Information</h2>
            <p>We offer flexible financing options to make owning our vehicles more affordable. We have competitive interest rates and flexible payment options to fit your budget.</p>
          </div>
        </div>
      </section>

      <footer className="bg-red-500 text-white p-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p>123 Main St<br />Anytown, USA<br />123-456-7890<br />info@automotivecompany.com</p>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Service Appointment</h2>
            <form>
              <input type="text" placeholder="Name" className="w-full p-2 mb-2" />
              <input type="email" placeholder="Email" className="w-full p-2 mb-2" />
              <input type="tel" placeholder="Phone" className="w-full p-2 mb-2" />
              <textarea placeholder="Message" className="w-full p-2 mb-2" />
              <button className="bg-white text-red-500 px-4 py-2">Submit</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;