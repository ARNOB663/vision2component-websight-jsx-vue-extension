import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 bg-white p-4">
          <h1 className="text-2xl font-bold">Non-Profit Organization</h1>
          <nav className="mt-4">
            <ul>
              <li className="mb-2"><a href="#" className="text-pink-500 hover:text-pink-700">Stories</a></li>
              <li className="mb-2"><a href="#" className="text-pink-500 hover:text-pink-700">Events</a></li>
              <li><a href="#" className="text-pink-500 hover:text-pink-700">Volunteer Opportunities</a></li>
            </ul>
          </nav>
        </div>
        <div className="w-full md:w-3/4 bg-white p-4">
          <img src="https://picsum.photos/seed/201/900/600" alt="Non-Profit Organization" className="w-full h-64 object-cover"/>
          <div className="my-8">
            <h2 className="text-2xl font-bold">Donate Now</h2>
            <p className="my-4">Your donation will help us to continue our mission of providing support to those in need. Every donation, no matter how small, makes a big difference.</p>
            <a href="#" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Donate Now</a>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-bold">Stories</h2>
            <p className="my-4">Read about the impact our organization has made in the lives of those we serve.</p>
            {/* Add your stories here */}
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-bold">Events</h2>
            <p className="my-4">Check out our upcoming events and get involved.</p>
            {/* Add your events here */}
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-bold">Volunteer Opportunities</h2>
            <p className="my-4">We are always looking for volunteers to help us in our mission.</p>
            {/* Add your volunteer opportunities here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;