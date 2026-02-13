<template>
  <header class="bg-green-500 text-white text-center py-16">
    <h1 class="text-4xl">Welcome to our Travel Agency</h1>
    <p class="mt-4">We are a dynamic layout featuring full-width images of travel destinations, with a scrolling banner displaying testimonials and call-to-action buttons.</p>
  </header>

  <section class="py-16">
    <div class="container mx-auto">
      <!-- Full-width images of travel destinations -->
      <img src="https://picsum.photos/seed/62/900/600" alt="Travel Destinations" class="w-full">
    </div>
  </section>

  <section class="bg-green-500 text-white py-16">
    <div class="container mx-auto">
      <!-- Scrolling banner displaying testimonials -->
      <div class="overflow-x-auto whitespace-nowrap">
        <!-- Testimonials -->
        <div class="inline-block px-4">
          <p>"I had the best experience with this travel agency. The itinerary was easy to digest and the staff was very friendly and helpful."</p>
          <p class="mt-4">- John Doe</p>
        </div>
        <!-- More testimonials -->
      </div>
    </div>
  </section>

  <section class="py-16">
    <div class="container mx-auto">
      <!-- Call-to-action buttons -->
      <a href="#" class="bg-green-500 text-white px-4 py-2 rounded">Book Now</a>
    </div>
  </section>
</template>

<script setup>
// No script needed for this example
</script>