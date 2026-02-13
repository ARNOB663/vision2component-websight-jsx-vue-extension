import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans leading-normal tracking-normal">
      <header className="bg-gray-500 text-white p-4 text-center">
        <h1 className="text-3xl">Nonprofit Organization</h1>
        <p className="my-4">We are a nonprofit organization dedicated to making a difference in the world.</p>
        <button className="bg-white text-gray-500 px-4 py-2 rounded">Donate Now</button>
      </header>

      <main className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 p-4">
          <img src="https://static.photos/people/900x600/65.webp" alt="People" className="w-full"/>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl mb-4">About Us</h2>
          <p>We are a group of passionate individuals who believe in the power of community and the transformative power of nonprofit organizations.</p>
        </div>
      </main>

      <footer className="bg-gray-500 text-white p-4 text-center">
        <p className="my-4">Follow us on social media:</p>
        <div className="flex justify-center">
          <a href="#" className="text-white mx-2"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;