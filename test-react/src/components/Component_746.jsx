import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4">
        <img src="https://static.photos/education/900x600/148.webp" alt="Classroom" className="h-16" />
        <img src="https://static.photos/education/300x300/149.webp" alt="Logo" className="h-16" />
      </header>

      <div className="flex">
        <aside className="w-1/4 bg-white p-4">
          <h2 className="text-lg font-bold mb-4">Courses and Programs</h2>
          <ul>
            <li><a href="#" className="text-blue-500 hover:text-blue-700">Course 1</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-700">Course 2</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-700">Course 3</a></li>
          </ul>
        </aside>

        <main className="w-3/4 p-4">
          <h1 className="text-2xl font-bold mb-4">Welcome to Our Education Provider</h1>
          <p className="mb-4">At our education provider, we believe in the power of education to change lives. We offer a wide range of courses and programs designed to help you reach your full potential. Whether you're looking to learn a new skill, advance in your career, or simply expand your knowledge, we have something for everyone.</p>
          <p>Our experienced and dedicated staff are committed to providing a supportive and inclusive learning environment. We believe in the power of education to transform lives, and we're dedicated to helping you achieve your goals.</p>
        </main>
      </div>

      <footer className="bg-white p-4">
        <h2 className="text-lg font-bold mb-4">Contact Us</h2>
        <p className="mb-4">Phone: 123-456-7890</p>
        <p className="mb-4">Email: info@educationprovider.com</p>

        <h2 className="text-lg font-bold mb-4">Testimonials</h2>
        <p className="mb-4">"I couldn't be happier with my decision to join this education provider. The courses and programs were exactly what I needed to achieve my goals." - John Doe</p>

        <h2 className="text-lg font-bold mb-4">Newsletter Sign-Up</h2>
        <form>
          <input type="email" placeholder="Enter your email" className="border p-2 w-full" />
          <button type="submit" className="bg-blue-500 text-white p-2">Sign Up</button>
        </form>
      </footer>
    </div>
  );
};

export default GeneratedComponent;