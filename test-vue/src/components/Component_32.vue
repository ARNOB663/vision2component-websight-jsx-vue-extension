<template>
  <header class="bg-white text-gray-800">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span class="ml-3 text-xl">Education Institution</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="#degree-programs" class="mr-5 hover:text-gray-900">Degree Programs</a>
        <a href="#student-resources" class="mr-5 hover:text-gray-900">Student Resources</a>
        <a href="#campus-events" class="mr-5 hover:text-gray-900">Campus Events</a>
      </nav>
    </div>
  </header>

  <main class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <section id="degree-programs" class="w-full md:w-1/2">
      <h2>Degree Programs</h2>
      <p>At our institution, we offer a wide range of degree programs. Our curriculum is designed to prepare students for a career in the 21st century.</p>
    </section>

    <section id="student-resources" class="w-full md:w-1/2">
      <h2>Student Resources</h2>
      <p>We provide a variety of resources to help our students succeed. These resources include tutoring, study guides, and online learning tools.</p>
    </section>

    <section id="campus-events" class="w-full md:w-1/2">
      <h2>Campus Events</h2>
      <p>We host a variety of events throughout the year. These events provide opportunities for students to engage with their peers and learn from industry professionals.</p>
    </section>
  </main>

  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6">
          <a href="#" class="text-gray-500 hover:text-gray-900">Home</a>
        </div>
        <div class="flex-1 mb-6">
          <a href="#" class="text-gray-500 hover:text-gray-900">About</a>
        </div>
        <div class="flex-1 mb-6">
          <a href="#" class="text-gray-500 hover:text-gray-900">Contact</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>