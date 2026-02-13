import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Education Institution</h1>
      <p className="text-lg text-justify mb-8">
        At our institution, we are committed to providing a high-quality education that is both engaging and relevant to the modern world. We believe that education should not just be about learning facts, but also about developing the skills and knowledge that will allow students to succeed in the future. Our programs are designed to be flexible and adaptable to the needs of each individual student. We offer a wide range of courses in various fields, from science and technology to the humanities and social sciences. Our faculty are experts in their fields, and they are committed to providing students with the knowledge and skills they need to succeed.
      </p>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full" src="https://static.photos/education/900x600/167.webp" alt="Campus"/>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Our Campus</h2>
              <p className="text-gray-700">
                Our campus is a vibrant and modern space, designed to provide a stimulating and engaging learning environment. We have state-of-the-art facilities, including a library, computer labs, and a sports complex. Our campus also features a variety of student organizations and clubs, providing students with opportunities to develop their skills and interests.
              </p>
            </div>
          </div>
        </div>
        {/* Repeat the above div for each course or program */}
      </div>
    </div>
  );
};

export default GeneratedComponent;