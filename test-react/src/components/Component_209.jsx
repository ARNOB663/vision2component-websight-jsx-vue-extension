import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-900 text-white">
      <header className="bg-gray-800 p-4">
        <nav className="flex justify-between items-center">
          <div>
            <a href="#" className="text-xl font-bold">Tech Company</a>
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:text-yellow-400">Home</a>
            <a href="#" className="hover:text-yellow-400">About</a>
            <a href="#" className="hover:text-yellow-400">Products</a>
            <a href="#" className="hover:text-yellow-400">Contact</a>
          </div>
        </nav>
      </header>

      <main className="py-8">
        <section className="flex flex-col items-center justify-center">
          <img src="https://picsum.photos/seed/209/900/600" alt="Hero Image" className="w-full h-64 object-cover" />
          <h1 className="text-4xl font-bold my-8">Welcome to Tech Company</h1>
          <p className="text-center max-w-lg">
            At Tech Company, we are dedicated to providing the best technology solutions for your needs. Our team of experts is always ready to help you with any questions or problems you may have.
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          <div>
            <p>© 2022 Tech Company. All rights reserved.</p>
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:text-yellow-400">Facebook</a>
            <a href="#" className="hover:text-yellow-400">Twitter</a>
            <a href="#" className="hover:text-yellow-400">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export { GeneratedComponent };