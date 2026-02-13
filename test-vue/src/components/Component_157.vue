<template>
  <header class="bg-cover bg-center h-screen flex items-center justify-center" :style="{ backgroundImage: 'url(https://picsum.photos/seed/157/1600/900)' }">
    <div class="text-center">
      <img class="inline-block h-16 w-16 rounded-full mb-4" src="https://picsum.photos/seed/157/300/300" alt="Logo">
      <h1 class="text-5xl font-bold text-white">Food Delivery Service</h1>
    </div>
  </header>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Food Delivery Service</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#menu" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Menu
        </a>
        <a href="#about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          About
        </a>
        <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Contact
        </a>
      </div>
    </div>
  </nav>
  <main class="container mx-auto px-4 py-8">
    <p class="text-lg leading-relaxed mb-4">
      Welcome to our food delivery service, where we strive to provide the best meals to our customers. We use only the freshest ingredients and the best chefs to prepare them. Our meals are not only delicious, but also healthy and nutritious. We are committed to providing a safe and enjoyable experience for our customers.
    </p>
  </main>
  <footer class="bg-gray-800 text-white p-6">
    <div class="flex items-center justify-between flex-wrap">
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#facebook" class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4">
            Facebook
          </a>
          <a href="#twitter" class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4">
            Twitter
          </a>
          <a href="#instagram" class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white">
            Instagram
          </a>
        </div>
      </div>
      <div class="text-right">
        <p class="text-sm">
          Sign up for our newsletter:
        </p>
        <input class="bg-gray-900 text-white p-2 mt-2" type="email" placeholder="Your email">
        <button class="bg-white text-gray-900 p-2 mt-2">Subscribe</button>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>