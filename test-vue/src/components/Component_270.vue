<template>
  <header class="bg-white p-4 flex justify-center items-center">
    <img src="https://picsum.photos/seed/270/300/300" alt="Logo" class="h-10">
  </header>

  <nav class="bg-green-500 text-white p-4">
    <ul class="flex justify-center space-x-4">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <main class="p-4">
    <div class="flex justify-center">
      <div class="w-1/3 p-4">
        <h2 class="text-2xl mb-4">Column 1</h2>
        <p>This is the first column. It contains information about the company and its services.</p>
      </div>
      <div class="w-1/3 p-4">
        <h2 class="text-2xl mb-4">Column 2</h2>
        <p>This is the second column. It contains more information about the company and its services.</p>
      </div>
      <div class="w-1/3 p-4">
        <h2 class="text-2xl mb-4">Column 3</h2>
        <p>This is the third column. It contains even more information about the company and its services.</p>
      </div>
    </div>
  </main>

  <footer class="bg-red-500 text-white p-4">
    <div class="flex justify-center">
      <div class="w-1/2">
        <h2 class="text-2xl mb-4">Call to Action</h2>
        <p>This is the call to action section. It invites the user to book a demo or sign up for a trial.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>