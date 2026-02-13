<template>
  <div class="bg-yellow-500">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl text-center font-bold text-gray-800">Welcome to Our Restaurant</h1>
      <p class="text-xl text-center text-gray-600 mt-4">
        At our restaurant, we believe in the power of good food to bring people together. Our menu is inspired by the seasons, featuring a variety of dishes that are both healthy and delicious. We use only the freshest ingredients to ensure that every dish is made with care and attention to detail. Whether you're in the mood for a hearty pasta dish or a light and refreshing salad, we have something for everyone.
      </p>

      <!-- Slide Show Section -->
      <div class="mt-12">
        <div class="relative h-[50vh] overflow-hidden rounded-lg shadow-lg">
          <div class="absolute inset-0 w-full h-full object-cover" style="background-image: url('https://via.placeholder.com/1200x600?text=Slide+1');"></div>
        </div>
      </div>

      <!-- Testimonial Section -->
      <div class="mt-12">
        <blockquote class="max-w-2xl mx-auto p-4 bg-white border-l-4 border-green-500 rounded-lg">
          <p class="text-base text-gray-700">"The food was absolutely delicious! The service was impeccable." - John Doe</p>
        </blockquote>
      </div>

      <!-- Navigation Bar Section -->
      <nav class="fixed right-0 top-0 bottom-0 flex flex-col justify-center items-end w-64 bg-white shadow-lg">
        <ul class="space-y-4">
          <li><a href="#" class="text-base text-gray-700 hover:text-green-500">Home</a></li>
          <li><a href="#" class="text-base text-gray-700 hover:text-green-500">Menu</a></li>
          <li><a href="#" class="text-base text-gray-700 hover:text-green-500">About Us</a></li>
          <li><a href="#" class="text-base text-gray-700 hover:text-green-500">Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>