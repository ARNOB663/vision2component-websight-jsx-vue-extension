import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="flex items-center justify-between bg-white p-4">
        <img src="https://picsum.photos/seed/186/300/300" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-800 hover:text-red-500">Menu</a></li>
            <li><a href="#" className="text-gray-800 hover:text-red-500">Hours</a></li>
            <li><a href="#" className="text-gray-800 hover:text-red-500">Reservations</a></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <section className="my-8">
          <h1 className="text-3xl font-bold">Welcome to Our Restaurant</h1>
          <p className="my-4">
            At our restaurant, we serve the best food in town. Our menu features a variety of delicious dishes, prepared with the freshest ingredients. Whether you're in the mood for a hearty meal or a light snack, we've got you covered.
          </p>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Make a Reservation
          </button>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;