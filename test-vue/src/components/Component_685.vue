<template>
  <header class="bg-white text-gray-800">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <span class="title-font font-medium text-xl text-gray-800 mb-4 md:mb-0">
        <a href="#" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="https://static.photos/art/300x300/87.webp" class="w-10 h-10 rounded-full mr-3" alt="Art Gallery Logo">
          <span class="ml-3">Art Gallery</span>
        </a>
      </span>
    </div>
  </header>

  <section class="text-gray-700 body-font">
    <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <img class="lg:w-2/3 md:w-1/2 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://static.photos/art/900x600/88.webp">
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to our Art Gallery</h1>
        <p class="mb-8 leading-relaxed">At our Art Gallery, we specialize in the finest art pieces from around the world. Our collection is a testament to the beauty and diversity of human creativity. We believe that art is a universal language that connects us all, and we are dedicated to sharing it with the world.</p>
      </div>
    </div>
  </section>

  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://static.photos/art/900x600/89.webp" alt="artwork">
            <p class="leading-relaxed mt-4">This is a wonderful piece of art. It captures the beauty of nature in its fullest form.</p>
          </div>
        </div>
        <!-- Repeat the above div for each artwork -->
      </div>
    </div>
  </section>

  <footer class="text-gray-700 body-font">
    <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src="https://static.photos/art/300x300/90.webp" class="w-10 h-10 rounded-full mr-3" alt="Art Gallery Logo">
        <span class="ml-3 text-xl">Art Gallery</span>
      </a>
      <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Art Gallery —
        <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          </svg>
        </a>
      </span>
    </div>
  </footer>
</template>

<script setup>
// Your script logic here if needed
</script>

<style scoped>
/* Your scoped styles here if needed */
</style>