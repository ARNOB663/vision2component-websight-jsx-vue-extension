<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Healthcare Center</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Home
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          About
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Contact
        </a>
      </div>
    </div>
  </nav>
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">Welcome to Healthcare Center</h1>
    <p class="mb-4">At Healthcare Center, we are committed to providing the highest quality of care to our patients. Our team of experienced healthcare professionals is dedicated to providing compassionate, professional, and effective care to all of our patients. We believe in a holistic approach to health, which means that we treat the whole person, not just the symptoms.</p>
    <p class="mb-4">Our facilities are designed to be clean and comfortable, with a focus on patient safety and well-being. We offer a wide range of services, including primary care, specialty care, and preventive health services. We also offer 24/7 emergency care for any urgent needs.</p>
    <p class="mb-4">We are proud to be a member of the Better Care Health System, a network of hospitals and health systems that work together to provide high-quality, affordable health care to our patients.</p>
  </main>
  <footer class="bg-gray-800 text-white p-6">
    <div class="flex items-center justify-between flex-wrap">
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4">
            Patient Portal
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4">
            Insurance Accepted
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white">
            Contact Information
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this simple template
</script>