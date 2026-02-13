import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-green-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">E-Learning Platform</h1>
          <div className="flex items-center">
            <input type="text" placeholder="Search..." className="mr-2 p-2 rounded" />
            <button className="bg-white text-green-500 p-2 rounded">Login</button>
            <button className="bg-white text-green-500 p-2 rounded">Sign Up</button>
          </div>
        </div>
      </header>
      <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex">
            <li className="mr-2"><a href="#" className="text-green-500">Home</a></li>
            <li className="mr-2"><a href="#" className="text-green-500">Courses</a></li>
            <li className="mr-2"><a href="#" className="text-green-500">Blog</a></li>
            <li className="mr-2"><a href="#" className="text-green-500">Contact Us</a></li>
          </ul>
          <button className="bg-green-500 text-white p-2 rounded">Start Learning</button>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Welcome to our E-Learning Platform</h2>
        <p className="mb-4">Our platform is designed to provide you with the best learning experience. We offer a wide range of courses in various fields. Whether you are interested in technology, business, art, or anything else, we have a course for you.</p>
        <p className="mb-4">Our courses are designed by industry experts and are delivered in a way that is easy to understand. You can learn at your own pace and from anywhere in the world.</p>
        <p className="mb-4">We also have a blog where you can find articles and resources to help you learn more about the courses you are interested in.</p>
      </main>
      <footer className="bg-green-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex">
            <li className="mr-2"><a href="#" className="text-white">Popular Courses</a></li>
            <li className="mr-2"><a href="#" className="text-white">Blog</a></li>
            <li className="mr-2"><a href="#" className="text-white">Contact Us</a></li>
          </ul>
          <p>© 2022 E-Learning Platform</p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;