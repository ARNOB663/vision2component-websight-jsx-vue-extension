import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col min-h-screen antialiased font-sans bg-gray-200">
      <header className="bg-gray-500 text-white p-4">
        <h1 className="text-center text-2xl">Our Educational Institution</h1>
        <p className="text-center text-lg">We are a leading institution in the field of education, providing quality education to all.</p>
      </header>
      <div className="flex flex-col md:flex-row flex-1">
        <nav className="w-full md:w-60 bg-white p-4">
          <h2 className="text-lg">Navigation</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Admissions</a></li>
            <li><a href="#">Events</a></li>
          </ul>
        </nav>
        <main className="flex-1 p-4">
          <h2 className="text-lg">Courses</h2>
          <p>We offer a wide range of courses in various fields. Check out our course catalog for more information.</p>
          <h2 className="text-lg">Admissions</h2>
          <p>Application for admissions is open. Deadlines are announced regularly.</p>
        </main>
        <aside className="w-full md:w-60 bg-white p-4">
          <h2 className="text-lg">Events</h2>
          <p>Check out our upcoming events.</p>
          <h2 className="text-lg">Newsletter</h2>
          <p>Sign up for our newsletter to stay updated.</p>
        </aside>
      </div>
      <footer className="bg-gray-500 text-white p-4">
        <p className="text-center">© 2022 Our Educational Institution. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;