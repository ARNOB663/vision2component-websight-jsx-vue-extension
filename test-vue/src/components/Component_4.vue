<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://picsum.photos/seed/4/1600/900)' }">
    <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center h-full">
      <div class="w-full">
        <div class="flex flex-col items-center justify-center h-full">
          <img src="https://picsum.photos/seed/4/300/300" alt="Logo" class="w-1/3 md:w-1/6 mb-10">
          <nav class="flex items-center justify-center w-full">
            <a href="#" class="text-white px-3 py-2 rounded mx-2">Courses</a>
            <a href="#" class="text-white px-3 py-2 rounded mx-2">Pricing</a>
            <a href="#" class="text-white px-3 py-2 rounded mx-2">About</a>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <section class="container mx-auto px-6 md:px-12 py-10">
    <h2 class="text-4xl text-center font-bold mb-10">About Us</h2>
    <p class="text-lg text-center mb-10">
      At our education platform, we believe that education is the key to unlocking a brighter future. We are committed to providing high-quality, affordable education to all. Our courses are designed to help you reach your full potential, no matter where you are in your career. Whether you're just starting out or looking to advance your skills, we have something for everyone.
    </p>
  </section>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Tailwind CSS styles will be automatically included if you have the appropriate configuration */
</style>