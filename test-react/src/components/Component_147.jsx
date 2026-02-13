import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-purple-500 text-white p-4">
        <h1 className="text-4xl">Welcome to Our Financial Services</h1>
        <p className="text-xl">We offer a wide range of financial services to meet your needs.</p>
        <button className="bg-white text-purple-500 p-2 rounded">Open an Account</button>
      </header>
      <div className="flex p-4">
        <div className="w-2/3 p-4">
          <h2 className="text-2xl">Our Services</h2>
          <p>We offer a variety of financial services including but not limited to:</p>
          <ul className="list-disc pl-4">
            <li>Banking</li>
            <li>Investment</li>
            <li>Insurance</li>
            <li>Tax Services</li>
          </ul>
        </div>
        <div className="w-1/3 p-4 bg-gray-200">
          <h2 className="text-2xl">Account Management</h2>
          <p>Manage your account from anywhere with our online tools.</p>
          <h2 className="text-2xl">Educational Resources</h2>
          <p>Learn more about financial services with our educational resources.</p>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;