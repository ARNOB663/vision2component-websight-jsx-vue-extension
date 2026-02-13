<template>
  <header class="fixed w-full bg-white shadow-md p-4">
    <div class="flex items-center justify-between">
      <img src="https://static.photos/art/300x300/32.webp" alt="Logo" class="h-10">
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#home" class="text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="#practice-areas" class="text-gray-600 hover:text-gray-900">Practice Areas</a></li>
          <li><a href="#attorneys" class="text-gray-600 hover:text-gray-900">Attorneys</a></li>
          <li><a href="#news" class="text-gray-600 hover:text-gray-900">News</a></li>
          <li><a href="#contact" class="text-gray-600 hover:text-gray-900">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="container mx-auto mt-20 px-4">
    <section id="home" class="py-10">
      <h1 class="text-3xl font-bold mb-4">Welcome to Our Law Firm</h1>
      <p class="mb-4">We are a team of experienced and dedicated lawyers who are committed to providing the highest level of service to our clients. Our firm is dedicated to providing the highest level of service to our clients.</p>
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Contact Us
      </button>
    </section>

    <section id="practice-areas" class="py-10">
      <h2 class="text-2xl font-bold mb-4">Practice Areas</h2>
      <p class="mb-4">We have a wide range of practice areas including...</p>
    </section>

    <section id="attorneys" class="py-10">
      <h2 class="text-2xl font-bold mb-4">Attorneys</h2>
      <p class="mb-4">Our team of attorneys includes...</p>
    </section>

    <section id="news" class="py-10">
      <h2 class="text-2xl font-bold mb-4">News</h2>
      <p class="mb-4">Stay updated with our latest news...</p>
    </section>

    <section id="contact" class="py-10">
      <h2 class="text-2xl font-bold mb-4">Contact</h2>
      <p class="mb-4">Get in touch with us...</p>
    </section>
  </main>
</template>

<script setup>
// Your script logic here if needed
</script>

<style scoped>
/* Add any scoped styles here */
</style>