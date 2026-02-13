<template>
  <div class="bg-gray-200">
    <header class="flex justify-center items-center h-64 bg-yellow-500 text-white">
      <h1 class="text-4xl">Nonprofit Organization</h1>
    </header>

    <nav class="flex justify-center items-center h-16 bg-yellow-400 text-white">
      <ul class="flex space-x-4">
        <li><a href="#intro">Introduction</a></li>
        <li><a href="#events">Upcoming Events</a></li>
        <li><a href="#donate">Donate</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
    </nav>

    <main class="max-w-screen-lg mx-auto p-4">
      <section id="intro" class="my-8">
        <h2 class="text-3xl mb-4">Introduction</h2>
        <p class="text-lg">
          Welcome to our nonprofit organization, dedicated to making a difference in the world. We believe in the power of community and strive to create a better world for all.
        </p>
      </section>

      <section id="events" class="my-8">
        <h2 class="text-3xl mb-4">Upcoming Events</h2>
        <p class="text-lg">
          Stay updated with our upcoming events. We host a variety of events, from fundraisers to community building activities.
        </p>
      </section>

      <section id="donate" class="my-8">
        <h2 class="text-3xl mb-4">Donate</h2>
        <p class="text-lg">
          Your support is crucial to our mission. We rely on donations to provide the services we offer.
        </p>
      </section>

      <section id="testimonials" class="my-8">
        <h2 class="text-3xl mb-4">Testimonials</h2>
        <p class="text-lg">
          Hear what our volunteers and community members have to say about our organization.
        </p>
      </section>
    </main>

    <footer class="flex justify-center items-center h-16 bg-yellow-400 text-white">
      <p>© 2022 Nonprofit Organization</p>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>