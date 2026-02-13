<template>
  <div class="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="https://static.photos/people/300x300/96.webp" alt="Logo" class="w-10 h-10">
          <span class="ml-3 text-xl">Charity Organization</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#" class="mr-5 hover:text-gray-900">About</a>
          <a href="#" class="mr-5 hover:text-gray-900">Donate</a>
          <a href="#" class="mr-5 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
    <main class="flex-grow">
      <div class="w-full bg-center bg-cover h-96" style="background-image: url('https://static.photos/people/1600x900/95.webp')">
        <div class="container mx-auto px-5 py-24">
          <h1 class="text-4xl text-center text-gray-800 font-bold mb-4">
            A heartwarming design with a full-width image and a centered logo and navigation menu.
          </h1>
          <p class="text-xl text-center text-gray-800 mb-8">
            A clear call-to-action message and a donation form prominently displayed.
          </p>
          <div class="flex justify-center">
            <button class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </main>
    <footer class="bg-white">
      <div class="container mx-auto px-5 py-6">
        <p class="text-center text-gray-800">
          &copy; 2022 Charity Organization. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>