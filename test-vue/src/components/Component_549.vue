<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Restaurant Name</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#reservations" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Reservations
        </a>
        <a href="#menu" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Menu
        </a>
      </div>
    </div>
  </nav>

  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-4">Welcome to Restaurant Name</h1>
    <p class="text-lg mb-4">
      At Restaurant Name, we believe in the power of good food to bring people together. Our menu features a wide variety of mouth-watering dishes, all made from the freshest ingredients. Whether you're in the mood for a hearty pasta dish or a light and refreshing salad, we've got you covered.
    </p>
    <p class="text-lg mb-4">
      We're committed to providing a warm and welcoming atmosphere for all our guests. Our friendly staff is always on hand to ensure your dining experience is nothing short of exceptional.
    </p>
    <div class="flex justify-center">
      <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mr-2">
        Make a Reservation
      </button>
      <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
        Order Online
      </button>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>