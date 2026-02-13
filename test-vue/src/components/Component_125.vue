<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <nav class="bg-indigo-500 text-white p-4">
      <form class="flex justify-center">
        <input class="rounded-l p-2" type="text" placeholder="Search properties..." />
        <button class="bg-white text-indigo-500 rounded-r p-2">Search</button>
      </form>
    </nav>
    <main class="flex-grow flex">
      <div class="w-1/2 p-4">
        <img class="w-full" src="https://picsum.photos/seed/125/900/600" alt="Property Image" />
      </div>
      <div class="w-1/2 p-4">
        <h1 class="text-2xl mb-4">Property Details</h1>
        <p class="mb-2">This is a beautiful property located in the heart of the city. It features a modern design with high ceilings and spacious rooms. The property is fully equipped with all modern amenities. The location is perfect for families or couples who love to enjoy the city life.</p>
        <p class="mb-2">The property is located in a quiet neighborhood, only a few minutes walk from the city center. The neighborhood is full of restaurants, shops, and parks. The public transportation is very convenient, and the property is a 10-minute walk from the bus stop.</p>
      </div>
    </main>
    <footer class="bg-indigo-500 text-white p-4">
      <h2 class="text-xl mb-2">Contact Information</h2>
      <p>Phone: 123-456-7890</p>
      <p>Email: info@realestate.com</p>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>