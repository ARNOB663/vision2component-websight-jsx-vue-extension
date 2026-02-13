<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Food Delivery Site</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#menu" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Menu
        </a>
        <a href="#delivery" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Delivery
        </a>
        <a href="#reviews" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Reviews
        </a>
      </div>
      <div>
        <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" placeholder="Search for food or restaurant">
      </div>
    </div>
  </nav>

  <section class="text-gray-700 p-8">
    <h1 class="text-4xl font-bold mb-4">Welcome to our Food Delivery Site</h1>
    <p class="text-lg mb-4">
      We are a team of passionate food lovers who love to share our love of food with the world. Our mission is to bring you the best of the best food from around the world, straight to your door.
    </p>
    <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
      Order Now
    </button>
  </section>

  <section id="menu" class="p-8">
    <h2 class="text-3xl font-bold mb-4">Our Menu</h2>
    <!-- Menu items go here -->
  </section>

  <section id="delivery" class="p-8">
    <h2 class="text-3xl font-bold mb-4">Delivery Options</h2>
    <!-- Delivery options go here -->
  </section>

  <section id="reviews" class="p-8">
    <h2 class="text-3xl font-bold mb-4">Customer Reviews</h2>
    <!-- Customer reviews go here -->
  </section>
</template>

<script setup>
// No script needed for this example
</script>