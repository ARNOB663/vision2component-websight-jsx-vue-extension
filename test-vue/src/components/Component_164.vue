<template>
  <div class="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="https://picsum.photos/seed/164/300/300" alt="Restaurant Logo">
          <span class="ml-3 text-xl">Restaurant Name</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#reservation" class="mr-5 hover:text-gray-900">Reservation</a>
        </nav>
      </div>
    </header>
    <main class="flex-grow">
      <div class="container mx-auto px-5 py-24">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://picsum.photos/seed/164/900/600" alt="Dish">
              <div class="p-6">
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Dish Name</h1>
                <p class="leading-relaxed mb-3">Real and long sentences about the dish.</p>
              </div>
            </div>
          </div>
          <!-- Repeat the above div for each dish -->
        </div>
      </div>
    </main>
    <footer class="bg-white">
      <div class="container mx-auto px-5 py-6">
        <div class="flex flex-col md:flex-row justify-between">
          <div>
            <a class="text-gray-500 hover:text-gray-900" href="https://www.facebook.com">Facebook</a>
            <a class="text-gray-500 hover:text-gray-900" href="https://www.twitter.com">Twitter</a>
            <a class="text-gray-500 hover:text-gray-900" href="https://www.instagram.com">Instagram</a>
          </div>
          <div>
            <p class="text-gray-500">© 2022 Restaurant Name. All rights reserved.</p>
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
/* Tailwind CSS styles are automatically included via CDN in the template */
</style>