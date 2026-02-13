import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white text-center">
        <div className="text-gray-800 py-20 px-6">
          <h1 className="text-5xl font-bold mt-0 mb-6">Welcome to our Travel Agency</h1>
          <h3 className="text-3xl font-bold mb-8">Discover the world with us</h3>
          <p className="text-xl mb-6">We offer a wide range of travel packages to suit every taste and budget. From luxury vacations to budget-friendly trips, we have something for everyone.</p>
          <button className="mx-auto mt-6 lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Book Now</button>
        </div>
      </header>
      <main className="container mx-auto">
        {/* Add your main content here */}
      </main>
      <footer className="bg-white">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6">
              <a className="text-gray-800 no-underline hover:underline text-lg font-bold" href="#">About Us</a>
              <p className="text-gray-600">We are a team of travel enthusiasts who are passionate about helping you plan your next adventure.</p>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Social</p>
              <ul>
                <li className="mt-2"><a className="text-lg text-gray-800 hover:underline" href="#">Facebook</a></li>
                <li className="mt-2"><a className="text-lg text-gray-800 hover:underline" href="#">Twitter</a></li>
                <li className="mt-2"><a className="text-lg text-gray-800 hover:underline" href="#">Instagram</a></li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Contact</p>
              <ul>
                <li className="mt-2"><a className="text-lg text-gray-800 hover:underline" href="#">Email</a></li>
                <li className="mt-2"><a className="text-lg text-gray-800 hover:underline" href="#">Phone</a></li>
                <li className="mt-2"><a className="text-lg text-gray-800 hover:underline" href="#">Address</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;