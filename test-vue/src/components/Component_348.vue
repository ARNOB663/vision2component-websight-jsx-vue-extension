<template>
  <header class="w-full h-64 bg-cover bg-center" :style="{ backgroundImage: 'url(https://picsum.photos/seed/348/1600/900)' }">
    <nav class="flex items-center justify-between flex-wrap bg-green-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Construction Company</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#services" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Services
          </a>
          <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  </header>

  <div class="flex flex-wrap">
    <aside class="w-full lg:w-1/3 p-4">
      <h2 class="text-2xl font-bold mb-4">Contact Information</h2>
      <p class="mb-2">123 Main St</p>
      <p class="mb-2">Anytown, USA 12345</p>
      <p class="mb-2">Phone: (123) 456-7890</p>
      <p class="mb-2">Email: info@constructioncompany.com</p>
    </aside>

    <main class="w-full lg:w-2/3 p-4">
      <h1 class="text-3xl font-bold mb-4">Welcome to Construction Company</h1>
      <p class="mb-4">
        At Construction Company, we are committed to providing our clients with the highest quality construction services. Our team of experienced professionals is dedicated to ensuring that every project is completed on time, within budget, and to the highest standards of safety and quality.
      </p>
      <p class="mb-4">
        We specialize in a wide range of construction projects, including residential, commercial, and industrial. Whether you are looking for a new home, a commercial building, or industrial facilities, we have the expertise and resources to get the job done right.
      </p>
      <p class="mb-4">
        We believe in building relationships with our clients, and we strive to provide exceptional service that exceeds their expectations. Whether you are a seasoned contractor or a first-time client, we are here to help you every step of the way.
      </p>
    </main>
  </div>
</template>

<script setup>
// No script needed for this example
</script>