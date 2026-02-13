import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/architecture/1600x900/147.webp')" }}>
      </header>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <main className="w-full md:w-3/4 px-4">
            <h1 className="text-4xl font-bold mb-4">About Our Firm</h1>
            <p className="mb-4">
              We are a dynamic and innovative architecture firm, dedicated to creating unique and sustainable designs. Our team of experienced architects, engineers, and designers work closely with our clients to understand their needs and translate them into stunning architectural designs. We believe in the power of design to transform spaces, communities, and cities. Our firm is committed to creating a better world, one building at a time.
            </p>
          </main>
          <aside className="w-full md:w-1/4 px-4">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form className="mb-4">
              <input className="block w-full mb-2" type="text" placeholder="Name" />
              <input className="block w-full mb-2" type="email" placeholder="Email" />
              <textarea className="block w-full mb-2" placeholder="Message" />
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </form>
            <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
            {/* Featured projects go here */}
          </aside>
        </div>
      </div>
    </>
  );
};

export default GeneratedComponent;