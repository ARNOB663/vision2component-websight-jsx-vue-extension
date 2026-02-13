<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(\'https://static.photos/people/1600x900/112.webp\')' }">
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">Non-Profit Organization</span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a href="#mission" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Mission
            </a>
            <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>

    <main class="container mx-auto px-4 py-8">
      <section id="mission" class="my-8">
        <h2 class="text-3xl">Our Mission</h2>
        <p class="my-4">
          At Non-Profit Organization, we believe in the power of love and kindness. We are a community of people who are dedicated to helping each other. We believe that everyone deserves a chance to live a happy and fulfilling life, and we are here to make that a reality.
        </p>
        <a href="#donate" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
          Donate Now
        </a>
      </section>
    </main>

    <footer id="contact" class="bg-gray-800 text-white p-6">
      <p>
        Non-Profit Organization<br>
        123 Main St<br>
        City, State 12345<br>
        Phone: (123) 456-7890<br>
        Email: info@nonprofit.org
      </p>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>