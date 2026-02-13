<template>
  <header class="bg-white p-4 flex justify-center">
    <img src="https://picsum.photos/seed/57/300/300" alt="Logo" class="h-10">
  </header>

  <section class="p-4">
    <div class="flex justify-center">
      <input type="text" placeholder="Search for properties" class="px-4 py-2 rounded-l">
      <button class="bg-gray-500 text-white px-4 py-2 rounded-r">Search</button>
    </div>
  </section>

  <section class="p-4">
    <div class="grid grid-cols-3 gap-4">
      <div class="bg-white p-4">
        <h2 class="text-lg font-bold">Property 1</h2>
        <p>This is a beautiful property located in the heart of the city. It features a modern design with high ceilings and a spacious layout.</p>
      </div>
      <div class="bg-white p-4">
        <h2 class="text-lg font-bold">Property 2</h2>
        <p>This is a cozy property in a quiet neighborhood. It has a classic charm and a comfortable layout.</p>
      </div>
      <div class="bg-white p-4">
        <h2 class="text-lg font-bold">Property 3</h2>
        <p>This is a luxury property in the suburbs. It has a grand design with high ceilings and a spacious layout.</p>
      </div>
    </div>
  </section>

  <footer class="bg-white p-4 text-center">
    <p>Our company is dedicated to providing the best real estate services in the area. We have a wide range of properties for sale and for rent.</p>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>