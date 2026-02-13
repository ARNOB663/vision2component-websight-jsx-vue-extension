<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://static.photos/people/1600x900/49.webp)' }">
    <div class="flex items-center justify-center h-full">
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Donate Now
      </button>
    </div>
  </header>

  <main class="container mx-auto p-4">
    <section id="about" class="my-8">
      <h2 class="text-2xl font-bold mb-4">About Us</h2>
      <p class="text-lg">
        We are a nonprofit organization dedicated to making a difference in the world. We believe in the power of compassion and kindness, and we strive to use our skills and resources to help those in need.
      </p>
    </section>

    <section id="programs" class="my-8">
      <h2 class="text-2xl font-bold mb-4">Programs</h2>
      <p class="text-lg">
        We offer a variety of programs to meet the needs of our community. These include food drives, clothing drives, and educational workshops.
      </p>
    </section>

    <section id="volunteer" class="my-8">
      <h2 class="text-2xl font-bold mb-4">Volunteer</h2>
      <p class="text-lg">
        We are always looking for volunteers to help us in our mission. Whether you're a professional in a particular field or just a passionate individual, there's a place for you here.
      </p>
    </section>

    <section id="donate" class="my-8">
      <h2 class="text-2xl font-bold mb-4">Donate</h2>
      <p class="text-lg">
        Your donation will help us continue to provide the services we are passionate about. Every donation, no matter how small, makes a big difference.
      </p>
    </section>
  </main>
</template>

<script setup>
// No script needed for this simple template
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>