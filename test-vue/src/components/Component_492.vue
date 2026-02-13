<template>
  <header class="bg-white shadow">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
      <div class="flex items-center">
        <img src="https://static.photos/education/300x300/94.webp" alt="Logo" class="h-10">
      </div>
      <div>
        <form class="flex items-center">
          <input type="text" placeholder="Search..." class="border rounded px-2 py-1">
          <button type="submit" class="bg-purple-500 text-white px-2 py-1 rounded ml-2">Search</button>
        </form>
      </div>
    </div>
  </header>

  <main class="container mx-auto px-4 py-6">
    <h1 class="text-3xl font-bold mb-4">Welcome to Our Education Institute</h1>
    <p class="mb-4">
      At our education institute, we are committed to providing high-quality education to our students. We offer a wide range of courses in various subjects, and our experienced and dedicated teachers ensure that our students receive the best possible education.
    </p>
    <!-- Add more content here -->
  </main>

  <footer class="bg-white shadow mt-auto">
    <div class="container mx-auto px-4 py-6">
      <div class="flex justify-between">
        <div>
          <h2 class="text-xl font-bold mb-2">Newsletter</h2>
          <form>
            <input type="email" placeholder="Enter your email" class="border rounded px-2 py-1 mb-2">
            <button type="submit" class="bg-purple-500 text-white px-2 py-1 rounded">Subscribe</button>
          </form>
        </div>
        <div>
          <h2 class="text-xl font-bold mb-2">Links</h2>
          <ul>
            <li><a href="#" class="text-purple-500 hover:underline">About Us</a></li>
            <li><a href="#" class="text-purple-500 hover:underline">Contact Us</a></li>
            <!-- Add more links here -->
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>