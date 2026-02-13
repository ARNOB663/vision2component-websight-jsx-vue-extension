import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white text-center">
        <h1 className="text-5xl">Welcome to Our Creative Agency</h1>
        <p className="text-xl">We are a full-service creative agency specializing in branding, web design, and digital marketing.</p>
      </header>

      <section className="py-8 px-4 text-center">
        <h2 className="text-4xl">Our Projects</h2>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-white p-4">
            <img src="https://static.photos/art/900x600/59.webp" alt="Branding Project" />
            <h3 className="text-2xl">Branding Project</h3>
            <p>We create brand identities that resonate with your audience.</p>
          </div>
          <div className="bg-white p-4">
            <img src="https://static.photos/art/900x600/60.webp" alt="Web Design Project" />
            <h3 className="text-2xl">Web Design Project</h3>
            <p>We design and develop websites that are not only beautiful, but also functional and user-friendly.</p>
          </div>
          <div className="bg-white p-4">
            <img src="https://static.photos/art/900x600/61.webp" alt="Digital Marketing Project" />
            <h3 className="text-2xl">Digital Marketing Project</h3>
            <p>We use the latest digital marketing strategies to help your business grow.</p>
          </div>
          <div className="bg-white p-4">
            <img src="https://static.photos/art/900x600/62.webp" alt="Graphic Design Project" />
            <h3 className="text-2xl">Graphic Design Project</h3>
            <p>We create visually stunning designs that will help your brand stand out.</p>
          </div>
        </div>
      </section>

      <section className="bg-green-500 text-white text-center py-8 px-4">
        <h2 className="text-4xl">Ready to Hire Us?</h2>
        <p className="text-xl">We are ready to take on your next project. Contact us today to get started.</p>
        <button className="bg-white text-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">Contact Us</button>
      </section>
    </div>
  );
};

export default GeneratedComponent;