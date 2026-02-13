<template>
  <header class="bg-white p-4 flex justify-between items-center">
    <div>
      <h1 class="text-2xl font-bold">Bookstore</h1>
      <p class="text-sm">Welcome to our online bookstore, where you can find a wide variety of books from all genres. We offer a vast collection of books, including bestsellers, classics, and new releases. Our mission is to provide our customers with a seamless and enjoyable shopping experience.</p>
    </div>
    <div>
      <input type="text" placeholder="Search books..." class="p-2 rounded-lg">
    </div>
  </header>
  <main class="flex p-4">
    <section class="w-3/4 grid grid-cols-3 gap-4">
      <!-- Book covers go here -->
    </section>
    <aside class="w-1/4 bg-white p-4 ml-4">
      <!-- Filters and recommendations go here -->
    </aside>
  </main>
</template>

<script setup>
// Your script logic goes here
</script>

<style scoped>
/* Add your custom styles here */
</style>