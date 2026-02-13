import React from 'react';

const ProjectItem = ({ title, description, images, learnMoreLink }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative">
      {images.map((image, index) => (
        <img key={index} src={image} alt={title} className="w-full h-56 object-cover" />
      ))}
    </div>
    <div className="px-4 py-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <a href={learnMoreLink} className="block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Learn More</a>
    </div>
  </div>
);

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white">
        <div className="container mx-auto flex justify-between items-center py-4">
          <img src="https://static.photos/architecture/300x300/197.webp" alt="Logo" className="h-10" />
          <nav>
            {/* Navigation links here */}
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl mb-4">Welcome to Our Architecture Firm</h1>
          <p className="mb-6">
            At our architecture firm, we are dedicated to creating unique and innovative designs that reflect the unique needs and aspirations of our clients. Our team of experienced architects and designers work closely with our clients to understand their vision and translate it into a design that is both beautiful and functional. We believe that architecture is more than just a profession - it's a way of life.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* Projects here */}
            <ProjectItem 
              title="Project 1"
              description="Description for Project 1."
              images={['https://static.photos/architecture/300x300/198.webp', 'https://static.photos/architecture/300x300/199.webp']}
              learnMoreLink="/project1"
            />
            <ProjectItem 
              title="Project 2"
              description="Description for Project 2."
              images={['https://static.photos/architecture/300x300/200.webp', 'https://static.photos/architecture/300x300/201.webp']}
              learnMoreLink="/project2"
            />
          </div>
        </div>
      </main>
      <footer className="bg-white">
        <div className="container mx-auto px-4 py-6">
          {/* Footer content here */}
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;