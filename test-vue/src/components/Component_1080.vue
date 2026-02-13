<template>
  <header class="flex justify-between items-center p-4 bg-white shadow">
    <img src="https://static.photos/art/300x300/82.webp" alt="Logo" class="h-10">
    <div class="flex items-center">
      <input type="text" placeholder="Search..." class="px-2 py-1 border rounded">
      <nav class="ml-4">
        <ul class="flex">
          <li class="px-2"><a href="#">Home</a></li>
          <li class="px-2"><a href="#">Menu</a></li>
          <li class="px-2"><a href="#">About</a></li>
          <li class="px-2"><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Welcome to our Food Delivery Service</h1>
    <p class="mb-4">We are a team of passionate food lovers who love to share our love of food with the world. Our mission is to provide you with the best food delivery service in town. We source our ingredients from local farms and markets to ensure the highest quality and taste.</p>
    <img src="https://static.photos/art/900x600/83.webp" alt="Food Image" class="w-full h-64 object-cover my-4">
  </main>

  <footer class="bg-white p-4 shadow">
    <h2 class="text-xl font-bold mb-2">Popular Delivery Locations</h2>
    <ul class="mb-4">
      <li><a href="#">New York</a></li>
      <li><a href="#">Los Angeles</a></li>
      <li><a href="#">Chicago</a></li>
    </ul>
    <h2 class="text-xl font-bold mb-2">Promotions</h2>
    <ul>
      <li><a href="#">Special Offers</a></li>
      <li><a href="#">Gift Cards</a></li>
    </ul>
  </footer>
</template>

<script setup>
// No script needed for this simple template
</script>