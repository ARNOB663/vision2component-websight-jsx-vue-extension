<template>
  <header class="flex flex-col items-center justify-center h-screen bg-cover bg-center" :style="{ backgroundImage: 'url(https://picsum.photos/seed/188/1600/900)' }">
    <nav class="flex justify-center w-full p-4">
      <ul class="flex space-x-4 text-white">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <div class="flex flex-col items-center justify-center h-full text-white">
      <h1 class="text-4xl font-bold">Professional Services Company</h1>
      <p class="text-xl">We provide top-notch services for your business needs.</p>
      <button class="px-4 py-2 mt-4 text-white bg-blue-500 rounded">Schedule a Consultation</button>
    </div>
  </header>
  <main class="container mx-auto mt-8">
    <section class="mb-8">
      <h2 class="text-2xl font-bold">Our Services</h2>
      <p>We offer a wide range of services to help your business grow. From strategic planning to operational management, we have you covered.</p>
    </section>
    <section>
      <h2 class="text-2xl font-bold">Our Qualifications</h2>
      <p>Our team is made up of experienced professionals with a wide range of skills. We are committed to providing the best service possible.</p>
    </section>
  </main>
</template>

<script setup>
// No script needed for this example
</script>