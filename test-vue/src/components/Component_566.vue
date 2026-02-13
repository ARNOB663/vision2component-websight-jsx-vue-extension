<template>
  <header class="w-full bg-cover bg-center h-64" :style="{ backgroundImage: 'url(https://static.photos/travel/1600x900/167.webp)' }">
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Travel Agency</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#destinations" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Destinations
          </a>
          <a href="#packages" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Packages
          </a>
          <a href="#travel-tips" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Travel Tips
          </a>
        </div>
      </div>
    </nav>
  </header>

  <main class="container mx-auto px-4 py-6">
    <h1 class="text-3xl font-bold mb-4">Welcome to our Travel Agency</h1>
    <p class="mb-4">
      We are a travel agency that specializes in creating unforgettable travel experiences for our clients. Our team of experienced travel experts can help you plan your next adventure, whether it's a romantic getaway, a family vacation, or a business trip.
    </p>
    <p class="mb-4">
      We offer a wide range of travel packages to suit every budget and taste. From luxury resorts to budget-friendly getaways, we have something for everyone. Our packages include everything you need to make your trip a success, from flight bookings to accommodation, transportation, and activities.
    </p>
    <p class="mb-4">
      We also provide travel tips and advice to help you make the most of your trip. From packing tips to local customs, we're here to help you make the most of your travel experience.
    </p>
  </main>
</template>

<script setup>
// No script needed for this simple example
</script>

<style scoped>
/* Add any custom styles here */
</style>