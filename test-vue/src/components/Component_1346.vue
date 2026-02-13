<template>
  <div class="bg-red-100">
    <header class="w-full">
      <img src="https://static.photos/restaurant/900x600/148.webp" alt="Restaurant Header Image" class="w-full">
    </header>

    <nav class="flex justify-center items-center h-16 bg-red-600 text-white">
      <h1 class="text-2xl">Restaurant Name</h1>
    </nav>

    <main class="container mx-auto p-4">
      <section class="my-8">
        <h2 class="text-3xl text-center">Welcome to Our Restaurant</h2>
        <p class="text-center my-4">
          At our restaurant, we believe in the power of good food to bring people together. Our menu features a wide variety of dishes, from classic favorites to innovative creations. We use only the freshest ingredients to ensure that every dish is bursting with flavor. Whether you're in the mood for a hearty pasta dish or a light and refreshing salad, we've got something for everyone.
        </p>
      </section>

      <section class="my-8 text-center">
        <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Make a Reservation
        </button>
      </section>
    </main>

    <footer class="bg-red-600 text-white p-4 text-center">
      <p>123 Main St, Anytown, USA</p>
      <p>Phone: (123) 456-7890</p>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this simple template
</script>