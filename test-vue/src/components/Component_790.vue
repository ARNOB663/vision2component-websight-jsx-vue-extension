<template>
  <div class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" :style="{ backgroundImage: 'url(https://static.photos/travel/1600x900/191.webp)' }">
    <div class="container w-full md:w-1/2 xl:w-1/3 px-6 mx-auto">
      <div class="flex flex-col items-center justify-center h-screen">
        <h1 class="text-4xl lg:text-5xl font-bold leading-tight text-center">Welcome to our Travel Agency</h1>
        <p class="text-base lg:text-lg leading-relaxed text-center mt-4">We are a travel agency that specializes in creating unforgettable experiences for our clients. Whether you're looking for a relaxing beach vacation, an adventurous trek, or a cultural immersion, we've got you covered.</p>
        <div class="flex flex-col md:flex-row items-center justify-center mt-6">
          <input class="w-full md:w-1/2 lg:w-2/5 px-4 py-2 mb-4 md:mb-0 md:mr-4 text-base leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search for a trip">
          <button class="w-full md:w-1/2 lg:w-1/5 px-4 py-2 text-base leading-tight text-white bg-gray-500 border-0 rounded focus:outline-none hover:bg-gray-600">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this simple example
</script>