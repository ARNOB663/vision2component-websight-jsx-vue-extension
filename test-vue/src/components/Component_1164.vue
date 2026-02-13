<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-cover bg-center h-screen flex items-center justify-center" :style="{ backgroundImage: 'url(https://static.photos/restaurant/1600x900/165.webp)' }">
      <nav class="bg-black bg-opacity-75 w-full px-6 py-4">
        <div class="flex items-center justify-between">
          <div>
            <a href="#" class="text-white no-underline hover:text-white hover:no-underline text-2xl">Restaurant Name</a>
          </div>
          <div>
            <a href="#" class="text-white no-underline hover:text-white hover:no-underline px-4">Menu</a>
            <a href="#" class="text-white no-underline hover:text-white hover:no-underline px-4">About</a>
            <a href="#" class="text-white no-underline hover:text-white hover:no-underline px-4">Contact</a>
          </div>
        </div>
      </nav>
    </header>
    <main class="flex-grow flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl text-gray-800 font-bold mb-4">Welcome to Our Restaurant</h1>
        <p class="text-xl text-gray-600 mb-8">We are a family-owned restaurant dedicated to serving the freshest, most delicious food. Our menu features a variety of dishes made from the finest ingredients. Whether you're in the mood for a hearty meal or a light snack, we've got you covered. Come visit us and experience the warm and inviting atmosphere of our restaurant.</p>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Make a Reservation
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
// No script needed for this example
</script>