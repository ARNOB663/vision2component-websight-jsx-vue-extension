<template>
  <header class="bg-white text-center">
    <div class="text-gray-800 py-20 px-6">
      <h1 class="text-5xl font-bold mt-0 mb-6">Welcome to Our Health Care Provider</h1>
      <p class="text-2xl font-bold mb-8">We are committed to providing the best care for you.</p>
    </div>
  </header>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Our Health Care Provider</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#services" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Services
        </a>
        <a href="#appointments" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Appointments
        </a>
      </div>
    </div>
  </nav>
  <main class="container mx-auto px-4 py-12">
    <section id="services" class="mb-12">
      <h2 class="text-3xl font-bold mb-6">Our Services</h2>
      <p class="mb-4">We offer a wide range of services to meet your health needs. From primary care to specialty care, we have you covered.</p>
    </section>
    <section id="appointments" class="mb-12">
      <h2 class="text-3xl font-bold mb-6">Appointments</h2>
      <p class="mb-4">Schedule your appointments with us today.</p>
    </section>
  </main>
</template>

<script setup>
// No script needed for this basic template
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>