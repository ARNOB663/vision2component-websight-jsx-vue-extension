<template>
  <header class="bg-white">
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Tech Company</span>
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
  </header>

  <section class="py-20 bg-cover bg-center" :style="{ backgroundImage: 'url(\'https://picsum.photos/seed/228/1600/900\')' }">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold mb-2 text-white">
        Welcome to Tech Company
      </h2>
      <h3 class="text-2xl mb-8 text-gray-200">
        We are a leading provider of cutting-edge technology solutions.
      </h3>
      <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
        Learn More
      </button>
    </div>
  </section>

  <section class="container mx-auto px-6 pt-10 pb-24">
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 p-6">
        <h3 class="text-3xl text-gray-800 font-bold mb-5">
          Our Products
        </h3>
        <p class="text-gray-600 mb-8">
          We offer a wide range of high-quality products designed to meet your specific needs. From consumer electronics to industrial automation, we have something for everyone.
        </p>
      </div>
      <div class="w-full md:w-1/2 p-6">
        <h3 class="text-3xl text-gray-800 font-bold mb-5">
          Testimonials
        </h3>
        <p class="text-gray-600 mb-8">
          We are proud of our reputation for providing top-notch products and excellent customer service. Here's what our customers have to say about us.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for this example
</script>