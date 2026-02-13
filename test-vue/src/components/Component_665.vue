<template>
  <header class="bg-red-500 text-white p-4">
    <nav class="flex justify-between">
      <div>
        <img src="https://static.photos/health/300x300/67.webp" alt="Logo">
      </div>
      <div>
        <ul class="flex space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  </header>

  <main class="flex p-4">
    <section class="w-2/3">
      <img src="https://static.photos/health/900x600/68.webp" alt="Hero Image">
      <h1 class="text-2xl my-4">Welcome to Our Healthcare Provider</h1>
      <p class="text-lg">
        At our healthcare provider, we are committed to providing the highest quality care to our patients. We are a team of experienced healthcare professionals dedicated to providing comprehensive, personalized care to our patients. Our services include primary care, specialty care, and wellness services. We are committed to providing the highest quality care to our patients.
      </p>
    </section>

    <aside class="w-1/3 bg-white p-4 ml-4 shadow">
      <h2 class="text-xl mb-4">Appointment Scheduling</h2>
      <p class="text-lg">
        Schedule your appointment today.
      </p>
      <!-- Appointment scheduling form goes here -->

      <h2 class="text-xl mt-8 mb-4">Insurance Options</h2>
      <p class="text-lg">
        We accept a variety of insurance options.
      </p>
      <!-- Insurance options information goes here -->
    </aside>
  </main>

  <footer class="bg-red-500 text-white p-4">
    <div class="flex justify-between">
      <div>
        <p>Hours of Operation:</p>
        <p>Monday - Friday: 9am - 5pm</p>
        <p>Saturday: 10am - 2pm</p>
        <p>Sunday: Closed</p>
      </div>
      <div>
        <p>Patient Resources:</p>
        <ul>
          <li>Billing</li>
          <li>Insurance Information</li>
          <li>Patient Portal</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Your script logic can go here if needed
</script>

<style scoped>
/* Add any scoped styles here */
</style>