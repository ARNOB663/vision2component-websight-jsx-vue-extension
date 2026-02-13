<template>
  <div class="bg-yellow-500">
    <header class="bg-green-500 text-white text-center py-16">
      <h1 class="text-4xl">Welcome to Our Real Estate Company</h1>
      <p class="mt-4 text-xl">We are a leading real estate company in the industry, offering a wide range of properties for sale and rent. Our team of experienced realtors is dedicated to providing you with the best service possible.</p>
    </header>

    <section class="py-16">
      <h2 class="text-3xl text-center mb-8">Properties for Sale</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(property, index) in propertiesForSale" :key="index" class="bg-white p-4 shadow-md">
          <img :src="'https://picsum.photos/900/600'" alt="Property Image" class="w-full h-64 object-cover">
          <h3 class="text-2xl mt-4">{{ property.title }}</h3>
          <p class="mt-2">{{ property.description }}</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-green-500 text-white">
      <h2 class="text-3xl text-center mb-8">Properties for Rent</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(property, index) in propertiesForRent" :key="index" class="bg-white p-4 shadow-md">
          <img :src="'https://picsum.photos/900/600'" alt="Property Image" class="w-full h-64 object-cover">
          <h3 class="text-2xl mt-4">{{ property.title }}</h3>
          <p class="mt-2">{{ property.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const propertiesForSale = [
  {
    image: 'https://picsum.photos/900/600',
    title: 'Beautiful House for Sale',
    description: 'This is a beautiful house located in the heart of the city. It has 3 bedrooms and 2 bathrooms.'
  },
  // Add more properties as needed
]

const propertiesForRent = [
  {
    image: 'https://picsum.photos/900/600',
    title: 'Spacious Apartment for Rent',
    description: 'This is a spacious apartment located in the city center. It has 2 bedrooms and 1 bathroom.'
  },
  // Add more properties as needed
]
</script>