<template>
  <div class="flex flex-col h-screen bg-gray-200">
    <header class="bg-white p-4">
      <h1 class="text-2xl font-bold">Art Gallery</h1>
    </header>
    <main class="flex flex-1">
      <aside class="w-1/4 bg-white p-4">
        <h2 class="text-xl font-bold">Artist Information</h2>
        <p>This is where you can put information about the artist.</p>
        <h2 class="text-xl font-bold">Upcoming Exhibitions</h2>
        <p>This is where you can put information about upcoming exhibitions.</p>
      </aside>
      <section class="w-3/4 bg-white p-4">
        <img src="https://static.photos/art/900x600/119.webp" alt="Art Gallery" class="w-full h-full object-cover">
      </section>
    </main>
    <footer class="bg-white p-4">
      <h2 class="text-xl font-bold">Contact Information</h2>
      <p>This is where you can put contact information.</p>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this basic template
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>