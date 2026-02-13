<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://picsum.photos/seed/30/1600/900)' }">
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Food Restaurant</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#menu" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Menu</a>
          <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  </header>
  <main class="container mx-auto px-4 py-8">
    <section id="about">
      <h2 class="text-3xl mb-4">About Us</h2>
      <p class="mb-4">
        Welcome to Food Restaurant, where we serve the best food in town. Our dishes are made with the freshest ingredients and cooked to perfection. We are open 24/7, so come on in and enjoy a meal with us.
      </p>
    </section>
    <section id="menu">
      <h2 class="text-3xl mb-4">Menu</h2>
      <p class="mb-4">
        Our menu is constantly evolving to keep up with the latest trends in food. We offer a wide variety of dishes, from classic favorites to unique creations.
      </p>
    </section>
    <section id="contact">
      <h2 class="text-3xl mb-4">Contact Us</h2>
      <p class="mb-4">
        You can find us at 123 Main St, Anytown, USA. Our phone number is 555-123-4567 and our email is info@foodrestaurant.com.
      </p>
    </section>
  </main>
  <footer class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <span class="ml-3 text-xl">Food Restaurant</span>
      </a>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a href="#menu" class="mr-5 hover:text-white">Menu</a>
        <a href="#contact" class="hover:text-white">Contact</a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>