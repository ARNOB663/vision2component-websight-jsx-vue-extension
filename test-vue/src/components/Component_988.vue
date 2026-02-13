<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal h-screen relative overflow-hidden">
    <video autoplay loop muted class="absolute top-0 left-0 w-full h-full object-cover">
      <source src="https://static.photos/art/900x600/190.webp" type="video/mp4">
    </video>
    <div class="container w-full md:max-w-3xl mx-auto pt-20 z-10">
      <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style="font-family: 'Source Sans Pro', sans-serif;">
        <div class="font-sans font-bold break-normal pt-6 pb-2 text-gray-900 px-4 md:px-0">
          <div class="text-4xl">Welcome to our Creative Agency</div>
          <p class="text-2xl pt-4 pb-2">
            We are a dynamic and innovative agency that specializes in creating unique and engaging digital experiences. Our team of experts is passionate about what they do and are committed to delivering the best results for our clients.
          </p>
        </div>
      </div>
    </div>
    <nav class="fixed bottom-0 w-full bg-black opacity-75 flex justify-center items-center text-white text-lg py-4">
      <ul class="flex space-x-4">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here */
</style>