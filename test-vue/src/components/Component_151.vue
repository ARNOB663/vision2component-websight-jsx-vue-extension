<template>
  <header class="bg-white shadow">
    <div class="container mx-auto flex items-center justify-between p-6">
      <div class="flex items-center">
        <img src="https://picsum.photos/seed/151/300/300" alt="Logo" class="h-10 w-10">
        <span class="ml-4 text-xl">Architecture Firm</span>
      </div>
      <nav>
        <ul class="flex">
          <li class="mr-6"><a href="#" class="text-red-500 hover:text-red-800">Home</a></li>
          <li class="mr-6"><a href="#" class="text-red-500 hover:text-red-800">About</a></li>
          <li class="mr-6"><a href="#" class="text-red-500 hover:text-red-800">Portfolio</a></li>
          <li><a href="#" class="text-red-500 hover:text-red-800">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container mx-auto p-6">
        <img src="https://picsum.photos/seed/151/900/600" alt="Building" class="w-full">
      </div>
    </section>

    <section class="portfolio">
      <div class="container mx-auto p-6">
        <h2 class="text-2xl mb-4">Portfolio</h2>
        <div class="grid grid-cols-3 gap-4">
          <!-- Portfolio items go here -->
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-gray-800 text-white text-center p-6">
    <p>&copy; 2022 Architecture Firm. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>