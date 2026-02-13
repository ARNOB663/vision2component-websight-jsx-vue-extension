<template>
  <div class="bg-gray-100">
    <header class="flex justify-center items-center h-screen bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/business/1600x900/157.webp)' }">
      <h1 class="text-5xl text-white font-bold">Welcome to Our Tech Company</h1>
    </header>

    <nav class="flex justify-center items-center space-x-4 py-4 bg-gray-800 text-white">
      <a href="#" class="px-4 py-2">Home</a>
      <a href="#" class="px-4 py-2">About</a>
      <a href="#" class="px-4 py-2">Services</a>
      <a href="#" class="px-4 py-2">Contact</a>
    </nav>

    <main class="max-w-screen-lg mx-auto p-4">
      <section class="my-8">
        <h2 class="text-3xl mb-4">About Us</h2>
        <p class="text-lg">We are a leading provider of cutting-edge technology solutions. Our team of experts is dedicated to delivering the best possible service to our clients. We strive to stay at the forefront of the latest technological advancements, ensuring our clients are always equipped with the most innovative and effective tools.</p>
      </section>

      <hr class="my-8">

      <section class="my-8">
        <h2 class="text-3xl mb-4">Our Services</h2>
        <p class="text-lg">At our company, we offer a wide range of services to meet your technological needs. Whether you're looking for custom software development, cloud solutions, or data analytics, we have the expertise to help. Our services are designed to be flexible and scalable, ensuring that you can grow with your business as it grows.</p>
      </section>

      <hr class="my-8">

      <section class="my-8">
        <h2 class="text-3xl mb-4">Contact Us</h2>
        <p class="text-lg">We'd love to hear from you. Whether you have a question about our services, need help with a project, or just want to say hello, please don't hesitate to get in touch. You can reach us by phone, email, or by filling out the form on our website.</p>
      </section>
    </main>

    <footer class="bg-gray-800 text-white text-center p-4">
      <p class="text-lg">© 2022 Our Tech Company. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>