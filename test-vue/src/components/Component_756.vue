<template>
  <header class="bg-white text-gray-800">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span class="ml-3 text-xl">Non-Profit Organization</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="#volunteer" class="mr-5 hover:text-gray-900">Volunteer</a>
        <a href="#donate" class="mr-5 hover:text-gray-900">Donate</a>
        <a href="#learn" class="mr-5 hover:text-gray-900">Learn</a>
      </nav>
    </div>
  </header>

  <section class="text-gray-700 p-8">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img class="object-cover object-center rounded" alt="hero" src="https://static.photos/people/900x600/158.webp">
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Empowering Communities Through Non-Profit Work
        </h1>
        <p class="mb-8 leading-relaxed">
          At our Non-Profit Organization, we believe in the power of community and the transformative impact that non-profit work can have. We are committed to using our skills, knowledge, and resources to make a difference in the world.
        </p>
        <div class="flex justify-center">
          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>

  <footer class="text-gray-700 body-font">
    <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <span class="ml-3 text-xl">Non-Profit Organization</span>
      </a>
      <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Non-Profit Organization —
        <a href="https://twitter.com/knyttneve" title="Twitter" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
      </span>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>