<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Restaurant Name</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Menu
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          About Us
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Contact
        </a>
      </div>
    </div>
  </nav>

  <header class="w-full bg-white p-12 flex justify-center">
    <img src="https://static.photos/restaurant/900x600/76.webp" alt="Banner Image" class="w-full h-auto">
  </header>

  <section class="text-center p-8">
    <h1 class="text-4xl mb-4">Welcome to Our Restaurant</h1>
    <p class="text-lg mb-8">
      At our restaurant, we believe in the power of good food to bring people together. Our menu is a celebration of the finest ingredients, carefully sourced from around the world, and presented using traditional and modern cooking techniques. We are proud to offer a warm and inviting atmosphere, where you can enjoy a delicious meal with family and friends.
    </p>
    <div class="flex justify-center">
      <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mr-4">
        Make a Reservation
      </button>
      <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
        Order Online
      </button>
    </div>
  </section>
</template>

<script setup>
// No script needed for this example
</script>