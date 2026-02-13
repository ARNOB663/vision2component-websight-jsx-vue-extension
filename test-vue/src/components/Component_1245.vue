<template>
  <div class="bg-gray-100">
    <header class="flex items-center justify-between p-4 bg-white shadow">
      <img src="https://static.photos/business/300x300/47.webp" alt="Logo" class="h-10">
      <input type="text" placeholder="Search..." class="px-4 py-2 rounded-full">
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#about" class="text-gray-600 hover:text-gray-800">About Us</a></li>
          <li><a href="#products" class="text-gray-600 hover:text-gray-800">Products</a></li>
          <li><a href="#services" class="text-gray-600 hover:text-gray-800">Services</a></li>
        </ul>
      </nav>
    </header>

    <main class="container mx-auto p-4">
      <section id="about" class="mb-8">
        <h2 class="text-2xl font-bold mb-4">About Us</h2>
        <p>At Tech Innovations, we are dedicated to providing cutting-edge solutions that empower businesses to thrive in today's digital landscape. With a team of experts and a commitment to excellence, we strive to deliver innovative products and services that set us apart from the competition. Our mission is to help our clients achieve their goals through smart, effective technology. Join us on this exciting journey of innovation!</p>
      </section>

      <section id="products" class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Products</h2>
        <p>Our product line includes a range of high-quality software solutions designed to enhance productivity and streamline operations. From CRM systems to project management tools, our products are built with the latest technologies and user-friendly interfaces to ensure ease of use and maximum efficiency. Whether you're looking for a solution to improve your customer experience or automate internal processes, our products have got you covered.</p>
      </section>

      <section id="services">
        <h2 class="text-2xl font-bold mb-4">Services</h2>
        <p>At Tech Innovations, we offer a wide array of services tailored to meet the unique needs of our clients. Our expert team can help you navigate the complex world of technology, providing guidance and support every step of the way. From custom software development to IT consulting, our services cover everything from strategy to implementation. We understand that technology is not just about tools; it's about empowering your organization to succeed. Let us help you unlock the full potential of your business with our comprehensive services.</p>
      </section>
    </main>
  </div>
</template>

<script setup>
// No script needed for this example
</script>