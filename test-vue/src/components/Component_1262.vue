<template>
  <header class="bg-white py-4">
    <nav class="container mx-auto flex justify-between items-center">
      <a href="#" class="text-2xl font-bold">Travel Agency</a>
      <div>
        <a href="#" class="mr-4">Home</a>
        <a href="#" class="mr-4">About</a>
        <a href="#" class="mr-4">Contact</a>
      </div>
    </nav>
  </header>

  <section class="container mx-auto my-8">
    <h1 class="text-4xl font-bold mb-4">Welcome to our Travel Agency</h1>
    <p class="mb-4">We are a travel agency that specializes in providing high-quality travel services to our clients. Our team of experienced travel experts can help you plan your next adventure.</p>
    <img src="https://static.photos/travel/900x600/64.webp" alt="Travel" class="w-full h-64 object-cover my-4">
  </section>

  <section class="container mx-auto my-8">
    <h2 class="text-3xl font-bold mb-4">Popular Destinations</h2>
    <div class="grid grid-cols-2 gap-4">
      <img src="https://static.photos/travel/900x600/65.webp" alt="Beach" class="w-full h-32 object-cover">
      <img src="https://static.photos/travel/900x600/66.webp" alt="Mountain" class="w-full h-32 object-cover">
      <img src="https://static.photos/travel/900x600/67.webp" alt="City" class="w-full h-32 object-cover">
      <img src="https://static.photos/travel/900x600/68.webp" alt="Forest" class="w-full h-32 object-cover">
    </div>
  </section>

  <section class="container mx-auto my-8">
    <h2 class="text-3xl font-bold mb-4">Testimonials</h2>
    <div class="bg-white p-4">
      <p class="mb-2">"I had an amazing trip with my family. The staff was very friendly and the hotels were top-notch."</p>
      <p class="text-right font-bold">- John Doe</p>
    </div>
  </section>

  <section class="container mx-auto my-8">
    <h2 class="text-3xl font-bold mb-4">Search for Deals</h2>
    <form class="flex">
      <input type="text" placeholder="Search..." class="flex-1 p-2">
      <button type="submit" class="bg-yellow-500 text-white p-2">Search</button>
    </form>
  </section>

  <footer class="bg-white py-4">
    <div class="container mx-auto">
      <p>© 2022 Travel Agency</p>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>