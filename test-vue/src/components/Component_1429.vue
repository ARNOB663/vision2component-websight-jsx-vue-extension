<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-red-500 text-white p-4">
      <img src="https://static.photos/health/300x300/31.webp" alt="Company Logo" class="h-10">
      <button class="bg-white text-red-500 px-4 py-2 ml-4 rounded">Schedule an Appointment</button>
    </header>

    <div class="relative">
      <img src="https://static.photos/health/900x600/32.webp" alt="Background Image" class="w-full">
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-4xl">
        "Fitness is not about being better than someone else. It's about being better than you used to be." - Quincy Adams
      </div>
    </div>

    <nav class="bg-red-500 text-white p-4">
      <ul class="flex justify-center">
        <li class="px-4"><a href="#about" class="text-white">About</a></li>
        <li class="px-4"><a href="#services" class="text-white">Services</a></li>
        <li class="px-4"><a href="#contact" class="text-white">Contact</a></li>
      </ul>
    </nav>

    <section id="about" class="p-4">
      <h2 class="text-2xl mb-4">About Us</h2>
      <p class="mb-4">We are a team of certified fitness professionals dedicated to helping you achieve your health and fitness goals. Our state-of-the-art facilities and experienced trainers ensure that you receive the best possible care.</p>
    </section>

    <section id="services" class="p-4">
      <h2 class="text-2xl mb-4">Our Services</h2>
      <p class="mb-4">We offer a wide range of services including personal training, group classes, nutrition coaching, and more. Our trainers are experienced in a variety of fitness disciplines.</p>
    </section>

    <section id="contact" class="p-4">
      <h2 class="text-2xl mb-4">Contact Us</h2>
      <p class="mb-4">Phone: 123-456-7890</p>
      <p class="mb-4">Email: info@fitnessclinic.com</p>
    </section>
  </div>
</template>

<script setup>
// No script needed for this example
</script>