<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-8">
      <input type="text" placeholder="Search properties..." class="w-1/2 px-4 py-2 rounded-lg">
      <div class="flex">
        <button class="px-4 py-2 mr-2 bg-yellow-500 text-white rounded-lg">For Sale</button>
        <button class="px-4 py-2 bg-yellow-500 text-white rounded-lg">For Rent</button>
      </div>
    </div>
    <div class="flex">
      <div class="w-1/4 pr-4">
        <h2 class="text-lg font-bold mb-4">Categories</h2>
        <ul>
          <li class="mb-2">Apartment</li>
          <li class="mb-2">House</li>
          <li class="mb-2">Condo</li>
        </ul>
        <h2 class="text-lg font-bold mb-4 mt-8">Locations</h2>
        <ul>
          <li class="mb-2">New York</li>
          <li class="mb-2">Los Angeles</li>
          <li class="mb-2">Chicago</li>
        </ul>
      </div>
      <div class="w-3/4">
        <div class="grid grid-cols-2 gap-4">
          <div v-for="(property, index) in properties" :key="index" class="bg-white p-4 rounded-lg">
            <img :src="'https://picsum.photos/seed/180/900/600'" alt="House" class="w-full h-48 object-cover mb-4">
            <h2 class="text-lg font-bold mb-2">{{ property.title }}</h2>
            <p class="text-gray-600">{{ property.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const properties = [
  {
    image: 'https://picsum.photos/seed/180/900/600',
    title: 'Beautiful House for Sale',
    description: 'This is a beautiful house located in the heart of downtown. It has 3 bedrooms and 2 bathrooms. It\'s perfect for a family.'
  },
  // Add more properties as needed
]
</script>