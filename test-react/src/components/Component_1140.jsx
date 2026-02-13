import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="sticky top-0 bg-white shadow">
        <div className="container mx-auto flex flex-col items-center sm:flex-row sm:justify-between py-4 px-6">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <a href="/" className="text-gray-800 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">Health & Wellness</a>
          </div>
          <div className="flex-grow">
            <nav className="flex flex-col sm:flex-row list-none sm:ml-auto">
              <li className="nav-item"><a href="#services" className="px-2 py-1 flex items-center text-xs uppercase font-bold leading-snug text-gray-800 hover:opacity-75">Services</a></li>
              <li className="nav-item"><a href="#products" className="px-2 py-1 flex items-center text-xs uppercase font-bold leading-snug text-gray-800 hover:opacity-75">Products</a></li>
              <li className="nav-item"><a href="#blog" className="px-2 py-1 flex items-center text-xs uppercase font-bold leading-snug text-gray-800 hover:opacity-75">Blog</a></li>
            </nav>
          </div>
        </div>
      </header>

      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/health/1600x900/141.webp')" }}>
        <div className="container mx-auto px-6 md:px-12 xl:px-48">
          <h1 className="text-4xl text-white font-bold leading-tight mt-12">Welcome to Health & Wellness</h1>
          <p className="text-2xl text-white mt-8">We provide the best services and products for your health and wellness. Our team of experts is dedicated to helping you achieve your goals.</p>
        </div>
      </div>

      <section id="services" className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold">Services</h2>
        {/* Add your services here */}
      </section>

      <section id="products" className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold">Products</h2>
        {/* Add your products here */}
      </section>

      <section id="blog" className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold">Blog</h2>
        {/* Add your blog posts here */}
      </section>
    </>
  );
};

export default GeneratedComponent;