<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal h-screen relative overflow-hidden">
    <video autoplay loop muted class="absolute top-0 left-0 w-full h-full object-cover">
      <source src="https://static.photos/technology/900x600/165.webp" type="video/mp4">
    </video>
    <nav class="fixed top-0 w-full bg-black bg-opacity-50 flex items-center justify-between px-4 py-2">
      <!-- Navigation links can go here -->
    </nav>
    <div class="container w-full md:max-w-3xl mx-auto pt-20 relative z-10">
      <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style="font-family: 'Merriweather', serif;">
        <div class="font-sans font-bold break-normal pt-6 pb-2 text-gray-900 px-4 md:px-20">
          <h2 class="text-4xl">Welcome to Our Technology Company</h2>
        </div>
        <div class="text-lg px-4 md:px-20">
          <p class="py-6">
            At Our Technology Company, we are dedicated to providing innovative and cutting-edge solutions to meet the needs of our clients. Our team of experts is committed to delivering high-quality products and services that meet the highest standards of excellence. We are passionate about technology and are always looking for new and innovative ways to improve our offerings.
          </p>
        </div>
      </div>
    </div>
    <button class="fixed bottom-10 right-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Get Started
    </button>
  </div>
</template>

<script setup>
// Your script logic can go here
</script>

<style scoped>
/* Add any custom styles here */
</style>