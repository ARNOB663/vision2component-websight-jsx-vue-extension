import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="https://picsum.photos/seed/164/300/300" alt="Restaurant Logo" />
            <span className="ml-3 text-xl">Restaurant Name</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#reservation" className="mr-5 hover:text-gray-900">Reservation</a>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <div className="container mx-auto px-5 py-24">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://picsum.photos/seed/164/900/600" alt="Dish" />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Dish Name</h1>
                  <p className="leading-relaxed mb-3">Real and long sentences about the dish.</p>
                </div>
              </div>
            </div>
            {/* Repeat the above div for each dish */}
          </div>
        </div>
      </main>
      <footer className="bg-white">
        <div className="container mx-auto px-5 py-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <a className="text-gray-500 hover:text-gray-900" href="https://www.facebook.com">Facebook</a>
              <a className="text-gray-500 hover:text-gray-900" href="https://www.twitter.com">Twitter</a>
              <a className="text-gray-500 hover:text-gray-900" href="https://www.instagram.com">Instagram</a>
            </div>
            <div>
              <p className="text-gray-500">© 2022 Restaurant Name. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export { GeneratedComponent };