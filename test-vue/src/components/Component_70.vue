<template>
  <header class="flex justify-center items-center h-64 bg-black">
    <img src="https://picsum.photos/seed/70/300/300" alt="Law Firm Logo" class="h-32">
  </header>

  <nav class="flex justify-center items-center h-16 bg-gold">
    <ul class="flex space-x-4">
      <li><a href="#home" class="text-white">Home</a></li>
      <li><a href="#about" class="text-white">About</a></li>
      <li><a href="#services" class="text-white">Services</a></li>
      <li><a href="#contact" class="text-white">Contact</a></li>
    </ul>
  </nav>

  <main>
    <section id="home" class="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: 'url(https://picsum.photos/seed/70/1600/900)' }">
      <h1 class="text-4xl">Welcome to Our Law Firm</h1>
      <p class="text-xl">We are a team of experienced attorneys dedicated to providing the highest level of service to our clients.</p>
    </section>

    <section id="about" class="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: 'url(https://picsum.photos/seed/70/1600/900)' }">
      <h1 class="text-4xl">About Us</h1>
      <p class="text-xl">Our firm was founded in 2005 with the goal of providing quality legal services to our clients. We have a team of experienced attorneys who are dedicated to providing the highest level of service.</p>
    </section>

    <section id="services" class="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: 'url(https://picsum.photos/seed/70/1600/900)' }">
      <h1 class="text-4xl">Our Services</h1>
      <p class="text-xl">We offer a wide range of legal services including criminal defense, personal injury, family law, and more.</p>
    </section>

    <section id="contact" class="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: 'url(https://picsum.photos/seed/70/1600/900)' }">
      <h1 class="text-4xl">Contact Us</h1>
      <p class="text-xl">Phone: 123-456-7890</p>
      <p class="text-xl">Email: info@ourlawfirm.com</p>
    </section>
  </main>

  <footer class="flex justify-center items-center h-16 bg-gold">
    <p class="text-white">© 2022 Our Law Firm. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>