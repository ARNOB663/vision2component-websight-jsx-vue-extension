<template>
  <header class="w-full bg-cover bg-center h-64" :style="{ backgroundImage: 'url(https://static.photos/people/1600x900/153.webp)' }">
    <div class="flex justify-center items-center h-full">
      <img class="h-16" src="https://static.photos/people/300x300/154.webp" alt="Logo">
    </div>
  </header>
  <main class="container mx-auto px-4 py-8">
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">About Us</h2>
      <p class="text-gray-700">
        We are a non-profit organization dedicated to promoting social responsibility and environmental sustainability. Our mission is to create a better world for all.
      </p>
    </section>
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Our Impact</h2>
      <p class="text-gray-700">
        We have made a significant impact in our community. We have helped to clean up local parks, provided food to the homeless, and organized community events.
      </p>
    </section>
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Volunteer Opportunities</h2>
      <p class="text-gray-700">
        We are always looking for volunteers to help with our various projects. Whether you're interested in cleaning up parks, providing food, or organizing events, there's a place for you.
      </p>
    </section>
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Donate Now</h2>
      <p class="text-gray-700">
        Your donation will help us continue our work. Every little bit helps.
      </p>
      <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        Donate Now
      </button>
    </section>
  </main>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>