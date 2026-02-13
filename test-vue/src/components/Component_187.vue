<template>
  <nav class="flex items-center justify-between flex-wrap bg-white p-6">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Health and Wellness Company</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#mission" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Mission
        </a>
        <a href="#services" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Services
        </a>
        <a href="#about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          About
        </a>
      </div>
    </div>
  </nav>

  <header class="bg-cover bg-center h-screen flex items-center" :style="{ backgroundImage: 'url(https://picsum.photos/seed/187/1600/900)' }">
    <div class="container mx-auto px-6 text-center">
      <h1 class="text-4xl font-bold mt-0 mb-12 text-white">
        Welcome to Health and Wellness Company
      </h1>
    </div>
  </header>

  <section id="mission" class="py-12 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold mb-4 text-center">Our Mission</h2>
      <p class="text-lg leading-loose text-center text-gray-700">
        At Health and Wellness Company, our mission is to provide a safe and supportive environment for all our clients. We believe in the power of wellness and strive to create a community where everyone feels heard and valued.
      </p>
    </div>
  </section>

  <section id="services" class="py-12 bg-gray-100">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold mb-4 text-center">Our Services</h2>
      <p class="text-lg leading-loose text-center text-gray-700">
        We offer a variety of services to help our clients reach their health and wellness goals. These include personalized workout plans, nutrition advice, and mental health support.
      </p>
    </div>
  </section>

  <section id="about" class="py-12 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold mb-4 text-center">About Us</h2>
      <p class="text-lg leading-loose text-center text-gray-700">
        Health and Wellness Company was founded in 2005 with the goal of creating a space where people can find the support they need to live their best lives.
      </p>
    </div>
  </section>
</template>

<script setup>
// No script needed for this example
</script>