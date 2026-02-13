import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-green-100">
      <header className="bg-green-500 text-white p-4 flex justify-between items-center">
        <img src="https://static.photos/business/300x300/184.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex">
            <li className="mr-4">
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li className="mr-4">
              <a href="#" className="hover:underline">About</a>
            </li>
            <li className="mr-4">
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="p-4">
        <img src="https://static.photos/business/900x600/185.webp" alt="Hero Image" className="w-full h-64 object-cover my-4" />
        <h1 className="text-3xl mb-4">Welcome to our Health Food Company</h1>
        <p className="mb-4">We are a company that specializes in providing healthy and delicious food options. Our mission is to promote a healthy lifestyle and to provide a wide variety of healthy food options.</p>
        {/* Add more content here */}
      </main>
      <footer className="bg-green-500 text-white p-4 text-center">
        © 2022 Health Food Company
      </footer>
    </div>
  );
};

export default GeneratedComponent;