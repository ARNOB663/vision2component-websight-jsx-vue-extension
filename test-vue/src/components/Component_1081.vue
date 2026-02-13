<template>
  <header class="bg-white p-4 flex justify-between items-center">
    <img src="https://picsum.photos/300" alt="Logo" class="h-10">
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#" class="text-green-500 hover:text-green-700">Home</a></li>
        <li><a href="#" class="text-green-500 hover:text-green-700">Properties</a></li>
        <li><a href="#" class="text-green-500 hover:text-green-700">About</a></li>
        <li><a href="#" class="text-green-500 hover:text-green-700">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main class="container mx-auto p-4">
    <div class="flex justify-center">
      <input type="text" placeholder="Search properties..." class="px-4 py-2 rounded-full">
    </div>

    <div class="grid grid-cols-3 gap-4 mt-8">
      <div v-for="(property, index) in properties" :key="index" class="bg-white p-4 rounded">
        <img :src="`https://picsum.photos/900?image=${index + 1}`" :alt="`Property ${index + 1}`" class="w-full h-48 object-cover">
        <h2 class="text-lg font-bold mt-2">{{ property.title }}</h2>
        <p class="text-gray-600 mt-2">{{ property.description }}</p>
      </div>
    </div>
  </main>

  <footer class="bg-white p-4 mt-8">
    <div class="container mx-auto">
      <ul class="flex space-x-4">
        <li><a href="#" class="text-green-500 hover:text-green-700">Neighborhood Guides</a></li>
        <li><a href="#" class="text-green-500 hover:text-green-700">Mortgage Calculators</a></li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
const properties = [
  {
    image: 'https://picsum.photos/900?image=84',
    title: 'Beautiful House',
    description: 'This is a beautiful house located in the heart of the city. It has a great view and is perfect for families.'
  },
  // Add more properties as needed
]
</script>