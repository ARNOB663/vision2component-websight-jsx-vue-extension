<template>
  <div class="bg-gray-100">
    <header class="bg-green-500 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">E-Learning Platform</h1>
        <div class="flex items-center">
          <input type="text" placeholder="Search..." class="mr-2 p-2 rounded">
          <button class="bg-white text-green-500 p-2 rounded">Login</button>
          <button class="bg-white text-green-500 p-2 rounded">Sign Up</button>
        </div>
      </div>
    </header>
    <nav class="bg-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <ul class="flex">
          <li class="mr-2"><a href="#" class="text-green-500">Home</a></li>
          <li class="mr-2"><a href="#" class="text-green-500">Courses</a></li>
          <li class="mr-2"><a href="#" class="text-green-500">Blog</a></li>
          <li class="mr-2"><a href="#" class="text-green-500">Contact Us</a></li>
        </ul>
        <button class="bg-green-500 text-white p-2 rounded">Start Learning</button>
      </div>
    </nav>
    <main class="container mx-auto p-4">
      <h2 class="text-3xl font-bold mb-4">Welcome to our E-Learning Platform</h2>
      <p class="mb-4">Our platform is designed to provide you with the best learning experience. We offer a wide range of courses in various fields. Whether you are interested in technology, business, art, or anything else, we have a course for you.</p>
      <p class="mb-4">Our courses are designed by industry experts and are delivered in a way that is easy to understand. You can learn at your own pace and from anywhere in the world.</p>
      <p class="mb-4">We also have a blog where you can find articles and resources to help you learn more about the courses you are interested in.</p>
    </main>
    <footer class="bg-green-500 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <ul class="flex">
          <li class="mr-2"><a href="#" class="text-white">Popular Courses</a></li>
          <li class="mr-2"><a href="#" class="text-white">Blog</a></li>
          <li class="mr-2"><a href="#" class="text-white">Contact Us</a></li>
        </ul>
        <p>© 2022 E-Learning Platform</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>