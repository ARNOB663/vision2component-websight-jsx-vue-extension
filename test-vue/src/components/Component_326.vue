<template>
  <header class="bg-gray-800 text-white p-4">
    <nav class="flex justify-center">
      <ul class="flex space-x-4">
        <li><a href="#" class="hover:underline">Home</a></li>
        <li><a href="#" class="hover:underline">About</a></li>
        <li><a href="#" class="hover:underline">Services</a></li>
        <li><a href="#" class="hover:underline">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main class="flex justify-center p-4">
    <img src="https://picsum.photos/seed/326/900/600" alt="Hero Image" class="w-full h-auto">
  </main>

  <section class="flex justify-center p-4">
    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <div class="bg-gray-200 p-4 w-full md:w-1/3">
        <h2 class="text-xl mb-2">Our Mission</h2>
        <p>At our tech company, we are committed to providing innovative and efficient solutions to our clients. We believe in the power of technology to transform businesses and improve lives.</p>
      </div>
      <div class="bg-gray-300 p-4 w-full md:w-1/3">
        <h2 class="text-xl mb-2">Our Vision</h2>
        <p>Our vision is to be the leading provider of technology solutions in the industry, recognized for our quality, innovation, and customer satisfaction.</p>
      </div>
      <div class="bg-gray-200 p-4 w-full md:w-1/3">
        <h2 class="text-xl mb-2">Our Values</h2>
        <p>We value integrity, collaboration, and continuous learning. We strive to create a culture of excellence and innovation, where our employees can thrive and our clients can benefit from our services.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for this example
</script>