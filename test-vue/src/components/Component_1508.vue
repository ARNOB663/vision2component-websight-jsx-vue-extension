<template>
  <div class="bg-gray-100">
    <header class="bg-white p-4 flex justify-between items-center">
      <img src="https://static.photos/art/300x300/110.webp" alt="Logo" class="h-10">
      <input type="text" placeholder="Search..." class="border rounded p-2">
    </header>

    <main class="flex">
      <aside class="bg-white w-1/5 p-4">
        <h2 class="text-lg font-bold mb-4">Categories</h2>
        <ul>
          <li class="mb-2"><a href="#" class="text-red-500 hover:text-red-700">Pop</a></li>
          <li class="mb-2"><a href="#" class="text-red-500 hover:text-red-700">Rock</a></li>
          <li class="mb-2"><a href="#" class="text-red-500 hover:text-red-700">Jazz</a></li>
        </ul>
      </aside>

      <section class="w-4/5 p-4">
        <h1 class="text-2xl font-bold mb-4">Featured Artist</h1>
        <img src="https://static.photos/art/900x600/111.webp" alt="Featured Artist" class="mb-4">
        <p class="text-lg">
          Music Streaming Service is a modern platform that offers a wide range of music genres. We have a vast collection of artists from around the world, and our goal is to provide the best possible listening experience to our users. Whether you're a casual listener or a serious music fan, we have something for everyone.
        </p>
      </section>
    </main>

    <footer class="bg-white p-4 text-center">
      <h2 class="text-lg font-bold mb-4">Popular Playlists</h2>
      <ul class="flex justify-center">
        <li class="mr-4"><a href="#" class="text-red-500 hover:text-red-700">Rock Classics</a></li>
        <li class="mr-4"><a href="#" class="text-red-500 hover:text-red-700">Jazz Bangers</a></li>
        <li class="mr-4"><a href="#" class="text-red-500 hover:text-red-700">Pop Hits</a></li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this simple template
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>