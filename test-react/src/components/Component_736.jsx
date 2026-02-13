import React from 'react';

const MasonryItem = ({ imageSrc, title, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
    <img src={imageSrc} alt={title} className="w-full h-56 object-cover" />
    <div className="px-4 py-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const BlogSidebar = () => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <h2 className="text-xl font-bold mb-4">Latest Posts</h2>
    <MasonryItem 
      imageSrc="https://static.photos/art/300x300/138.webp" 
      title="Blog Post Title" 
      description="This is a brief description of the blog post."
    />
    <MasonryItem 
      imageSrc="https://static.photos/art/300x300/138.webp" 
      title="Another Blog Post Title" 
      description="This is another brief description of the blog post."
    />
  </div>
);

const GeneratedComponent = () => {
  return (
    <>
      <header className="bg-white p-4 flex justify-between items-center">
        <img src="https://static.photos/art/300x300/138.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Your masonry layout goes here */}
        <MasonryItem 
          imageSrc="https://static.photos/art/300x300/138.webp" 
          title="Blog Post Title" 
          description="This is a brief description of the blog post."
        />
        <MasonryItem 
          imageSrc="https://static.photos/art/300x300/138.webp" 
          title="Another Blog Post Title" 
          description="This is another brief description of the blog post."
        />
        {/* Add more MasonryItems as needed */}
      </main>

      <aside className="w-1/4 p-4">
        <BlogSidebar />
      </aside>

      <footer className="bg-white p-4 text-center">
        <p className="text-gray-600">© 2022 Creative Agency. All rights reserved.</p>
      </footer>
    </>
  );
};

export default GeneratedComponent;