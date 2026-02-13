<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white text-center">
      <h1 class="text-5xl mt-0 mb-6">Welcome to Our Software Development Company</h1>
      <p class="text-2xl mb-6">We specialize in creating innovative and efficient software solutions for businesses of all sizes.</p>
    </header>

    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Our Software Development Company</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
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

    <main class="container mx-auto px-4 py-6">
      <section class="mb-6">
        <h2 class="text-3xl mb-4">Our Services</h2>
        <p>We offer a wide range of software development services, including web application development, mobile app development, and custom software development.</p>
      </section>

      <section class="mb-6">
        <h2 class="text-3xl mb-4">Our Portfolio</h2>
        <p>Check out our portfolio to see some of our recent projects.</p>
      </section>

      <section class="mb-6">
        <h2 class="text-3xl mb-4">Testimonials</h2>
        <p>Hear what our clients have to say about our work.</p>
      </section>
    </main>

    <footer class="bg-white text-center text-gray-500 p-4">
      <p>© 2022 Our Software Development Company. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// No script setup needed for this basic template
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>