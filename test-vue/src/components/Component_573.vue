<template>
  <div class="bg-orange-100">
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-4xl text-center font-bold mb-8 text-green-800">Welcome to Our Food Delivery Service</h1>
      <p class="text-xl text-center mb-8 text-brown-800">
        We are a team of passionate food lovers who are dedicated to bringing you the best of the best. 
        Our mission is to provide you with the freshest, most delicious meals, prepared by our expert chefs, 
        delivered to your doorstep in a timely manner. We understand that your time is valuable, 
        so we strive to make the process as easy and efficient as possible. 
        Whether you're in the mood for a quick snack, a hearty meal, or a special occasion, 
        we've got you covered. Order now and experience the difference.
      </p>
      <div class="flex justify-center mb-8">
        <input type="text" placeholder="Search for your favorite food" class="px-4 py-2 rounded-l-lg">
        <button class="bg-green-500 text-white px-4 py-2 rounded-r-lg">Search</button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div class="bg-white rounded-lg shadow-lg p-4" v-for="(item, index) in foodItems" :key="index">
          <img :src="'https://picsum.photos/900/600'" :alt="item.name" class="w-full h-64 object-cover mb-4">
          <h2 class="text-2xl font-bold mb-2">{{ item.name }}</h2>
          <p class="text-gray-700">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const foodItems = [
  {
    image: "https://picsum.photos/900/600",
    name: "Pizza",
    description: "Tasty pizza made with fresh ingredients."
  },
  // Add more food items as needed
];
</script>