<template>
  <div class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-center mb-8">Welcome to Our Travel Agency</h1>
      <p class="text-lg text-center mb-8">
        At our travel agency, we specialize in providing unforgettable travel experiences. We understand that every traveler is unique, and we strive to create a personalized journey that fits your needs and desires. Whether you're looking for a romantic getaway, a family vacation, or a business trip, we're here to help you plan your next adventure.
      </p>
      <div class="relative">
        <video class="w-full" autoplay loop muted>
          <source src="https://static.photos/travel/900x600/156.webp" type="video/mp4">
        </video>
        <div class="absolute inset-0 flex items-center justify-center">
          <input class="w-1/2 p-2 rounded-lg" type="text" placeholder="Search for your next adventure">
        </div>
      </div>
      <div class="my-8">
        <h2 class="text-2xl font-bold mb-4">Our World Map</h2>
        <p class="mb-4">
          Here is a map of our services. Click on a country to see our travel packages for that destination.
        </p>
        <img class="w-full" src="https://static.photos/travel/900x600/156.webp" alt="World Map">
      </div>
      <div class="my-8">
        <h2 class="text-2xl font-bold mb-4">Client Testimonials</h2>
        <div class="flex flex-col">
          <div class="p-4 mb-4 bg-white rounded-lg">
            <p class="text-lg">
              "I had the best trip ever with my family. The staff was friendly and the hotels were amazing. I would definitely recommend this travel agency to anyone."
            </p>
            <p class="text-right text-sm mt-2">- John Doe</p>
          </div>
          <div class="p-4 mb-4 bg-white rounded-lg">
            <p class="text-lg">
              "I was very impressed with the professionalism of the travel agency. They were able to find a very affordable flight for my business trip. I would definitely use them again."
            </p>
            <p class="text-right text-sm mt-2">- Jane Smith</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>