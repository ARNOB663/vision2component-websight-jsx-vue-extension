<template>
  <div class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://picsum.photos/seed/241/1600/900)' }">
    <header class="flex justify-between items-center p-4">
      <h1 class="text-white text-4xl">Travel Agency</h1>
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" class="text-white">Adventure</a></li>
          <li><a href="#" class="text-white">Luxury</a></li>
          <li><a href="#" class="text-white">Budget</a></li>
        </ul>
      </nav>
    </header>
    <main class="flex justify-center items-center h-full">
      <h2 class="text-white text-6xl">Welcome to our travel agency</h2>
    </main>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Tailwind CSS is included via CDN in the template */
</style>