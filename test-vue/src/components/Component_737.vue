<template>
  <header class="w-full h-64 bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/education/1600x900/138.webp)' }">
    <div class="container mx-auto px-6 py-3 flex justify-between items-center">
      <img class="h-10" src="https://static.photos/education/300x300/139.webp" alt="Logo">
      <nav>
        <ul class="flex">
          <li class="mr-3"><a class="text-gray-700 hover:text-pink-500" href="#">Home</a></li>
          <li class="mr-3"><a class="text-gray-700 hover:text-pink-500" href="#">About</a></li>
          <li class="mr-3"><a class="text-gray-700 hover:text-pink-500" href="#">Courses</a></li>
          <li><a class="text-gray-700 hover:text-pink-500" href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <main class="container mx-auto px-6 py-3">
    <section>
      <h1 class="text-3xl font-bold mb-3">Welcome to Our Educational Institution</h1>
      <p class="mb-3">At our institution, we believe in the power of education to transform lives. We offer a wide range of courses in various fields, from science to literature, from technology to art. Our experienced and dedicated faculty are committed to providing a supportive and engaging learning environment.</p>
      <p>Our courses are designed to meet the needs of students of all ages and abilities. Whether you're just starting out or looking to advance your skills, we have something for you.</p>
    </section>
  </main>
</template>

<script setup>
// No script needed for this basic example
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>