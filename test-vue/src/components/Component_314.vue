<template>
  <div class="flex items-center justify-center h-screen bg-cover bg-center" :style="{ backgroundImage: 'url(https://picsum.photos/seed/314/1600/900)' }">
    <div class="text-center">
      <img class="h-16 mb-4" src="https://picsum.photos/seed/314/300/300" alt="Logo">
      <h1 class="text-4xl font-bold text-white">Welcome to our Food Delivery Service</h1>
      <p class="text-2xl text-white">Experience the best food delivery service in town.</p>
      <button class="mt-4 px-4 py-2 text-white bg-purple-500 rounded">Order Now</button>
    </div>
  </div>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <h2 class="mb-2 text-2xl font-bold">About Us</h2>
        <p class="mb-4 text-lg">We are a team of passionate food lovers who are dedicated to bringing you the best food delivery service in town. Our mission is to make food ordering easy and affordable for everyone.</p>
      </div>
      <div class="p-4 md:w-1/3">
        <h2 class="mb-2 text-2xl font-bold">Our Services</h2>
        <p class="mb-4 text-lg">We offer a wide range of services including food delivery, catering, and event planning. We also offer a loyalty program for our regular customers.</p>
      </div>
      <div class="p-4 md:w-1/3">
        <h2 class="mb-2 text-2xl font-bold">Contact Us</h2>
        <p class="mb-4 text-lg">If you have any questions or need help with anything, please don't hesitate to contact us. We're here to help.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>