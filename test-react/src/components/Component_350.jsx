import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center">
        <img src="https://picsum.photos/seed/350/300/300" alt="School Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-indigo-500 hover:text-indigo-700">English</a></li>
            <li><a href="#" className="text-indigo-500 hover:text-indigo-700">Non-English</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <section className="bg-indigo-500 text-white p-4 mb-4">
          <h1 className="text-2xl mb-2">Welcome to Our Language School</h1>
          <p className="mb-4">We offer a bilingual design with a focus on learning a new language. Our experienced teachers will help you achieve your language goals.</p>
          <button className="bg-white text-indigo-500 px-4 py-2 rounded hover:bg-indigo-700 hover:text-white">Sign Up for Free Trial</button>
        </section>

        <section className="bg-white p-4">
          <h2 className="text-xl mb-2">About Us</h2>
          <p>Our language school is dedicated to providing a fun and effective learning environment for students of all ages. We believe that learning a new language should be a joyful experience, and we strive to make that a reality for every student.</p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;