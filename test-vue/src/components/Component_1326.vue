<template>
  <header class="fixed w-full bg-white shadow-md p-4">
    <div class="container mx-auto flex justify-between items-center">
      <img src="https://static.photos/business/300x300/128.webp" alt="Logo" class="h-10">
      <nav class="hidden md:block">
        <ul class="flex space-x-4">
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">About</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Services</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact</a></li>
        </ul>
      </nav>
      <div class="w-64">
        <input type="text" placeholder="Search..." class="w-full p-2 border rounded">
      </div>
    </div>
  </header>

  <main class="container mx-auto pt-24 pb-8">
    <img src="https://static.photos/business/900x600/129.webp" alt="Hero Image" class="w-full">

    <section class="py-8 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-2xl mb-4">About Us</h2>
        <p>Your long and detailed text about the company goes here.</p>
      </div>
    </section>

    <section class="py-8">
      <div class="container mx-auto">
        <h2 class="text-2xl mb-4">Our Services</h2>
        <p>Your long and detailed text about the services goes here.</p>
      </div>
    </section>

    <section class="py-8 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-2xl mb-4">Contact Us</h2>
        <p>Your long and detailed text about the contact information goes here.</p>
      </div>
    </section>
  </main>
</template>

<script setup>
// No script needed for this example
</script>