<template>
  <div class="bg-gray-100">
    <header class="bg-green-500 text-white text-center py-16">
      <h1 class="text-4xl">Welcome to our Travel Agency</h1>
      <p class="mt-4">We are a travel agency that specializes in creating unforgettable travel experiences. Our team of experienced travel agents will help you plan your next adventure, whether it's a romantic getaway, a family vacation, or a business trip.</p>
    </header>

    <section class="py-16">
      <!-- Image slider goes here -->
      <div class="carousel-container">
        <img src="https://static.photos/travel/900x600/169.webp" alt="Image 1" class="carousel-item active">
        <img src="https://static.photos/travel/900x600/170.webp" alt="Image 2" class="carousel-item">
        <img src="https://static.photos/travel/900x600/171.webp" alt="Image 3" class="carousel-item">
      </div>
    </section>

    <section class="py-16">
      <!-- Booking form goes here -->
      <form class="booking-form">
        <input type="text" placeholder="Name" class="form-input">
        <input type="email" placeholder="Email" class="form-input">
        <input type="date" placeholder="Date" class="form-input">
        <button type="submit" class="form-button">Submit</button>
      </form>
    </section>

    <footer class="bg-green-500 text-white text-center py-16">
      <!-- World map goes here -->
      <iframe src="https://static.photos/travel/900x600/172.webp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      <p class="mt-4">Contact us at info@travelagency.com or +1 123 456 7890</p>
    </footer>

    <nav class="bg-green-500 text-white text-center py-4 fixed bottom-0 w-full">
      <!-- Navigation links goes here -->
      <ul class="flex justify-around">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
// Your script logic goes here
</script>

<style scoped>
/* Add your custom styles here */
.carousel-container {
  position: relative;
  overflow: hidden;
}

.carousel-item {
  display: none;
  width: 100%;
}

.carousel-item.active {
  display: block;
}
</style>