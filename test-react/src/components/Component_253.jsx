import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-blue-100">
      <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <h1 className="text-2xl font-bold">Education Institute</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#programs" className="hover:underline">Programs</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </nav>
      </div>

      <div id="about" className="p-4">
        <h2 className="text-xl font-bold mb-2">About Us</h2>
        <p className="text-gray-700">
          At Education Institute, we are committed to providing the best education to our students. Our experienced and dedicated staff are here to help you succeed in your studies. We offer a wide range of programs, from elementary education to advanced degrees. Our modern facilities and state-of-the-art technology ensure that our students have the best possible learning experience.
        </p>
      </div>

      <div id="programs" className="p-4">
        <h2 className="text-xl font-bold mb-2">Programs</h2>
        <p className="text-gray-700">
          We offer a variety of programs to meet your needs. Our elementary education program is designed to prepare your child for kindergarten. Our middle school program is designed to prepare your child for high school. Our advanced degrees program is designed to prepare you for a career in the field of your choice.
        </p>
      </div>

      <div id="contact" className="p-4">
        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
        <p className="text-gray-700">
          Phone: 123-456-7890<br />
          Email: info@educationinstitute.com<br />
          Address: 123 Main St, Anytown, USA
        </p>
      </div>
    </div>
  );
};

export default GeneratedComponent;