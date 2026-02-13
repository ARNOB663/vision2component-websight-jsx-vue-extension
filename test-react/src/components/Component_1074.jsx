import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white text-center">
        <h1 className="text-5xl">Education Center</h1>
        <nav className="flex justify-center">
          <a href="#courses" className="px-3 py-2 text-black">Courses</a>
          <a href="#resources" className="px-3 py-2 text-black">Resources</a>
          <a href="#events" className="px-3 py-2 text-black">Upcoming Events</a>
        </nav>
      </header>

      <main className="flex flex-wrap">
        <section id="courses" className="w-full md:w-1/2 lg:w-1/3 p-4">
          <h2 className="text-3xl">Courses</h2>
          {/* Course content goes here */}
        </section>

        <section id="resources" className="w-full md:w-1/2 lg:w-1/3 p-4">
          <h2 className="text-3xl">Resources</h2>
          {/* Resource content goes here */}
        </section>

        <section id="events" className="w-full md:w-1/2 lg:w-1/3 p-4">
          <h2 className="text-3xl">Upcoming Events</h2>
          {/* Event content goes here */}
        </section>
      </main>

      <footer className="bg-white text-center text-black p-4 absolute bottom-0 w-full">
        <p>© 2022 Education Center. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;