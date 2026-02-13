<template>
  <header class="bg-cover bg-center h-screen flex items-center justify-center" :style="{ backgroundImage: 'url(https://static.photos/business/1600x900/145.webp)' }">
    <div class="text-center px-6">
      <h1 class="text-5xl text-white font-bold mb-4">Welcome to our Travel Agency</h1>
      <p class="text-2xl text-white mb-6">We are a travel agency that offers a wide range of exotic travel locations.</p>
      <div class="flex justify-center">
        <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mb-3" type="text" placeholder="Search for a location">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
          Search
        </button>
      </div>
    </div>
  </header>
  <footer class="bg-gray-800 text-center text-white py-8">
    <img class="h-10 mb-4 inline-block" src="https://static.photos/business/300x300/146.webp" alt="Company Logo">
    <p class="text-xl mb-2">Follow us on social media:</p>
    <div class="flex justify-center">
      <a class="text-blue-400 mx-2" href="#">Facebook</a>
      <a class="text-blue-400 mx-2" href="#">Twitter</a>
      <a class="text-blue-400 mx-2" href="#">Instagram</a>
    </div>
    <p class="text-xl mt-8">Book your next adventure with us today</p>
  </footer>
</template>

<script setup>
// No script needed for this simple example
</script>