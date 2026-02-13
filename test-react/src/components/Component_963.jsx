import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <nav className="bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="https://static.photos/education/300x300/165.webp" alt="Logo" className="h-10" />
            <div className="ml-4">
              <p className="text-lg font-bold">Education Institution</p>
            </div>
          </div>
          <div>
            {/* Dropdown menu goes here */}
          </div>
        </div>
      </nav>

      <header className="bg-yellow-500 text-white px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Education Institution</h1>
        <p className="text-lg">We are a leading institution in the field of education, offering a wide range of programs for students, faculty, and educational resources.</p>
      </header>

      <main className="px-6 py-12">
        <div className="grid grid-cols-4 gap-4">
          <div>
            {/* Programs column goes here */}
          </div>
          <div>
            {/* News column goes here */}
          </div>
          <div>
            {/* Events column goes here */}
          </div>
          <div>
            {/* Student testimonials column goes here */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GeneratedComponent;