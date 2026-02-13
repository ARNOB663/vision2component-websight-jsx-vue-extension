<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Law Firm</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#services" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Services
        </a>
        <a href="#about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          About Us
        </a>
        <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Contact
        </a>
      </div>
    </div>
  </nav>

  <section id="services" class="py-8 px-4 bg-white">
    <h2 class="text-2xl font-bold mb-4">Our Services</h2>
    <p class="text-gray-600">We offer a wide range of legal services to meet your needs. From personal injury to real estate, we have the expertise to get you the justice you deserve.</p>
  </section>

  <section id="about" class="py-8 px-4 bg-gray-100">
    <h2 class="text-2xl font-bold mb-4">About Us</h2>
    <p class="text-gray-600">We are a team of experienced attorneys who are dedicated to providing the best possible service to our clients. Our firm is committed to providing high-quality legal services in a professional and ethical manner.</p>
  </section>

  <section id="contact" class="py-8 px-4 bg-white">
    <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
    <p class="text-gray-600">Phone: 123-456-7890</p>
    <p class="text-gray-600">Email: info@lawfirm.com</p>
    <p class="text-gray-600">Address: 123 Main St, Anytown, USA</p>
  </section>
</template>

<script setup>
// No script needed for this example
</script>