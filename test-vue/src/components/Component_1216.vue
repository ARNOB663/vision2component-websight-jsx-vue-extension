<template>
  <div class="w-full h-64 bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/education/1600x900/17.webp)' }">
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Educational Institution</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#section1" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About Us
          </a>
          <a href="#section2" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Our Programs
          </a>
          <a href="#section3" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  </div>

  <section id="section1" class="bg-white py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-4">About Us</h2>
      <p class="text-gray-600">
        At our educational institution, we are committed to providing a high-quality education that prepares students for success in their chosen fields. Our experienced faculty and innovative curriculum are designed to help students reach their full potential.
      </p>
    </div>
  </section>

  <section id="section2" class="bg-teal-100 py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-4">Our Programs</h2>
      <p class="text-gray-600">
        We offer a wide range of programs to meet the needs of all students. Whether you're interested in a degree program, a certificate, or a professional training course, we have something for you.
      </p>
    </div>
  </section>

  <section id="section3" class="bg-white py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-4">Contact Us</h2>
      <p class="text-gray-600">
        We'd love to hear from you. Please contact us at info@educationalinstitution.com or by phone at 555-555-5555.
      </p>
    </div>
  </section>
</template>

<script setup>
// No script needed for this example
</script>