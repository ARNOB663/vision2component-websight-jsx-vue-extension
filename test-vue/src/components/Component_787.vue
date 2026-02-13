<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white text-gray-800">
      <nav class="container mx-auto flex items-center justify-between flex-wrap p-6">
        <div class="flex items-center flex-shrink-0 mr-6">
          <span class="font-semibold text-xl tracking-tight">Educational Institution</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a href="#programs" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Programs
            </a>
            <a href="#facilities" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Facilities
            </a>
            <a href="#admissions" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Admissions
            </a>
            <a href="#achievements" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Achievements
            </a>
          </div>
        </div>
      </nav>
    </header>

    <section id="banner" class="bg-gray-800 text-white">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 class="my-4 text-5xl font-bold leading-tight">Welcome to Our Educational Institution</h1>
          <p class="leading-normal text-2xl mb-8">We are a premier institution dedicated to providing quality education to our students. Our programs are designed to prepare students for a successful future in the 21st century.</p>
        </div>
        <div class="w-full md:w-3/5 py-6 text-center">
          <img class="w-full md:w-4/5 z-50 mx-auto" src="https://static.photos/education/900x600/189.webp" alt="Educational Institution">
        </div>
      </div>
    </section>

    <section id="programs" class="bg-white py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Our Programs</h2>
        <!-- Add your programs here -->
      </div>
    </section>

    <section id="facilities" class="bg-gray-100 py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Our Facilities</h2>
        <!-- Add your facilities here -->
      </div>
    </section>

    <section id="admissions" class="bg-white py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Admissions</h2>
        <!-- Add your admissions information here -->
      </div>
    </section>

    <section id="achievements" class="bg-gray-100 py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Our Achievements</h2>
        <!-- Add your achievements here -->
      </div>
    </section>
  </div>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>