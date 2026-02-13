<template>
  <header class="w-full h-screen bg-cover bg-center" :style="{ backgroundImage: 'url(https://picsum.photos/seed/313/1600/900)' }">
    <div class="container mx-auto px-6 py-12 md:py-24">
      <img class="mx-auto mb-6" src="https://picsum.photos/seed/313/300/300" alt="Logo">
      <h1 class="text-4xl md:text-5xl text-white text-center font-semibold">Welcome to Our Non-Profit Organization</h1>
      <a class="block w-full md:w-auto bg-white text-pink-500 hover:bg-pink-600 text-sm md:text-base px-4 py-2 rounded mt-8 md:mt-12 md:ml-8 md:inline-block" href="#">Get Involved</a>
    </div>
  </header>
  <nav class="container mx-auto px-6 py-4">
    <ul class="flex flex-wrap text-sm md:text-base">
      <li class="mr-6"><a class="text-pink-500 hover:text-pink-600" href="#mission">Mission</a></li>
      <li class="mr-6"><a class="text-pink-500 hover:text-pink-600" href="#stories">Stories</a></li>
      <li><a class="text-pink-500 hover:text-pink-600" href="#opportunities">Opportunities</a></li>
    </ul>
  </nav>
  <main class="container mx-auto px-6 py-12">
    <section id="mission" class="mb-12">
      <h2 class="text-2xl md:text-3xl text-center font-semibold mb-6">Our Mission</h2>
      <p class="text-lg text-gray-600">Our mission is to provide a welcoming and supportive environment for all, regardless of their background or circumstances. We believe in the power of community and strive to make a positive impact in our community and beyond.</p>
    </section>
    <section id="stories" class="mb-12">
      <h2 class="text-2xl md:text-3xl text-center font-semibold mb-6">Our Stories</h2>
      <p class="text-lg text-gray-600">We have been working tirelessly to make a difference in our community. Here are some of our success stories.</p>
    </section>
    <section id="opportunities">
      <h2 class="text-2xl md:text-3xl text-center font-semibold mb-6">Opportunities to Get Involved</h2>
      <p class="text-lg text-gray-600">We are always looking for volunteers and donors to help us achieve our mission.</p>
    </section>
  </main>
</template>

<script setup>
// No script needed for this example
</script>