<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white text-center">
      <h1 class="text-5xl p-5">Welcome to Our Educational Institution</h1>
      <p class="text-xl p-5">We are a premier institution dedicated to providing high-quality education to our students.</p>
    </header>

    <nav class="bg-yellow-500 text-white p-4">
      <ul class="flex justify-center space-x-8">
        <li><a href="#">Academic Calendar</a></li>
        <li><a href="#">Student Services</a></li>
        <li>
          <form>
            <input type="text" placeholder="Search..." />
          </form>
        </li>
      </ul>
    </nav>

    <main class="flex flex-col items-center p-5 space-y-5">
      <section>
        <h2 class="text-3xl">About Us</h2>
        <p class="text-lg">Our institution is committed to providing a rigorous academic experience that prepares students for success in college and beyond.</p>
      </section>

      <section>
        <h2 class="text-3xl">Our Faculty</h2>
        <p class="text-lg">Our faculty is composed of highly qualified and experienced professionals who are dedicated to providing a stimulating and supportive learning environment.</p>
      </section>
    </main>

    <footer class="bg-yellow-500 text-white p-4">
      <ul class="flex justify-center space-x-8">
        <li><a href="#">Tuition Information</a></li>
        <li><a href="#">Newsletter Signup</a></li>
        <li><a href="#">Campus Maps</a></li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>