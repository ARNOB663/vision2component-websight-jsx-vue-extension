import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <nav className="bg-white p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://static.photos/education/300x300/185.webp" alt="Logo" className="h-10" />
            <h1 className="ml-4 text-2xl font-bold">Education Institution</h1>
          </div>
          <div>
            <a href="#" className="mr-4 text-gray-600 hover:text-gray-800">Home</a>
            <a href="#" className="mr-4 text-gray-600 hover:text-gray-800">About</a>
            <a href="#" className="mr-4 text-gray-600 hover:text-gray-800">Courses</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
          </div>
        </div>
      </nav>

      <div className="flex mt-8">
        <div className="w-1/4 p-6">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2"><a href="#" className="text-purple-600 hover:text-purple-800">Link 1</a></li>
            <li className="mb-2"><a href="#" className="text-purple-600 hover:text-purple-800">Link 2</a></li>
            <li className="mb-2"><a href="#" className="text-purple-600 hover:text-purple-800">Link 3</a></li>
          </ul>
        </div>

        <div className="w-3/4 p-6">
          <h2 className="text-2xl font-bold mb-4">Welcome to Our Education Institution</h2>
          <p className="mb-4">
            At our institution, we are committed to providing a high-quality education that prepares students for success in their chosen fields. Our experienced faculty and state-of-the-art facilities ensure that our students receive the best possible education. We offer a wide range of courses in various disciplines, and our dedicated staff is always available to assist our students in their academic and personal journey.
          </p>
          <img src="https://static.photos/education/900x600/186.webp" alt="Education" className="w-full h-64 object-cover mb-4" />
          <p>
            We believe in the power of education to change lives and help individuals reach their full potential. Our mission is to create a community of lifelong learners who are equipped with the knowledge and skills they need to succeed in their chosen careers. Join us today and discover the transformative power of education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;