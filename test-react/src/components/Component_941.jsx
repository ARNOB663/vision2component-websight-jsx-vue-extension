import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <img src="https://static.photos/education/300x300/143.webp" alt="Logo" className="h-10" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Courses</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <section className="my-8">
          <h1 className="text-3xl font-bold mb-4">Welcome to Our Educational Institution</h1>
          <p className="text-gray-600 leading-relaxed">
            At our educational institution, we are committed to providing a high-quality education that is both intellectually stimulating and engaging. Our experienced and dedicated faculty members are dedicated to making learning fun and enjoyable for our students. We offer a wide range of courses in various subjects, catering to the diverse learning styles and interests of our students. Our state-of-the-art facilities and modern teaching methods ensure that our students receive the best possible education. We believe in creating a learning environment that is not just about academic excellence, but also about developing the skills and knowledge needed for a successful future.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Our Courses</h2>
          {/* Add your course details here */}
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          {/* Add your contact details here */}
        </section>
      </main>

      <footer className="bg-white p-4 shadow-inner">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; 2022 Educational Institution. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;