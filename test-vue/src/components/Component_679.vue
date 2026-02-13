<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white text-gray-800">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span class="ml-3 text-xl">Architecture Firm</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#recent-projects" class="mr-5 hover:text-gray-900">Recent Projects</a>
          <a href="#services" class="mr-5 hover:text-gray-900">Services</a>
          <a href="#team" class="mr-5 hover:text-gray-900">Team</a>
        </nav>
      </div>
    </header>

    <section id="hero" class="relative h-screen bg-cover bg-center" style="background-image: url('placeholder-hero.jpg');">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="container mx-auto flex flex-wrap items-center justify-center h-full">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-white">Welcome to Architecture Firm</h1>
          <p class="mt-4 text-lg text-white">Crafting innovative solutions for your next big project.</p>
        </div>
      </div>
    </section>

    <aside class="fixed left-0 top-0 bottom-0 w-64 bg-white shadow-md">
      <nav class="p-4">
        <ul>
          <li><a href="#recent-projects" class="block py-2 px-4 hover:bg-gray-100">Recent Projects</a></li>
          <li><a href="#services" class="block py-2 px-4 hover:bg-gray-100">Services</a></li>
          <li><a href="#team" class="block py-2 px-4 hover:bg-gray-100">Team</a></li>
        </ul>
      </nav>
    </aside>

    <section id="recent-projects" class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-4">Recent Projects</h2>
        <!-- Projects go here -->
      </div>
    </section>

    <section id="services" class="py-12 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-4">Services</h2>
        <!-- Services go here -->
      </div>
    </section>

    <section id="team" class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-4">Team</h2>
        <!-- Team members go here -->
      </div>
    </section>

    <footer class="bg-gray-800 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center justify-between">
          <div>
            <a href="#" class="mr-4 hover:text-gray-300"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="mr-4 hover:text-gray-300"><i class="fab fa-twitter"></i></a>
            <a href="#" class="mr-4 hover:text-gray-300"><i class="fab fa-instagram"></i></a>
          </div>
          <div>
            <p>Contact us at info@architecturefirm.com</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Your script logic goes here
</script>

<style scoped>
/* Add any custom styles here */
</style>