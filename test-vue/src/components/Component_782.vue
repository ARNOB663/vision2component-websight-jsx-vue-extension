<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://static.photos/art/1600x900/183.webp)' }">
      <nav class="flex items-center justify-between flex-wrap p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">Digital Marketing Agency</span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a href="#testimonials" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Testimonials
            </a>
            <a href="#careers" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Careers
            </a>
          </div>
          <div>
            <a href="#contact" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Contact Us</a>
          </div>
        </div>
      </nav>
    </header>
    <section id="testimonials" class="py-12">
      <h2 class="text-3xl text-center">Testimonials</h2>
      <!-- Add your testimonials here -->
    </section>
    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto flex flex-wrap px-5">
        <div class="w-full md:w-1/2">
          <h5 class="uppercase mb-6 text-lg">Links</h5>
          <ul class="list-reset mb-6">
            <li class="mt-2"><a href="#blog" class="text-gray-400 hover:text-white">Blog</a></li>
            <li class="mt-2"><a href="#careers" class="text-gray-400 hover:text-white">Careers</a></li>
          </ul>
        </div>
        <div class="w-full md:w-1/2">
          <h5 class="uppercase mb-6 text-lg">Social</h5>
          <ul class="list-reset mb-6">
            <li class="mt-2"><a href="#facebook" class="text-gray-400 hover:text-white">Facebook</a></li>
            <li class="mt-2"><a href="#twitter" class="text-gray-400 hover:text-white">Twitter</a></li>
            <li class="mt-2"><a href="#instagram" class="text-gray-400 hover:text-white">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this template
</script>

<style scoped>
/* Add any custom styles here */
</style>