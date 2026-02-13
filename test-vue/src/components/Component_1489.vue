<template>
  <header class="flex items-center justify-between flex-wrap bg-white p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Architecture Firm</span>
    </div>
    <nav class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
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
    </nav>
  </header>
  <main class="container mx-auto px-4 py-8">
    <section class="flex flex-col items-center justify-center text-center">
      <h1 class="text-4xl font-bold mb-4">Welcome to our Architecture Firm</h1>
      <p class="text-lg mb-8">We are a team of experienced architects dedicated to creating unique and functional spaces that reflect the needs and desires of our clients.</p>
      <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
        Schedule a Consultation
      </button>
    </section>
  </main>
</template>

<script setup>
// No script needed for this simple example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>