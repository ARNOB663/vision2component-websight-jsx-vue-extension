import React from 'react';

const BlogArticle = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold mb-2">Blog Title</h3>
    <p className="text-gray-700">This is a brief description of the blog article.</p>
  </div>
);

const ProductCard = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <img src="https://static.photos/health/900x600/61.webp" alt="Product Image" className="w-full h-48 object-cover mb-4" />
    <h3 className="text-xl font-semibold mb-2">Product Name</h3>
    <p className="text-gray-700">This is a brief description of the product.</p>
  </div>
);

const GeneratedComponent = () => (
  <div className="bg-gray-100">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-center font-bold mb-8">Health and Wellness Site</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">Blog Articles and Health Resources</h2>
          <BlogArticle />
          {/* Add more blog articles as needed */}
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">Products and Services</h2>
          <ProductCard />
          {/* Add more product cards as needed */}
        </div>
      </div>
    </div>
  </div>
);

export default GeneratedComponent;