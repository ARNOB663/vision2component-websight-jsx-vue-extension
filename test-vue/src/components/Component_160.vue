<template>
  <div class="flex flex-col h-screen">
    <header class="bg-red-500 text-white p-4">
      <h1 class="text-2xl font-bold">Real Estate Agency</h1>
      <input type="text" placeholder="Search properties..." class="mt-2 p-2 rounded">
    </header>
    <main class="flex flex-1">
      <aside class="bg-green-500 text-white w-1/4 p-4">
        <h2 class="text-xl font-bold">Property Listings</h2>
        <!-- Add property listings here -->
      </aside>
      <section class="w-2/4 p-4">
        <h2 class="text-xl font-bold">Featured Properties</h2>
        <!-- Add featured properties here -->
      </section>
      <aside class="bg-gray-500 text-white w-1/4 p-4">
        <h2 class="text-xl font-bold">Client Testimonials</h2>
        <!-- Add client testimonials here -->
      </aside>
    </main>
    <footer class="bg-red-500 text-white p-4">
      <h2 class="text-xl font-bold">Contact Information</h2>
      <!-- Add contact information here -->
    </footer>
  </div>
</template>

<script setup>
// Your script logic here if needed
</script>

<style scoped>
/* Your scoped styles here if needed */
</style>