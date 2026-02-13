<template>
  <div class="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white shadow">
      <div class="container mx-auto flex justify-between items-center px-6 py-4">
        <div class="flex items-center">
          <button class="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
            <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
    <main class="flex-grow">
      <div class="container mx-auto px-6 py-8">
        <div class="flex flex-col items-center justify-center h-screen">
          <img class="w-full max-w-lg" src="https://static.photos/business/900x600/137.webp" alt="Hero Image">
          <button class="mt-8 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </main>
    <footer class="bg-white">
      <div class="container mx-auto px-6 py-4">
        <p class="text-center text-gray-600">
          At our Tech Company, we are committed to providing our customers with the best possible service. We believe in creating a seamless and enjoyable experience for our users, and we strive to make our products and services as user-friendly as possible. We are constantly innovating and improving our offerings to meet the evolving needs of our customers. Our team of experts is dedicated to delivering the highest quality products and services to our customers. We are proud to be a leading provider of cutting-edge technology solutions.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Your script logic here if needed
</script>

<style scoped>
/* Add any scoped styles here */
</style>