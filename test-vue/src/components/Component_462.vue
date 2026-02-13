<template>
  <header class="bg-white text-gray-800">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span class="ml-3 text-xl">Software Company</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="#about" class="mr-5 hover:text-gray-900">About</a>
        <a href="#services" class="mr-5 hover:text-gray-900">Services</a>
        <a href="#contact" class="mr-5 hover:text-gray-900">Contact</a>
      </nav>
      <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Get Started
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
  <section class="text-gray-700 body-font">
    <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://static.photos/technology/900x600/64.webp">
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Software Company</h1>
        <p class="mb-8 leading-relaxed">At Software Company, we are dedicated to providing top-notch software solutions to our clients. Our team of experienced developers and designers work tirelessly to create innovative and effective software that meets the needs of our clients. We are committed to delivering high-quality software that is not only functional, but also user-friendly and visually appealing.</p>
      </div>
    </div>
  </section>
  <footer class="text-gray-700 body-font">
    <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <span class="ml-3 text-xl">Software Company</span>
      </a>
      <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Software Company —
        <a href="https://twitter.com/knyttneve" title="Contact" class="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">Contact</a>
      </p>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this simple template
</script>