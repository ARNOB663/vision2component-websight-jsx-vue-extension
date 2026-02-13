<template>
  <header class="w-full h-64 bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/business/1600x900/83.webp)' }">
    <div class="flex items-center justify-between px-4 py-6 bg-black bg-opacity-50">
      <h1 class="text-4xl text-white">Tech Company</h1>
      <nav class="text-white">
        <a href="#" class="px-2 py-1 hover:bg-white hover:bg-opacity-25">Home</a>
        <a href="#" class="px-2 py-1 hover:bg-white hover:bg-opacity-25">About</a>
        <a href="#" class="px-2 py-1 hover:bg-white hover:bg-opacity-25">Services</a>
        <a href="#" class="px-2 py-1 hover:bg-white hover:bg-opacity-25">Contact</a>
      </nav>
    </div>
  </header>
  <main class="flex">
    <aside class="w-1/4 p-4 bg-white">
      <h2 class="text-2xl">About Us</h2>
      <p class="my-4">
        Tech Company is a leading provider of innovative technology solutions. We specialize in providing top-notch software development services, offering a wide range of services including web development, mobile app development, and more. Our team of experienced developers and designers work together to create unique and high-quality products that meet the needs of our clients.
      </p>
    </aside>
    <section class="w-3/4 p-4">
      <h2 class="text-2xl">Our Services</h2>
      <p class="my-4">
        At Tech Company, we offer a wide range of services to meet your technology needs. Whether you're looking for a simple website or a complex software application, we have the expertise to deliver. Our services include web development, mobile app development, cloud solutions, and more. We work closely with our clients to understand their needs and deliver solutions that meet their business objectives.
      </p>
    </section>
  </main>
</template>

<script setup>
// No script needed for this example
</script>