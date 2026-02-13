<template>
  <header class="flex items-center justify-between bg-white p-4">
    <img src="https://picsum.photos/seed/186/300/300" alt="Logo" class="h-10">
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#" class="text-gray-800 hover:text-red-500">Menu</a></li>
        <li><a href="#" class="text-gray-800 hover:text-red-500">Hours</a></li>
        <li><a href="#" class="text-gray-800 hover:text-red-500">Reservations</a></li>
      </ul>
    </nav>
  </header>
  <main class="container mx-auto p-4">
    <section class="my-8">
      <h1 class="text-3xl font-bold">Welcome to Our Restaurant</h1>
      <p class="my-4">
        At our restaurant, we serve the best food in town. Our menu features a variety of delicious dishes, prepared with the freshest ingredients. Whether you're in the mood for a hearty meal or a light snack, we've got you covered.
      </p>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Make a Reservation
      </button>
    </section>
  </main>
</template>

<script setup>
// No script needed for this example
</script>