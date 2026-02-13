import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-green-500 text-white text-center py-12">
        <h1 className="text-4xl">Educational Institution</h1>
      </header>

      <nav className="bg-white p-4">
        <ul className="flex justify-center space-x-8">
          <li><a href="#" className="text-green-500 hover:text-green-800">Home</a></li>
          <li><a href="#" className="text-green-500 hover:text-green-800">About</a></li>
          <li><a href="#" className="text-green-500 hover:text-green-800">Courses</a></li>
          <li><a href="#" className="text-green-500 hover:text-green-800">Contact</a></li>
        </ul>
      </nav>

      <main className="container mx-auto p-4">
        <div className="flex flex-wrap">
          <section className="w-full md:w-2/3 p-4">
            <h2 className="text-2xl mb-4">About Us</h2>
            <p className="mb-4">
              At Educational Institution, we are committed to providing the best education to our students. Our experienced and dedicated faculty are dedicated to providing a comprehensive education that prepares our students for success in their chosen field.
            </p>
            <p>
              We offer a wide range of courses in various fields, including science, technology, engineering, and mathematics. Our courses are designed to be flexible and accessible to all students, regardless of their background or experience.
            </p>
          </section>

          <aside className="w-full md:w-1/3 p-4 bg-gray-200">
            <h2 className="text-2xl mb-4">Important Links</h2>
            <ul>
              <li><a href="#" className="text-green-500 hover:text-green-800">Link 1</a></li>
              <li><a href="#" className="text-green-500 hover:text-green-800">Link 2</a></li>
              <li><a href="#" className="text-green-500 hover:text-green-800">Link 3</a></li>
            </ul>
          </aside>
        </div>
      </main>

      <footer className="bg-green-500 text-white text-center py-4">
        <p>© 2022 Educational Institution. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;