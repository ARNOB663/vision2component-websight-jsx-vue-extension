import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-gray-100 font-sans leading-normal tracking-normal">
      <div className="relative z-10 flex flex-col flex-1 pt-6 pb-6 md:pb-8">
        <header className="flex items-center justify-between flex-wrap bg-white p-6">
          <div className="flex items-center flex-shrink-0 mr-6">
            <span className="font-semibold text-xl tracking-tight">Creative Agency</span>
          </div>
          <div className="block md:hidden">
            <button id="menu-button" className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
          </div>
        </header>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none md:py-6">
          <div className="opacity-75 fixed pin bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://picsum.photos/seed/11/1600/900")' }}>
            <div className="inset-0 bg-black opacity-50 absolute"></div>
            <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
              <div className="w-full lg:w-3/4">
                <h1 className="my-4 text-3xl md:text-5xl text-white leading-tight">
                  We are Creative Agency
                </h1>
                <p className="leading-normal text-white text-2xl md:text-2xl mb-8">
                  We are a creative agency specializing in web design, branding, and digital marketing.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export { GeneratedComponent };