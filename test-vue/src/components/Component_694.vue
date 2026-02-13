<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Logo</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          About
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Services
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Contact
        </a>
      </div>
    </div>
  </nav>
  <div class="container mx-auto">
    <section class="flex flex-col md:flex-row">
      <div class="md:w-1/2 p-6">
        <h2 class="text-4xl font-bold mb-4">Welcome to our Software Development Company</h2>
        <p class="text-lg leading-normal mb-4">
          We are a team of experienced software developers who are passionate about creating innovative and efficient software solutions. Our team has a wide range of skills and experience, and we are always looking for new challenges to tackle.
        </p>
        <p class="text-lg leading-normal mb-4">
          We specialize in a variety of technologies, including Java, Python, and JavaScript. We also have experience with a variety of frameworks and tools, including Spring, Django, and React.
        </p>
      </div>
      <div class="md:w-1/2 p-6">
        <img class="h-64 lg:h-auto" src="https://static.photos/technology/900x600/96.webp" alt="Software Development">
      </div>
    </section>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here */
</style>