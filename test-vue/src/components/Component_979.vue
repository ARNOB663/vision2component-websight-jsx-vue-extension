<template>
  <div class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/technology/1600x900/180.webp)' }">
    <header class="flex items-center justify-between flex-wrap p-6 bg-white shadow-md">
      <div class="flex items-center flex-shrink-0 mr-6">
        <span class="font-semibold text-xl tracking-tight">Tech Startup</span>
      </div>
      <nav class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#mission" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Mission
          </a>
          <a href="#services" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Services
          </a>
          <a href="#team" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Team
          </a>
        </div>
        <div>
          <a href="#contact" class="inline-block px-4 py-2 leading-none border rounded text-teal-200 border-white hover:border-transparent hover:text-white hover:bg-white mt-4 lg:mt-0">Contact Us</a>
        </div>
      </nav>
    </header>
    <main class="container mx-auto px-4 py-8">
      <section id="mission" class="my-8">
        <h2 class="text-3xl">Our Mission</h2>
        <p class="my-4">At Tech Startup, we are dedicated to providing innovative and cutting-edge technology solutions to businesses of all sizes. Our mission is to help our clients succeed by leveraging the latest technologies and trends in the industry.</p>
      </section>
      <section id="services" class="my-8">
        <h2 class="text-3xl">Our Services</h2>
        <p class="my-4">We offer a wide range of services including software development, web design, mobile app development, and more. Our team of experts is ready to help you with your technology needs.</p>
      </section>
      <section id="team" class="my-8">
        <h2 class="text-3xl">Our Team</h2>
        <p class="my-4">Our team is made up of experienced professionals with a passion for technology. We are committed to delivering the best possible solutions for our clients.</p>
      </section>
    </main>
    <footer class="bg-gray-800 text-white text-center py-8">
      <p>© 2022 Tech Startup. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>