<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Healthcare Provider</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#services" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Services
        </a>
        <a href="#amenities" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Amenities
        </a>
        <a href="#appointment" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Appointment
        </a>
      </div>
    </div>
  </nav>

  <section id="services" class="text-center p-10">
    <h1 class="text-3xl mb-4">Our Services</h1>
    <p class="text-lg">We provide a wide range of services to ensure you receive the best care possible. Our team of experienced healthcare providers are dedicated to providing you with the highest quality of care.</p>
  </section>

  <section id="amenities" class="text-center p-10">
    <h1 class="text-3xl mb-4">Our Amenities</h1>
    <p class="text-lg">We understand the importance of comfort and relaxation. That's why we provide a variety of amenities to ensure you have a comfortable and relaxing experience.</p>
  </section>

  <section id="appointment" class="text-center p-10">
    <h1 class="text-3xl mb-4">Appointment</h1>
    <p class="text-lg">Schedule your appointment today and experience the best healthcare provider has to offer.</p>
  </section>
</template>

<script setup>
// No script needed for this example
</script>