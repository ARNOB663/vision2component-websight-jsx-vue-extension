<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center mb-8">Welcome to Our Construction Company</h1>
    <p class="text-lg text-justify">
      At our construction company, we are committed to providing our clients with the highest quality construction services. We specialize in a wide range of construction projects, from residential to commercial, and we are proud to have a reputation for excellence. Our team of experienced professionals is dedicated to delivering projects on time and within budget, and we always strive to exceed our clients' expectations. Whether you're looking for a new home, a commercial building, or any other type of construction project, we're here to help.
    </p>

    <!-- Full-width image slider -->
    <div class="mt-16">
      <img src="https://static.photos/architecture/900x600/199.webp" alt="Full Width Slider" class="w-full h-auto rounded-lg shadow-lg" />
    </div>

    <!-- Vertical menu -->
    <div class="flex mt-16">
      <nav class="w-1/5 bg-white p-4 shadow-lg">
        <ul class="space-y-4">
          <li><a href="#" class="text-blue-500 hover:text-blue-700">Home</a></li>
          <li><a href="#" class="text-blue-500 hover:text-blue-700">About Us</a></li>
          <li><a href="#" class="text-blue-500 hover:text-blue-700">Services</a></li>
          <li><a href="#" class="text-blue-500 hover:text-blue-700">Portfolio</a></li>
          <li><a href="#" class="text-blue-500 hover:text-blue-700">Testimonials</a></li>
          <li><a href="#" class="text-blue-500 hover:text-blue-700">Contact</a></li>
        </ul>
      </nav>

      <!-- Project portfolio images -->
      <div class="w-4/5 flex flex-wrap gap-4 mt-4">
        <img src="https://static.photos/architecture/900x600/200.webp" alt="Project 1" class="w-1/3 h-auto rounded-lg shadow-lg" />
        <img src="https://static.photos/architecture/900x600/1.webp" alt="Project 2" class="w-1/3 h-auto rounded-lg shadow-lg" />
        <img src="https://static.photos/architecture/900x600/2.webp" alt="Project 3" class="w-1/3 h-auto rounded-lg shadow-lg" />
        <img src="https://static.photos/architecture/900x600/3.webp" alt="Project 4" class="w-1/3 h-auto rounded-lg shadow-lg" />
      </div>
    </div>

    <!-- Client testimonials section -->
    <div class="mt-16">
      <blockquote class="bg-white p-4 shadow-lg">
        <p class="text-lg italic">"We had an amazing experience working with this construction company. They were professional, knowledgeable, and delivered exactly what we needed."</p>
        <footer class="text-right">- John Doe, Happy Customer</footer>
      </blockquote>
    </div>

    <!-- Newsletter sign-up form -->
    <div class="mt-16">
      <form class="bg-white p-4 shadow-lg">
        <h2 class="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <input type="email" id="email" name="email" required class="w-full p-2 border rounded mb-4" placeholder="Enter your email address" />
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Subscribe</button>
      </form>
    </div>
  </div>
</template>

<script setup>
// No script setup needed for this example
</script>