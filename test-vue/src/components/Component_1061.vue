<template>
  <div class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover bg-center" :style="{ backgroundImage: 'url(\'https://static.photos/fashion/1600x900/62.webp\')' }">
    <header class="relative">
      <div class="absolute inset-0 bg-black opacity-75"></div>
      <div class="container relative z-10 flex items-center h-screen">
        <div class="flex flex-col items-center justify-center text-center text-white">
          <h1 class="text-5xl font-bold">Welcome to our Fashion Brand</h1>
          <p class="text-xl mt-4">We are a leading fashion brand, offering the latest trends in clothing, shoes, and accessories.</p>
          <div class="mt-8">
            <button class="bg-white text-black px-6 py-3 font-bold">Shop Now</button>
            <button class="bg-transparent text-white border border-white px-6 py-3 font-bold ml-4">Contact Us</button>
          </div>
        </div>
      </div>
    </header>

    <div class="container mx-auto px-4 py-12">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-3/12 px-4">
          <!-- Left sidebar content -->
        </div>
        <div class="w-full lg:w-9/12 px-4">
          <!-- Product grid content -->
        </div>
        <div class="w-full lg:w-3/12 px-4">
          <!-- Right sidebar content -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>