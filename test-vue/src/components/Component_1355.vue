<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Architecture Firm</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Home
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>

    <section class="py-8">
      <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <div class="w-full md:w-1/2 flex flex-col justify-center items-start px-8">
          <h1 class="text-5xl text-gray-900 font-bold leading-tight mt-4 mb-2">Welcome to our Architecture Firm</h1>
          <p class="leading-normal text-2xl mb-8">
            We are a team of experienced architects dedicated to creating unique and innovative designs. Our passion for design and our commitment to excellence set us apart from the competition. We believe in the power of design to transform spaces and create meaningful experiences.
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <img src="https://static.photos/architecture/900x600/157.webp" class="p-12" alt="Architecture Image">
        </div>
      </div>
    </section>

    <footer class="bg-gray-800 text-center text-white py-8">
      <p class="text-xl">Contact us: info@architecturefirm.com</p>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here */
</style>