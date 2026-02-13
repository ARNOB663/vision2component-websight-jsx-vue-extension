<template>
  <div>
    <header class="bg-red-500 text-white text-center py-16">
      <h1 class="text-4xl">Welcome to our Travel Agency</h1>
      <p class="mt-4">We offer a wide range of travel packages to exotic destinations.</p>
    </header>

    <section class="container mx-auto my-16">
      <!-- Slideshow code here -->
      <div class="carousel">
        <img src="https://static.photos/travel/900x600/22.webp" alt="Destination 1" />
        <img src="https://static.photos/travel/900x600/23.webp" alt="Destination 2" />
        <img src="https://static.photos/travel/900x600/24.webp" alt="Destination 3" />
      </div>
    </section>

    <section class="container mx-auto my-16">
      <!-- Featured packages grid here -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-white p-4 shadow-md rounded-lg">
          <img src="https://static.photos/travel/900x600/25.webp" alt="Package 1" class="w-full h-auto mb-4" />
          <h2 class="text-xl font-bold">Package 1</h2>
          <p class="text-gray-700">Description for Package 1</p>
        </div>
        <div class="bg-white p-4 shadow-md rounded-lg">
          <img src="https://static.photos/travel/900x600/26.webp" alt="Package 2" class="w-full h-auto mb-4" />
          <h2 class="text-xl font-bold">Package 2</h2>
          <p class="text-gray-700">Description for Package 2</p>
        </div>
        <div class="bg-white p-4 shadow-md rounded-lg">
          <img src="https://static.photos/travel/900x600/27.webp" alt="Package 3" class="w-full h-auto mb-4" />
          <h2 class="text-xl font-bold">Package 3</h2>
          <p class="text-gray-700">Description for Package 3</p>
        </div>
      </div>
    </section>

    <section class="container mx-auto my-16">
      <!-- Booking form here -->
      <form class="bg-white p-8 shadow-md rounded-lg max-w-md mx-auto">
        <h2 class="text-2xl font-bold mb-4">Book Now</h2>
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
        </div>
        <div class="mb-4">
          <label for="destination" class="block text-sm font-medium text-gray-700">Destination</label>
          <select id="destination" name="destination" class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
            <option value="">Select Destination</option>
            <option value="destination1">Destination 1</option>
            <option value="destination2">Destination 2</option>
            <option value="destination3">Destination 3</option>
          </select>
        </div>
        <button type="submit" class="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Book Now</button>
      </form>
    </section>

    <footer class="bg-red-500 text-white text-center py-8">
      <p>© 2022 Travel Agency. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// Add your script logic here if needed
</script>

<style scoped>
.carousel img {
  width: 100%;
  height: auto;
}
</style>