import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="sticky top-0 bg-white shadow-md">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold">Marketing Agency</h1>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            <img src="https://picsum.photos/seed/59/900/600" alt="Team Image" className="w-full" />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <p className="text-lg">
              At our marketing agency, we specialize in creating unique and effective marketing strategies that help our clients reach their business goals. Our team of experienced marketers and creatives are dedicated to understanding your business, your target audience, and your unique challenges. We use a variety of marketing tools and techniques to help you achieve your marketing goals. Whether you're looking to increase brand awareness, drive website traffic, or generate leads, we have the expertise to help.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <p className="text-center">
            © 2022 Marketing Agency. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;