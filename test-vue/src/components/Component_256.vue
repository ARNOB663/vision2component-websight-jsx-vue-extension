<template>
  <div class="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white shadow">
      <div class="container mx-auto flex flex-col items-center justify-between p-4 md:flex-row">
        <h1 class="text-2xl font-bold">Travel Agency</h1>
        <nav>
          <a href="#" class="px-2 py-1 text-gray-600 hover:text-gray-500">Home</a>
          <a href="#" class="px-2 py-1 text-gray-600 hover:text-gray-500">About</a>
          <a href="#" class="px-2 py-1 text-gray-600 hover:text-gray-500">Contact</a>
        </nav>
      </div>
    </header>
    <main class="flex-grow">
      <section class="container mx-auto p-4">
        <h2 class="text-3xl font-bold">Welcome to our travel agency</h2>
        <p class="my-4">We are a professional travel agency that offers a wide range of services to meet your travel needs. Whether you're looking for a romantic getaway, a family vacation, or a business trip, we're here to help.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          <img src="https://picsum.photos/seed/256/900/600" alt="Travel Image" class="w-full">
          <img src="https://picsum.photos/seed/256/900/600" alt="Travel Image" class="w-full">
          <img src="https://picsum.photos/seed/256/900/600" alt="Travel Image" class="w-full">
        </div>
      </section>
    </main>
    <footer class="bg-white shadow">
      <div class="container mx-auto p-4">
        <p>© 2022 Travel Agency</p>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-600 hover:text-gray-500">Facebook</a>
          <a href="#" class="text-gray-600 hover:text-gray-500">Twitter</a>
          <a href="#" class="text-gray-600 hover:text-gray-500">Instagram</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this simple template
</script>