<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Travel Agency</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Home
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          About
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Contact
        </a>
      </div>
    </div>
  </nav>

  <div class="relative">
    <img class="w-full" src="https://picsum.photos/seed/361/900/600" alt="Travel Destination">
    <div class="absolute inset-0 flex items-center justify-center">
      <h1 class="text-5xl text-white">Welcome to our Travel Agency</h1>
    </div>
    <div class="absolute inset-0 flex items-center justify-center">
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Book Now
      </button>
    </div>
  </div>

  <div class="container w-full md:max-w-3xl mx-auto pt-20">
    <div class="w-full px-4 text-xl text-gray-800 leading-normal">
      <p class="pb-4">
        At our travel agency, we specialize in creating unforgettable travel experiences for our clients. We understand that each person has unique travel needs and preferences, which is why we offer a wide range of travel options, from luxury vacations to budget-friendly getaways.
      </p>
      <p class="pb-4">
        Our team of experienced travel consultants are passionate about travel and are committed to providing you with the best service possible. We believe in the power of travel to broaden perspectives, challenge perceptions, and inspire wonder.
      </p>
      <p class="pb-4">
        Whether you're planning a romantic getaway, a family vacation, a business trip, or a solo adventure, we're here to help you plan your next adventure. Book with us today and let us help you create memories that will last a lifetime.
      </p>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>