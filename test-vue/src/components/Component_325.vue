<template>
  <nav class="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Consulting Firm</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          About
        </a>
        <a href="#services" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Services
        </a>
        <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Contact
        </a>
      </div>
    </div>
  </nav>

  <header class="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-bg">
    <h1 class="text-5xl text-white font-bold leading-tight">
      We provide top-notch consulting services for your business.
    </h1>
  </header>

  <main class="container mx-auto px-4 py-6">
    <section id="about">
      <h2 class="text-3xl">About Us</h2>
      <p>
        At Consulting Firm, we are committed to providing high-quality consulting services to help our clients achieve their business goals. Our team of experienced professionals is dedicated to delivering innovative solutions that meet the unique needs of each client.
      </p>
    </section>

    <section id="services">
      <h2 class="text-3xl">Our Services</h2>
      <p>
        We offer a wide range of consulting services, including strategic planning, business development, financial analysis, and more. Our services are designed to help our clients make informed decisions and achieve their business objectives.
      </p>
    </section>

    <section id="contact">
      <h2 class="text-3xl">Contact Us</h2>
      <p>
        If you're interested in learning more about our services or how we can help your business, please don't hesitate to contact us. We'd be happy to answer any questions you may have and discuss how we can help you.
      </p>
    </section>
  </main>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
.custom-bg {
  background-image: url('https://picsum.photos/1920/1080');
}
</style>