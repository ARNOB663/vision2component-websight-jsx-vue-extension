import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-gray-500 text-white p-4">
        <h1 className="text-2xl font-bold">Sports Team</h1>
      </header>

      <nav className="bg-gray-300 p-4">
        <ul className="flex space-x-4">
          <li><a href="#schedule" className="text-white">Game Schedules</a></li>
          <li><a href="#profiles" className="text-white">Player Profiles</a></li>
          <li><a href="#merchandise" className="text-white">Team Merchandise</a></li>
        </ul>
      </nav>

      <main className="p-4">
        <section id="schedule">
          <h2 className="text-xl font-bold">Game Schedules</h2>
          <p>Here you can find the schedule of our upcoming games.</p>
        </section>

        <section id="profiles">
          <h2 className="text-xl font-bold">Player Profiles</h2>
          <p>Meet the players of our team.</p>
        </section>

        <section id="merchandise">
          <h2 className="text-xl font-bold">Team Merchandise</h2>
          <p>Check out our team merchandise.</p>
        </section>
      </main>

      <footer className="bg-gray-500 text-white p-4">
        <p>© 2022 Sports Team. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;