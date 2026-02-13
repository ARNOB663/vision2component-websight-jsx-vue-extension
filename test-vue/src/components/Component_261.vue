<template>
  <header class="flex justify-center items-center h-screen bg-cover bg-center" :style="{ backgroundImage: 'url(https://picsum.photos/seed/261/1600/900)' }">
    <nav class="absolute top-0 w-full">
      <ul class="flex justify-center space-x-4 p-6">
        <li><a href="#" class="text-white">Home</a></li>
        <li><a href="#" class="text-white">About</a></li>
        <li><a href="#" class="text-white">Services</a></li>
        <li><a href="#" class="text-white">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main class="container mx-auto p-6">
    <section class="flex flex-col md:flex-row justify-around space-y-6 md:space-y-0 md:space-x-6">
      <div class="bg-white p-6">
        <h2 class="text-2xl mb-4">About Us</h2>
        <p class="text-gray-600">We are a tech company dedicated to providing innovative solutions to our customers. Our mission is to make technology more accessible and user-friendly.</p>
      </div>
      <div class="bg-white p-6">
        <h2 class="text-2xl mb-4">Our Services</h2>
        <p class="text-gray-600">We offer a wide range of services including software development, web design, and digital marketing. We strive to deliver the best possible solutions for our clients.</p>
      </div>
      <div class="bg-white p-6">
        <h2 class="text-2xl mb-4">Contact Us</h2>
        <p class="text-gray-600">If you have any questions or need help with your technology needs, please don't hesitate to contact us. We're here to help.</p>
      </div>
    </section>
  </main>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* No additional styles needed */
</style>