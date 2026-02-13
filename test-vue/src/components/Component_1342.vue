<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal h-screen flex flex-col">
    <div class="pt-24">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 class="my-4 text-5xl font-bold leading-tight">Non-profit Organization</h1>
          <p class="leading-normal text-2xl mb-8">
            We are a non-profit organization dedicated to making a difference in the world. We believe in the power of community and strive to create a better future for all. Join us in our mission to make a difference.
          </p>
          <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Donate Now</button>
        </div>
        <div class="w-full md:w-3/5 py-6 text-center">
          <img class="w-full md:w-4/5 z-50 mx-auto" src="https://static.photos/people/900x600/144.webp" alt="Image">
        </div>
      </div>
    </div>
    <footer class="bg-white">
      <div class="container mx-auto px-8">
        <div class="w-full flex flex-col md:flex-row py-6">
          <div class="flex-1 mb-6">
            <a class="text-gray-800 no-underline hover:underline text-lg font-bold" href="#">Volunteer</a>
            <p class="text-gray-600">We are always looking for volunteers to help us make a difference.</p>
          </div>
          <div class="flex-1 mb-6">
            <a class="text-gray-800 no-underline hover:underline text-lg font-bold" href="#">Newsletter</a>
            <p class="text-gray-600">Sign up for our newsletter to stay updated on our latest news and events.</p>
          </div>
          <div class="flex-1 mb-6">
            <a class="text-gray-800 no-underline hover:underline text-lg font-bold" href="#">Company Details</a>
            <p class="text-gray-600">123 Main St, Anytown, USA</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here */
</style>