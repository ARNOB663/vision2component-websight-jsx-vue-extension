<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Healthcare</span>
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
  <div class="container mx-auto">
    <section class="bg-white border-b py-8">
      <div class="flex flex-wrap items-center">
        <div class="w-full md:w-1/2">
          <h1 class="text-5xl font-bold leading-none mt-12">Healthcare</h1>
          <p class="leading-normal mt-6">
            At Healthcare, we are committed to providing the highest quality healthcare services to our patients. Our team of experienced healthcare professionals is dedicated to providing personalized care and ensuring that every patient receives the best possible treatment. We believe in a holistic approach to health, which means that we treat not just the symptoms, but also the underlying causes.
          </p>
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8">
            Schedule an Appointment
          </button>
        </div>
        <div class="w-full md:w-1/2">
          <img src="https://static.photos/health/900x600/105.webp" alt="Healthcare" class="w-full">
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>