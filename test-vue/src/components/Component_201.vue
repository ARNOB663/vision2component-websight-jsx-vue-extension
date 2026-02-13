<template>
  <div class="flex flex-col md:flex-row bg-gray-100 font-sans leading-normal tracking-normal">
    <div class="w-full md:w-1/4 bg-white p-4">
      <h1 class="text-2xl font-bold">Non-Profit Organization</h1>
      <nav class="mt-4">
        <ul>
          <li class="mb-2"><a href="#" class="text-pink-500 hover:text-pink-700">Stories</a></li>
          <li class="mb-2"><a href="#" class="text-pink-500 hover:text-pink-700">Events</a></li>
          <li><a href="#" class="text-pink-500 hover:text-pink-700">Volunteer Opportunities</a></li>
        </ul>
      </nav>
    </div>
    <div class="w-full md:w-3/4 bg-white p-4">
      <img src="https://picsum.photos/seed/201/900/600" alt="Non-Profit Organization" class="w-full h-64 object-cover">
      <div class="my-8">
        <h2 class="text-2xl font-bold">Donate Now</h2>
        <p class="my-4">Your donation will help us to continue our mission of providing support to those in need. Every donation, no matter how small, makes a big difference.</p>
        <a href="#" class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Donate Now</a>
      </div>
      <div class="my-8">
        <h2 class="text-2xl font-bold">Stories</h2>
        <p class="my-4">Read about the impact our organization has made in the lives of those we serve.</p>
        <!-- Add your stories here -->
      </div>
      <div class="my-8">
        <h2 class="text-2xl font-bold">Events</h2>
        <p class="my-4">Check out our upcoming events and get involved.</p>
        <!-- Add your events here -->
      </div>
      <div class="my-8">
        <h2 class="text-2xl font-bold">Volunteer Opportunities</h2>
        <p class="my-4">We are always looking for volunteers to help us in our mission.</p>
        <!-- Add your volunteer opportunities here -->
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>