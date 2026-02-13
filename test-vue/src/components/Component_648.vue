<template>
  <header class="bg-gray-500 text-white p-4">
    <nav class="flex justify-between">
      <div>
        <h1 class="text-2xl">Travel Agency</h1>
      </div>
      <div>
        <ul class="flex space-x-4">
          <li>Home</li>
          <li>Destinations</li>
          <li>Flights</li>
          <li>Hotels</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  </header>

  <main class="p-4">
    <section class="mb-4">
      <img src="https://static.photos/travel/900x600/50.webp" alt="Travel Banner" class="w-full">
    </section>

    <section class="mb-4">
      <h2 class="text-2xl mb-2">Destinations</h2>
      <div class="grid grid-cols-3 gap-4">
        <img src="https://static.photos/travel/900x600/51.webp" alt="Beach" class="w-full">
        <img src="https://static.photos/travel/900x600/52.webp" alt="Mountain" class="w-full">
        <img src="https://static.photos/travel/900x600/53.webp" alt="City" class="w-full">
        <!-- Add more images as needed -->
      </div>
    </section>

    <section class="mb-4">
      <h2 class="text-2xl mb-2">Search Flights and Hotels</h2>
      <form class="flex space-x-2">
        <input type="text" placeholder="Search..." class="flex-1 p-2">
        <button type="submit" class="bg-gray-500 text-white p-2">Search</button>
      </form>
    </section>

    <section class="mb-4">
      <h2 class="text-2xl mb-2">Newsletter Sign-up</h2>
      <form class="flex space-x-2">
        <input type="email" placeholder="Enter your email..." class="flex-1 p-2">
        <button type="submit" class="bg-gray-500 text-white p-2">Sign Up</button>
      </form>
    </section>
  </main>

  <footer class="bg-gray-500 text-white p-4 text-center">
    <p>© 2022 Travel Agency. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script setup needed for this example
</script>