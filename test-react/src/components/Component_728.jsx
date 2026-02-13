import React, { useState, useEffect } from 'react';

const GeneratedComponent = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to Our Creative Agency</h1>
          <p className="text-xl mt-4">We are a full-service creative agency specializing in branding, web design, and digital marketing.</p>
        </div>
      </header>

      <nav className={`flex justify-center space-x-4 mt-4 ${isNavVisible ? 'block' : 'hidden'}`}>
        <li><a href="#" className="text-lg">Home</a></li>
        <li><a href="#" className="text-lg">About</a></li>
        <li><a href="#" className="text-lg">Services</a></li>
        <li><a href="#" className="text-lg">Contact</a></li>
      </nav>
    </>
  );
};

export default GeneratedComponent;