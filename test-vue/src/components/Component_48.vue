<template>
  <div class="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white">
      <nav class="flex items-center justify-between flex-wrap p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img src="https://picsum.photos/seed/48/300/300" alt="Logo">
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Case Studies
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Team's Portfolio
            </a>
          </div>
        </div>
      </nav>
    </header>
    <main class="flex-grow">
      <!-- Main content goes here -->
    </main>
    <footer class="bg-white">
      <div class="container mx-auto px-8">
        <div class="w-full flex flex-col md:flex-row py-6">
          <div class="flex-1 mb-6">
            <a class="text-white font-bold text-xl" href="#/">Architecture Firm</a>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-0">Links</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#/" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Home</a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#/" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Case Studies</a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#/" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Team's Portfolio</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Your script logic can go here if needed
</script>