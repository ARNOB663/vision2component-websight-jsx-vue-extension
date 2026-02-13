<template>
  <header class="bg-white p-4 flex justify-between items-center">
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <div class="flex space-x-4">
      <a href="#">Cart</a>
      <a href="#">Profile</a>
    </div>
  </header>

  <main class="container mx-auto my-8 px-4 grid grid-cols-2 gap-4">
    <div class="bg-white p-4">
      <img src="https://static.photos/fashion/900x600/155.webp" alt="Fashion Image">
      <h2 class="text-xl font-bold mt-4">Fashion Store</h2>
      <p class="mt-2">Welcome to our fashion store, where you can find the latest fashion trends. We offer a wide range of clothing, shoes, and accessories for all occasions. Our mission is to provide high-quality products at affordable prices. We are committed to providing our customers with the best shopping experience possible.</p>
    </div>
    <!-- Add more product items here -->
  </main>

  <footer class="bg-white p-4 flex justify-between items-center">
    <div>
      <p>Contact us: info@fashionstore.com</p>
    </div>
    <div class="flex space-x-4">
      <a href="#">Facebook</a>
      <a href="#">Twitter</a>
      <a href="#">Instagram</a>
    </div>
  </footer>
</template>

<script setup>
// Your script logic here if needed
</script>

<style scoped>
/* Your scoped styles here if needed */
</style>