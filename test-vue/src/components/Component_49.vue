<template>
  <header class="bg-white p-6 flex justify-between items-center">
    <img src="https://picsum.photos/seed/49/300/300" alt="Event Logo" class="h-16">
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#about" class="text-gray-600 hover:text-gray-800">About</a></li>
        <li><a href="#services" class="text-gray-600 hover:text-gray-800">Services</a></li>
        <li><a href="#testimonials" class="text-gray-600 hover:text-gray-800">Testimonials</a></li>
        <li><a href="#contact" class="text-gray-600 hover:text-gray-800">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main class="max-w-6xl mx-auto p-6">
    <section id="about" class="mb-10">
      <h2 class="text-2xl mb-4">About Us</h2>
      <p class="mb-4">We are a team of passionate event planners who believe in creating unforgettable experiences. Our mission is to make your event a success story.</p>
      <img src="https://picsum.photos/seed/49/900/600" alt="Past Event" class="w-full h-64 object-cover my-4">
    </section>

    <section id="services" class="mb-10">
      <h2 class="text-2xl mb-4">Our Services</h2>
      <p class="mb-4">We offer a wide range of services including wedding planning, corporate events, social events, and more.</p>
    </section>

    <section id="testimonials" class="mb-10">
      <h2 class="text-2xl mb-4">Client Testimonials</h2>
      <p class="mb-4">Here are some testimonials from our happy clients.</p>
    </section>

    <section id="contact" class="mb-10">
      <h2 class="text-2xl mb-4">Contact Us</h2>
      <p class="mb-4">Ready to plan your next event? Contact us today.</p>
    </section>
  </main>

  <footer class="bg-white p-6 text-center">
    <p class="text-gray-600">© 2022 Event Planning Company. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Tailwind CSS styles are automatically included via CDN */
</style>