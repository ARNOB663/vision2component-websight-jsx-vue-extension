<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Fitness Center</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Home
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          About
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Contact
        </a>
      </div>
    </div>
  </nav>
  <div class="container mx-auto">
    <h1 class="my-6 text-2xl font-bold text-center text-gray-700">Welcome to Fitness Center</h1>
    <p class="my-6 text-lg text-justify text-gray-700">
      At Fitness Center, we believe in the power of fitness. Our mission is to provide a safe, inclusive, and welcoming environment where people of all fitness levels can find the support and motivation they need to reach their health and fitness goals. We offer a wide range of classes, from yoga and pilates to weight training and cardio, all led by experienced and certified instructors. We also offer a variety of nutrition and wellness programs to help our members eat better and feel better. Whether you're a seasoned athlete or just starting out, we're here to help you every step of the way.
    </p>
    <div class="flex justify-center my-6">
      <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        Join Now
      </button>
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4">
        Find a Class
      </button>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
        Free Trial
      </button>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>