<template>
  <div class="bg-yellow-50">
    <header class="bg-pink-500 text-white text-center py-16">
      <h1 class="text-4xl">Welcome to our Retail Store</h1>
      <p class="mt-4">We offer a wide range of products for your daily needs.</p>
    </header>

    <section class="container mx-auto my-16">
      <h2 class="text-3xl text-center mb-8">Our Products</h2>
      <!-- Masonry grid layout of products -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="product in products" :key="product.id" class="bg-white rounded-lg shadow-md overflow-hidden">
          <img :src="'https://static.picsum.photos/id/102/900/600'" alt="Product Image" class="w-full h-48 object-cover">
          <div class="px-4 py-2">
            <h3 class="text-xl font-bold">{{ product.name }}</h3>
            <p class="text-gray-700">{{ product.description }}</p>
            <p class="text-red-500">${{ product.price }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto my-16">
      <h2 class="text-3xl text-center mb-8">Promotions and Deals</h2>
      <!-- Slider for promotions and deals -->
      <div class="relative overflow-hidden">
        <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div v-for="(slide, index) in slides" :key="index" class="w-full flex-shrink-0">
            <img :src="'https://static.picsum.photos/id/103/900/600'" alt="Slide Image" class="w-full h-64 object-cover">
          </div>
        </div>
        <button @click="prevSlide" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-l">Prev</button>
        <button @click="nextSlide" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-r">Next</button>
      </div>
    </section>

    <footer class="bg-pink-500 text-white text-center py-8">
      <p>© 2022 Retail Store. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 19.99, image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 29.99, image: 'https://via.placeholder.com/300' },
  // Add more products as needed
];

const slides = [
  { image: 'https://via.placeholder.com/800x600' },
  { image: 'https://via.placeholder.com/800x600' },
  // Add more slides as needed
];

const currentIndex = ref(0);

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const nextSlide = () => {
  if (currentIndex.value < slides.length - 1) {
    currentIndex.value++;
  }
};

onMounted(() => {
  setInterval(nextSlide, 3000);
});
</script>