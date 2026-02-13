<template>
  <header class="flex items-center justify-between bg-white p-4">
    <img src="https://static.photos/education/300x300/170.webp" alt="Logo" class="h-8">
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#programs" class="text-green-500 hover:text-green-700">Programs</a></li>
        <li><a href="#admissions" class="text-green-500 hover:text-green-700">Admissions</a></li>
        <li><a href="#contact" class="text-green-500 hover:text-green-700">Contact Us</a></li>
      </ul>
    </nav>
  </header>

  <section class="relative">
    <img src="https://static.photos/education/900x600/171.webp" alt="Campus" class="w-full">
    <div class="absolute inset-0 flex items-center justify-center">
      <h1 class="text-4xl text-white">Welcome to Our Education Institution</h1>
    </div>
  </section>

  <main class="container mx-auto p-4">
    <section id="programs" class="my-8">
      <h2 class="text-2xl">Programs</h2>
      <p class="my-4">At our institution, we offer a wide range of programs designed to meet the needs of our students. Our programs are flexible and can be tailored to meet the individual needs of each student.</p>
    </section>

    <section id="admissions" class="my-8">
      <h2 class="text-2xl">Admissions</h2>
      <p class="my-4">We are currently accepting applications for the upcoming academic year. Please visit our admissions page for more information and to apply.</p>
    </section>

    <section id="contact" class="my-8">
      <h2 class="text-2xl">Contact Us</h2>
      <p class="my-4">We would love to hear from you. Please use our contact form to get in touch with us.</p>
    </section>
  </main>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>