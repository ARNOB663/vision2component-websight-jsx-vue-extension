import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 font-sans leading-normal tracking-normal">
      <div className="w-full md:w-1/2 p-10">
        <img src="https://static.photos/real-estate/900x600/35.webp" alt="Property Image" className="w-full" />
      </div>
      <div className="w-full md:w-1/2 p-10">
        <h1 className="text-3xl font-bold mb-5">Property Information</h1>
        <p className="mb-5">This is a beautiful property located in the heart of the city. It features a spacious open plan living area, modern kitchen, and a private garden. The property is perfect for those who love to entertain and relax. The property is situated in a quiet neighborhood, with easy access to public transportation and a variety of local shops and restaurants.</p>
        <iframe 
          src="https://static.photos/real-estate/900x600/35.webp"
          width="600" 
          height="450" 
          frameBorder="0" 
          style={{ border: "0" }} 
          allowFullScreen={true} 
          ariaHidden="false" 
          tabIndex="0" 
          className="w-full"
        />
      </div>
    </div>
  );
};

export default GeneratedComponent;