<template>
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
  <div class="container mx-auto">
    <section class="bg-white border-b py-8">
      <div class="flex flex-wrap">
        <div class="w-full mb-6 lg:mb-0 lg:w-1/2 px-4">
          <h1 class="text-3xl font-bold mb-4">Welcome to our Architecture Firm</h1>
          <p class="text-gray-600 leading-normal mb-4">
            We are a team of experienced architects dedicated to creating unique and innovative designs. Our passion for design and our commitment to excellence set us apart from the competition. We believe in the power of design to transform spaces and create lasting impressions. Whether you're looking for a new home, a commercial building, or a renovation project, we're here to help.
          </p>
        </div>
        <div class="w-full mb-6 lg:mb-0 lg:w-1/2 px-4">
          <img class="w-full" src="https://static.photos/architecture/900x600/151.webp" alt="Architecture Image">
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No script needed for this simple example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>