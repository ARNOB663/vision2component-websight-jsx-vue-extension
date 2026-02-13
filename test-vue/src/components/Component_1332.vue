<template>
  <div class="w-full h-screen bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/education/1600x900/133.webp)' }">
    <div class="container mx-auto px-6 py-12">
      <img class="mx-auto mb-6" src="https://static.photos/education/300x300/134.webp" alt="Logo">
      <nav class="flex justify-center">
        <a href="#programs" class="px-4">Programs</a>
        <a href="#faculty" class="px-4">Faculty</a>
        <a href="#testimonials" class="px-4">Testimonials</a>
      </nav>
    </div>
  </div>

  <section id="programs" class="container mx-auto px-6 py-12">
    <h2 class="text-3xl">Programs</h2>
    <p class="my-6">We offer a variety of programs designed to meet the needs of our students. From online courses to in-person classes, we have something for everyone.</p>
    <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Apply Now</button>
  </section>

  <section id="faculty" class="container mx-auto px-6 py-12">
    <h2 class="text-3xl">Faculty</h2>
    <p class="my-6">Our faculty is composed of experienced professionals who are dedicated to providing the best education possible.</p>
    <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Meet Our Faculty</button>
  </section>

  <section id="testimonials" class="container mx-auto px-6 py-12">
    <h2 class="text-3xl">Testimonials</h2>
    <p class="my-6">Hear what our students have to say about their experience at our institute.</p>
    <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Read Testimonials</button>
  </section>
</template>

<script setup>
// No script needed for this example
</script>