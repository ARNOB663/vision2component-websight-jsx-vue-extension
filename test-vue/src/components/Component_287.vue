<template>
  <div class="flex items-center justify-center h-screen bg-cover bg-center" :style="{ backgroundImage: 'url(https://picsum.photos/seed/287/1600/900)' }">
    <div class="text-center">
      <img class="h-16 mb-4" src="https://picsum.photos/seed/287/300/300" alt="Logo">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Non-Profit Organization</h1>
      <p class="text-xl text-gray-600 mb-4">
        At our Non-Profit Organization, we believe in the power of love and kindness. We are committed to helping those in need, no matter how big or small. We believe that every act of kindness, no matter how small, can make a big difference. We are a team of volunteers who are passionate about making a difference in the world.
      </p>
      <div class="flex justify-center">
        <a href="#" class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mr-2">
          Volunteer
        </a>
        <a href="#" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Donate
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>