<template>
  <div class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-gray-800 text-center mb-8">Real Estate</h1>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="(property, index) in properties" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
          <img class="w-full" :src="'https://static.photos/real-estate/900x600/143.webp'" :alt="property.title">
          <div class="p-4">
            <h2 class="text-xl font-bold text-gray-800">{{ property.title }}</h2>
            <p class="text-gray-600">{{ property.description }}</p>
            <p class="text-gray-800 font-bold mt-4">${{ property.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const properties = [
  {
    image: 'https://static.photos/real-estate/900x600/143.webp',
    title: 'House for Sale',
    description: 'This is a beautiful house located in the heart of the city. It has 3 bedrooms and 2 bathrooms. It is a great investment opportunity.',
    price: '500,000'
  },
  // Add more properties as needed
]
</script>