<template>
  <div class="bg-yellow-500">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl text-center font-bold text-gray-800">Welcome to Our Automotive Parts Store</h1>
      <p class="text-xl text-center text-gray-600 mt-4">
        We are a leading provider of high-quality automotive parts. Our store offers a wide range of products, from engine parts to brake systems, and everything in between. We pride ourselves on offering the best prices and the highest quality parts available. Whether you're a professional mechanic or a DIY enthusiast, we have everything you need to keep your car running smoothly.
      </p>
      <!-- Search Bar Placeholder -->
      <div class="mt-8">
        <input type="text" class="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search for car parts...">
      </div>
      <!-- Promotions Section Placeholder -->
      <div class="mt-8 bg-white shadow-md rounded-lg overflow-hidden">
        <div class="px-4 py-6">
          <h2 class="text-xl font-bold text-gray-800 mb-2">Promotions & Discounts</h2>
          <p class="text-base text-gray-600">Check out our latest promotions and discounts!</p>
        </div>
      </div>
      <!-- Product Categories Grid Layout Placeholder -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <div v-for="category in categories" :key="category.id" class="bg-white shadow-md rounded-lg overflow-hidden">
          <img :src="'https://static.photos/cars/900x600/192.webp'" alt="Category Image" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800">{{ category.name }}</h3>
            <p class="text-base text-gray-600">{{ category.description }}</p>
          </div>
        </div>
      </div>
      <!-- Footer Placeholder -->
      <footer class="mt-8 bg-white shadow-md rounded-lg overflow-hidden">
        <div class="px-4 py-6">
          <h2 class="text-xl font-bold text-gray-800 mb-2">Customer Support</h2>
          <ul class="list-disc pl-4">
            <li><a href="#" class="text-base text-gray-600 hover:text-blue-500">Installation Services</a></li>
            <li><a href="#" class="text-base text-gray-600 hover:text-blue-500">Customer Reviews</a></li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
const categories = [
  {
    id: 1,
    name: 'Engine Parts',
    description: 'High-performance engine components.',
    image: 'https://via.placeholder.com/300x200?text=Engine+Parts'
  },
  {
    id: 2,
    name: 'Brake Systems',
    description: 'Top-notch braking solutions.',
    image: 'https://via.placeholder.com/300x200?text=Brake+Systems'
  },
  {
    id: 3,
    name: 'Tires',
    description: 'Durable and safe tires.',
    image: 'https://via.placeholder.com/300x200?text=Tires'
  }
]
</script>