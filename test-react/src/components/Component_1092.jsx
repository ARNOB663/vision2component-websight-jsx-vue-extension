import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style={{ fontFamily: "'Playfair Display', serif;" }}>
          <p className="text-center">Welcome to our Interior Design Firm, where we believe that every space can be a reflection of your personality. We specialize in transforming your home into a beautiful, functional, and comfortable environment. Our team of experienced designers work closely with you to create a space that is not only beautiful, but also functional and comfortable. We believe in the power of design to bring joy and peace to our clients' lives.</p>
        </div>
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {[94, 95, 96].map((index) => (
            <div key={index} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 w-full lg:w-1/3">
              <img className="rounded-lg" src={`https://static.photos/interior/900x600/${index}.webp`} alt={`Interior Design ${index}`} />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {[97, 98, 99].map((index) => (
            <div key={index} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 w-full lg:w-1/3">
              <img className="rounded-lg" src={`https://static.photos/interior/900x600/${index}.webp`} alt={`Interior Design ${index}`} />
            </div>
          ))}
        </div>
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style={{ fontFamily: "'Playfair Display', serif;" }}>
          <p className="text-center">We are committed to providing our clients with the best service possible. We believe in transparency and honesty, and we strive to build long-term relationships with our clients. We look forward to working with you on your next project.</p>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;