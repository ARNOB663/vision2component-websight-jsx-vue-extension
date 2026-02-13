<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="flex items-center justify-between bg-white p-4">
      <img src="https://static.photos/restaurant/300x300/109.webp" alt="Logo" class="h-10">
      <nav>
        <ul class="flex">
          <li class="mr-4"><a href="#menu" class="text-purple-500 hover:text-purple-700">Menu</a></li>
          <li class="mr-4"><a href="#location" class="text-purple-500 hover:text-purple-700">Location</a></li>
          <li><a href="#contact" class="text-purple-500 hover:text-purple-700">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main class="flex flex-col items-center justify-center p-4">
      <img src="https://static.photos/restaurant/900x600/110.webp" alt="Food" class="w-full h-64 object-cover">
      <p class="my-8 text-center">
        Welcome to our restaurant, where we serve the best food in town. Our menu features a variety of dishes, from classic favorites to innovative creations. We use only the freshest ingredients and prepare our food with care. Come and enjoy a meal with us.
      </p>
    </main>

    <footer class="bg-white p-4 text-center">
      <p class="mb-2">
        <a href="#menu" class="text-purple-500 hover:text-purple-700">Menu</a>
      </p>
      <p class="mb-2">
        <a href="#location" class="text-purple-500 hover:text-purple-700">Location</a>
      </p>
      <p>
        <a href="#contact" class="text-purple-500 hover:text-purple-700">Contact</a>
      </p>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this simple template
</script>