import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('https://picsum.photos/seed/263/1600/900')" }}>
        <div className="text-center p-5 bg-white bg-opacity-75">
          <h1 className="text-5xl">Welcome to Our Food Company</h1>
          <p className="text-lg">We are a family-owned business dedicated to providing the best food in the world. Our recipes are carefully crafted to satisfy your taste buds and our commitment to quality is unmatched.</p>
        </div>
      </header>

      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Food Company</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#featured-recipes" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Featured Recipes
            </a>
            <a href="#testimonials" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Testimonials
            </a>
            <a href="#blog" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Blog
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section id="featured-recipes">
          <h2 className="text-3xl mb-4">Featured Recipes</h2>
          {/* Add your featured recipes here */}
        </section>

        <section id="testimonials" className="mt-8">
          <h2 className="text-3xl mb-4">Customer Testimonials</h2>
          {/* Add your testimonials here */}
        </section>

        <section id="blog" className="mt-8">
          <h2 className="text-3xl mb-4">Blog</h2>
          {/* Add your blog posts here */}
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;