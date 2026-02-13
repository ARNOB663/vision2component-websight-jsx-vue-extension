<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://picsum.photos/seed/109/1600/900)' }">
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Healthcare Clinic</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#services" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Services</a>
          <a href="#doctors" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Doctors</a>
          <a href="#testimonials" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">Testimonials</a>
        </div>
      </div>
    </nav>
    <div class="text-center pt-20">
      <h1 class="text-4xl text-white font-bold leading-tight">Welcome to Healthcare Clinic</h1>
      <p class="text-2xl text-white">We provide the best healthcare services in the city.</p>
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-10">Book an Appointment</button>
    </div>
  </header>

  <section id="services" class="py-10">
    <h2 class="text-3xl text-center">Our Services</h2>
    <!-- Add your services here -->
  </section>

  <section id="doctors" class="py-10">
    <h2 class="text-3xl text-center">Our Doctors</h2>
    <!-- Add your doctors here -->
  </section>

  <section id="testimonials" class="py-10">
    <h2 class="text-3xl text-center">Testimonials</h2>
    <!-- Add your testimonials here -->
  </section>

  <footer class="bg-gray-800 text-white text-center py-10">
    <p>Contact us: 123-456-7890</p>
    <p>Follow us on social media:</p>
    <!-- Add your social media links here -->
  </footer>
</template>

<script setup>
// Your script setup logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>