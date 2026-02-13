<template>
  <div class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://picsum.photos/seed/122/1600/900)' }">
    <div class="container mx-auto px-4 py-12">
      <div class="flex justify-between items-center">
        <img src="https://picsum.photos/seed/122/300/300" alt="Logo" class="h-12">
        <nav>
          <ul class="flex space-x-4">
            <li><a href="#" class="text-white hover:text-gray-300">Booking</a></li>
            <li><a href="#" class="text-white hover:text-gray-300">Deals</a></li>
            <li><a href="#" class="text-white hover:text-gray-300">Recommendations</a></li>
          </ul>
        </nav>
      </div>
      <div class="mt-12">
        <h1 class="text-4xl text-white font-bold">Welcome to our travel agency</h1>
        <p class="mt-4 text-white">
          We are a premier travel agency specializing in creating unforgettable travel experiences for our clients. Whether you're looking for a romantic getaway, a family vacation, or a business trip, we've got you covered. Our team of experienced travel agents will work with you to design a tailor-made itinerary that fits your unique needs and preferences. We offer a wide range of travel packages, from luxury resorts to budget-friendly destinations. We also offer a variety of services such as flight bookings, hotel reservations, and transportation. We are committed to providing our clients with the best possible service and ensuring their travel experience is unforgettable.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>