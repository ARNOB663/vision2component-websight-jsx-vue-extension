<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal h-screen flex flex-col">
    <header class="bg-white shadow-md p-4 flex items-center justify-between">
      <img src="https://static.photos/art/900x600/37.webp" alt="Logo" class="h-10" />
      <nav class="hidden md:flex space-x-4">
        <!-- Menu items will go here -->
      </nav>
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Contact Us
      </button>
    </header>
    <main class="flex-1 bg-cover bg-no-repeat bg-center" style="background-image: url('path/to/design-project.jpg');">
      <div class="container w-full md:max-w-3xl mx-auto p-6 text-xl text-gray-800 leading-normal">
        <div class="font-sans font-bold break-normal text-gray-900 pt-6 pb-2 text-2xl md:text-3xl">Design Studio</div>
        <p class="text-sm md:text-base font-normal text-gray-600 my-6">
          At Design Studio, we specialize in creating visually stunning designs that not only look great, but also effectively communicate your message. Our team of experienced designers work closely with you to understand your vision and translate it into a stunning design. Whether you're looking for a logo, a website, or a brand identity, we're here to help.
        </p>
      </div>
    </main>
    <footer class="bg-white shadow-md p-4 text-center">
      <!-- Footer content will go here -->
    </footer>
  </div>
</template>

<script setup>
// Your script logic will go here
</script>

<style scoped>
/* Add any custom styles here */
</style>