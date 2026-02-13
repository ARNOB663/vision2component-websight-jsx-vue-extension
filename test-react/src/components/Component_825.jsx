import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="container w-full md:w-4/5 xl:w-3/5 h-screen px-5 py-24 mx-auto flex flex-col bg-cover" style={{ backgroundImage: "url('https://static.photos/nature/1600x900/26.webp')" }}>
      <header className="text-center">
        <h1 className="text-5xl">Welcome to Our Financial Services</h1>
        <p className="text-2xl">We provide the best financial services in the industry.</p>
      </header>
      <main className="flex flex-col flex-grow md:flex-row">
        <aside className="w-full md:w-1/4 p-5">
          <h2 className="text-2xl">Quick Links</h2>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </aside>
        <section className="w-full md:w-3/4 p-5">
          <h2 className="text-2xl">Our Services</h2>
          <p>We offer a wide range of financial services including but not limited to:</p>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>
      </main>
      <footer className="text-center">
        <p>&copy; 2022 Our Financial Services</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;