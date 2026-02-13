import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="relative bg-cover bg-no-repeat bg-center h-[400px]">
        <img src="https://static.photos/education/900x600/71.webp" alt="Campus Image" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="https://static.photos/education/300x300/72.webp" alt="Logo" className="h-16" />
        </div>
      </header>

      <nav className="bg-purple-500 text-white p-4">
        <ul className="flex space-x-4 justify-center">
          <li><a href="#degree-programs">Degree Programs</a></li>
          <li><a href="#admissions">Admissions</a></li>
          <li><a href="#campus-life">Campus Life</a></li>
          <li><a href="#news">News</a></li>
        </ul>
      </nav>

      <main className="max-w-screen-lg mx-auto p-4">
        <section id="degree-programs" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Degree Programs</h2>
          {/* Add your content here */}
        </section>

        <section id="admissions" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Admissions</h2>
          {/* Add your content here */}
        </section>

        <section id="campus-life" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Campus Life</h2>
          {/* Add your content here */}
        </section>

        <section id="news" className="my-8">
          <h2 className="text-2xl font-bold mb-4">News</h2>
          {/* Add your content here */}
        </section>
      </main>

      <footer className="bg-purple-500 text-white p-4">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          {/* Add your contact information here */}
        </div>
      </footer>
    </>
  );
};

export default GeneratedComponent;