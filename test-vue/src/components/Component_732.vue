<template>
  <header class="relative">
    <img src="https://static.photos/business/900x600/134.webp" alt="Header Image" class="w-full">
    <nav class="absolute top-0 right-0 p-4">
      <ul class="flex space-x-4">
        <li><a href="#" class="text-white">Home</a></li>
        <li><a href="#" class="text-white">About</a></li>
        <li><a href="#" class="text-white">Services</a></li>
        <li><a href="#" class="text-white">Contact</a></li>
      </ul>
    </nav>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <img src="https://static.photos/business/300x300/135.webp" alt="Logo" class="mx-auto">
      <h1 class="text-4xl text-white">Welcome to Our Tech Company</h1>
    </div>
  </header>
  <main class="container mx-auto p-4">
    <div class="flex justify-around">
      <div class="w-1/3 p-4 bg-white rounded shadow">
        <h2 class="text-2xl">Column 1</h2>
        <p>This is the first column of our main content. It's designed to be soft, calming colors and floating action buttons.</p>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Action
        </button>
      </div>
      <div class="w-1/3 p-4 bg-white rounded shadow">
        <h2 class="text-2xl">Column 2</h2>
        <p>This is the second column of our main content. It's designed to be soft, calming colors and floating action buttons.</p>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Action
        </button>
      </div>
      <div class="w-1/3 p-4 bg-white rounded shadow">
        <h2 class="text-2xl">Column 3</h2>
        <p>This is the third column of our main content. It's designed to be soft, calming colors and floating action buttons.</p>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Action
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
// No script needed for this example
</script>