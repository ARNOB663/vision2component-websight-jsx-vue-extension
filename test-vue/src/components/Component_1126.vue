<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://static.photos/people/1600x900/127.webp)' }">
    <nav class="container mx-auto px-6 py-4">
      <ul class="flex justify-end">
        <li class="mr-3"><a href="#" class="text-white">Get Involved</a></li>
        <li class="mr-3"><a href="#" class="text-white">Learn More</a></li>
      </ul>
    </nav>
    <div class="container mx-auto px-6 flex flex-col items-center justify-center h-full">
      <h1 class="text-4xl font-bold text-white text-center">Welcome to Our Community</h1>
      <p class="text-xl text-white text-center mt-4">We are a community of volunteers dedicated to making a difference in the world.</p>
      <a href="#" class="mt-8 inline-block px-8 py-4 bg-white text-pink-500 font-bold text-lg leading-tight uppercase rounded hover:bg-pink-500 hover:text-white transition duration-150 ease-in-out">Donate Now</a>
    </div>
  </header>
  <footer class="bg-pink-500 text-white py-12">
    <div class="container mx-auto px-6">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2">
          <h2 class="text-2xl font-bold mb-4">Mission Statement</h2>
          <p>Our mission is to provide a safe and supportive environment for our volunteers to make a difference in their communities.</p>
        </div>
        <div class="w-full md:w-1/2">
          <h2 class="text-2xl font-bold mb-4">Volunteer Opportunities</h2>
          <p>We are always looking for volunteers to help with various tasks such as fundraising, event planning, and community outreach.</p>
        </div>
        <div class="w-full md:w-1/2">
          <h2 class="text-2xl font-bold mb-4">Donor Recognition</h2>
          <p>We appreciate all of our donors and are proud to have them as part of our community.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>