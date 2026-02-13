import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-green-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Education Platform</h1>
        <button className="bg-white text-green-500 px-4 py-2 rounded">Get Started</button>
      </header>
      <main className="flex p-4">
        <aside className="w-1/4 bg-white p-4 mr-4">
          <h2 className="text-xl font-bold mb-4">Courses</h2>
          <ul>
            <li className="mb-2">Course 1</li>
            <li className="mb-2">Course 2</li>
            <li className="mb-2">Course 3</li>
          </ul>
        </aside>
        <section className="w-3/4 bg-white p-4">
          <h2 className="text-xl font-bold mb-4">Students Learning</h2>
          <img src="https://static.photos/education/900x600/108.webp" alt="Students Learning" className="w-full"/>
          <p className="mt-4">
            At our education platform, we believe in the power of education to transform lives. Our courses are designed to provide comprehensive knowledge in various fields, from science to technology, from arts to business, and from health to sports. Our instructors are experts in their respective fields, and they are committed to providing a safe and supportive learning environment. We believe that education is a lifelong journey, and we are here to support you every step of the way.
          </p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;