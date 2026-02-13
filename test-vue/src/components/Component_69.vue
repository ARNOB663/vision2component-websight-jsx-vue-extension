<template>
  <header class="bg-white text-gray-800">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span class="ml-3 text-xl">Tech Company</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="#about" class="mr-5 hover:text-gray-900">About</a>
        <a href="#services" class="mr-5 hover:text-gray-900">Services</a>
        <a href="#contact" class="mr-5 hover:text-gray-900">Contact</a>
      </nav>
    </div>
  </header>

  <main>
    <section id="about" class="bg-white py-16">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">About Us</h2>
        <p class="text-gray-800 text-lg mx-auto leading-relaxed">
          At Tech Company, we are dedicated to providing the best technology solutions for our clients. Our team of experts is committed to delivering high-quality, reliable, and innovative products and services. We are passionate about technology and are always looking for new ways to improve and innovate.
        </p>
      </div>
    </section>

    <section id="services" class="bg-gray-200 py-16">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Our Services</h2>
        <p class="text-gray-800 text-lg mx-auto leading-relaxed">
          We offer a wide range of services including software development, web design, mobile app development, and more. Our team of experts is skilled in a variety of programming languages and technologies.
        </p>
      </div>
    </section>

    <section id="contact" class="bg-white py-16">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Contact Us</h2>
        <p class="text-gray-800 text-lg mx-auto leading-relaxed">
          We would love to hear from you. Please contact us using the form below or give us a call at 123-456-7890.
        </p>
      </div>
    </section>
  </main>

  <footer class="bg-gray-800 text-gray-300 py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <div class="w-full">
        <p class="text-center">© 2022 Tech Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Tailwind CSS styles will be automatically included if you have it set up in your project */
</style>