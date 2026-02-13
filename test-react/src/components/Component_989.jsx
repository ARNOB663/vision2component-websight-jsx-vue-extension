import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-200">
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/travel/1600x900/190.webp')" }}>
        <div className="container mx-auto px-6 md:px-12 py-12">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">Welcome to our travel site</h1>
          <p className="text-xl md:text-2xl text-white mb-8">Discover the world with us. We offer a wide range of destinations and tips to make your journey unforgettable.</p>
          <form className="flex flex-col md:flex-row">
            <input type="text" placeholder="Search destinations" className="md:flex-grow mr-0 md:mr-4 mb-4 md:mb-0" />
            <button type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Search</button>
          </form>
        </div>
      </header>
      <section className="container mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Destinations</h2>
            <p className="mb-4">Explore our wide range of destinations. From exotic beaches to bustling cities, we have something for everyone.</p>
            {/* Add your destinations here */}
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Tips and Tours</h2>
            <p className="mb-4">Get the most out of your travel with our tips and tours. We have everything from budget-friendly to luxury trips.</p>
            {/* Add your tips and tours here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneratedComponent;