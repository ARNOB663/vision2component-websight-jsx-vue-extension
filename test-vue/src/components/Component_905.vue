<template>
  <div class="bg-red-500 text-white">
    <header class="bg-green-800 p-4 flex items-center justify-between">
      <h1 class="text-2xl">Educational Institution</h1>
      <nav>
        <ul class="flex">
          <li class="mr-4"><a href="#admissions" class="text-white">Admissions</a></li>
          <li class="mr-4"><a href="#courses" class="text-white">Courses</a></li>
          <li><a href="#info" class="text-white">Information</a></li>
        </ul>
      </nav>
    </header>

    <main class="p-4">
      <section id="admissions" class="mb-4">
        <h2 class="text-xl mb-2">Admissions</h2>
        <p>At our educational institution, we offer a wide range of courses to suit your needs. Whether you're interested in a degree, a certificate, or a diploma, we have something for everyone. Our courses are designed to provide you with the knowledge and skills you need to succeed in your chosen field.</p>
        <button class="bg-green-500 text-white px-4 py-2 mt-4">Apply Now</button>
      </section>

      <section id="courses" class="mb-4">
        <h2 class="text-xl mb-2">Courses</h2>
        <p>Our courses are designed to provide you with the knowledge and skills you need to succeed in your chosen field. We offer a wide range of courses, from beginner to advanced levels, so you can choose the one that best fits your needs.</p>
        <button class="bg-green-500 text-white px-4 py-2 mt-4">View Courses</button>
      </section>

      <section id="info">
        <h2 class="text-xl mb-2">Information</h2>
        <p>We are a leading educational institution, offering a wide range of courses to suit your needs. Our experienced and dedicated staff are committed to providing you with the best possible education.</p>
        <button class="bg-green-500 text-white px-4 py-2 mt-4">Contact Us</button>
      </section>
    </main>
  </div>
</template>

<script setup>
// Your script logic here if needed
</script>

<style scoped>
/* Add any scoped styles here */
</style>