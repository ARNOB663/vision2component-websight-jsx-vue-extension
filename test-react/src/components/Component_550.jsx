import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Music Venue</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#events" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Upcoming Events
            </a>
            <a href="#artists" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Artists
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="my-4 text-5xl font-bold leading-tight">Welcome to Music Venue</h1>
            <p className="leading-normal text-2xl mb-8">
              Experience the best in live music at our venue. We host a wide variety of events, from classical to rock, jazz, and more. Our artists are some of the most talented in the industry, and we guarantee an unforgettable experience every time you visit.
            </p>
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50 mx-auto" src="https://static.photos/fashion/900x600/152.webp" alt="Image" />
          </div>
        </div>
      </div>

      <div id="events" className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="my-4 text-5xl font-bold leading-tight">Upcoming Events</h1>
            <p className="leading-normal text-2xl mb-8">
              Check out our upcoming events. We have a variety of events, from classical concerts to rock shows, jazz nights, and more.
            </p>
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50 mx-auto" src="https://static.photos/fashion/900x600/153.webp" alt="Image" />
          </div>
        </div>
      </div>

      <div id="artists" className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="my-4 text-5xl font-bold leading-tight">Artists</h1>
            <p className="leading-normal text-2xl mb-8">
              Meet our artists. We have a wide variety of artists, from classical to rock, jazz, and more.
            </p>
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50 mx-auto" src="https://static.photos/fashion/900x600/154.webp" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;