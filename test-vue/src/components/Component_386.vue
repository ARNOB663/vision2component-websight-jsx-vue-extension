<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Nonprofit Organization</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#donate" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Donate
        </a>
        <a href="#volunteer" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Volunteer
        </a>
        <a href="#get-involved" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Get Involved
        </a>
      </div>
    </div>
  </nav>
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">Welcome to Nonprofit Organization</h1>
    <p class="mb-4">
      At Nonprofit Organization, we believe in the power of social causes. We are a nonprofit organization dedicated to making a positive impact in our community. We believe in the power of social causes, and we are committed to using our skills and resources to make a difference.
    </p>
    <!-- Hero Image Placeholder -->
    <img src="https://picsum.photos/1200/400?random" alt="Hero Image" class="w-full h-auto mb-8">

    <!-- Donate Section Placeholder -->
    <section id="donate" class="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 class="text-2xl font-bold mb-4">Donate</h2>
      <p>Join us in supporting our mission through donations.</p>
      <!-- Donation Form Placeholder -->
      <form class="mt-4">
        <label for="amount" class="block text-sm font-medium text-gray-700">Amount:</label>
        <input type="number" id="amount" name="amount" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        <button type="submit" class="mt-4 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">Donate Now</button>
      </form>
    </section>

    <!-- Volunteer Section Placeholder -->
    <section id="volunteer" class="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 class="text-2xl font-bold mb-4">Volunteer</h2>
      <p>Join our team of volunteers today!</p>
      <!-- Volunteer Form Placeholder -->
      <form class="mt-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
        <input type="text" id="name" name="name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
        <input type="email" id="email" name="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
        <button type="submit" class="mt-4 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">Apply to Volunteer</button>
      </form>
    </section>

    <!-- Get Involved Section Placeholder -->
    <section id="get-involved" class="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 class="text-2xl font-bold mb-4">Get Involved</h2>
      <p>Find ways to get involved beyond donating or volunteering.</p>
      <!-- Get Involved Links Placeholder -->
      <ul class="list-disc pl-5">
        <li><a href="#" class="text-teal-500 hover:text-teal-600">Learn More</a></li>
        <li><a href="#" class="text-teal-500 hover:text-teal-600">Events</a></li>
        <li><a href="#" class="text-teal-500 hover:text-teal-600">Contact Us</a></li>
      </ul>
    </section>
  </main>
</template>

<script setup>
// Your script logic can go here if needed
</script>