<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <div class="flex flex-wrap">
      <div class="w-full bg-blue-500 p-6 text-white">
        <h1 class="text-4xl">Welcome to Our Tech Company</h1>
        <p class="leading-loose text-lg">
          At our tech company, we are dedicated to providing innovative and efficient solutions for all your technological needs. We specialize in a wide range of products and services, from software development to cybersecurity and more. Our team of experts is always ready to help you navigate the complexities of the digital world and find the solutions that best fit your needs.
        </p>
      </div>
      <div class="w-full md:w-1/4 p-6">
        <h2 class="text-2xl">Navigation</h2>
        <ul class="list-reset">
          <li class="py-2"><a href="#" class="text-blue-500 hover:text-blue-700">Home</a></li>
          <li class="py-2"><a href="#" class="text-blue-500 hover:text-blue-700">About</a></li>
          <li class="py-2"><a href="#" class="text-blue-500 hover:text-blue-700">Services</a></li>
          <li class="py-2"><a href="#" class="text-blue-500 hover:text-blue-700">Contact</a></li>
        </ul>
      </div>
      <div class="w-full md:w-3/4 p-6">
        <h2 class="text-2xl">Product Catalog</h2>
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/3 p-3">
            <img src="https://static.photos/business/900x600/70.webp" alt="Software" class="block h-auto w-full">
            <h3 class="text-xl">Software Development</h3>
            <p>We develop custom software solutions to meet your unique needs.</p>
          </div>
          <div class="w-full md:w-1/3 p-3">
            <img src="https://static.photos/business/900x600/71.webp" alt="Cybersecurity" class="block h-auto w-full">
            <h3 class="text-xl">Cybersecurity</h3>
            <p>We offer comprehensive cybersecurity solutions to protect your data.</p>
          </div>
          <div class="w-full md:w-1/3 p-3">
            <img src="https://static.photos/business/900x600/72.webp" alt="Data Management" class="block h-auto w-full">
            <h3 class="text-xl">Data Management</h3>
            <p>We help you manage your data effectively and efficiently.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any additional styles here */
</style>