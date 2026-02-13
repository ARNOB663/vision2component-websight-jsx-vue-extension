<template>
  <div class="container w-full md:max-w-3xl mx-auto pt-20">
    <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
      <div class="font-sans break-normal text-gray-800 px-2">
        <h2 class="text-4xl font-bold leading-tight text-gray-800">Welcome to Our Restaurant Chain</h2>
        <p class="text-base">
          At our restaurant chain, we are committed to providing our customers with the best dining experience. Our warm and inviting atmosphere, carefully curated menus, and high-quality ingredients are what make us stand out from the rest. We believe in using only the freshest ingredients to ensure that every dish is not only delicious, but also nutritious. Our team of experienced chefs and servers are dedicated to providing you with a memorable dining experience.
        </p>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 p-4">
        <img class="h-64 rounded w-full object-cover object-center" src="https://picsum.photos/seed/375/900/600" alt="Food Image">
        <div class="pt-3 flex items-center justify-between">
          <p class="text-base">Food Name</p>
          <p class="text-base">Rating</p>
        </div>
      </div>
      <div class="w-full md:w-1/2 p-4">
        <img class="h-64 rounded w-full object-cover object-center" src="https://picsum.photos/seed/375/900/600" alt="Food Image">
        <div class="pt-3 flex items-center justify-between">
          <p class="text-base">Food Name</p>
          <p class="text-base">Rating</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Tailwind CSS styles are included via CDN in the template */
</style>