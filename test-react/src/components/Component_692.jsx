import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Graphic Design Studio</h1>
        <p className="text-lg mt-4">
          We are a team of creative individuals who specialize in graphic design. Our work is characterized by high quality, attention to detail, and a unique style that is both modern and timeless. We strive to create designs that not only look great, but also communicate a message effectively.
        </p>
      </div>
      <div className="mt-8">
        <img src="https://static.photos/art/300x300/94.webp" alt="Logo" className="w-32 h-32" />
      </div>
      <div className="mt-8">
        <a href="#slideshow" className="px-4 py-2 bg-yellow-500 text-white rounded">View Our Work</a>
      </div>
      <div id="slideshow" className="mt-8">
        {/* Your slideshow code here */}
      </div>
    </div>
  );
};

export default GeneratedComponent;