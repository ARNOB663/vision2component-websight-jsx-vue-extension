<template>
  <div class="bg-gray-100">
    <header class="bg-blue-500 text-white text-center py-16">
      <h1 class="text-4xl">Event Management</h1>
    </header>

    <section class="py-16 text-center">
      <h2 class="text-2xl mb-4">Countdown Timer</h2>
      <!-- Countdown Timer Code Here -->
      <div id="countdown-timer"></div>
    </section>

    <section class="py-16 text-center">
      <h2 class="text-2xl mb-4">Interactive Seating Chart</h2>
      <!-- Interactive Seating Chart Code Here -->
      <div id="seating-chart"></div>
    </section>

    <section class="py-16 text-center">
      <h2 class="text-2xl mb-4">Client Testimonials</h2>
      <!-- Client Testimonials Code Here -->
      <div id="testimonials"></div>
    </section>

    <section class="py-16 text-center">
      <h2 class="text-2xl mb-4">Live Social Media Feed</h2>
      <!-- Live Social Media Feed Code Here -->
      <div id="social-media-feed"></div>
    </section>
  </div>
</template>

<script setup>
// Import necessary libraries
import { onMounted } from 'vue';

onMounted(() => {
  // Initialize countdown timer
  const countdownTimer = document.getElementById('countdown-timer');
  const countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
  const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    if (distance < 0) {
      clearInterval(countdownFunction);
      countdownTimer.innerHTML = "EXPIRED";
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      countdownTimer.innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    }
  }, 1000);

  // Initialize seating chart
  const seatingChart = document.getElementById('seating-chart');
  seatingChart.innerHTML = '<iframe src="https://static.photos/wedding/900x600/159.webp" width="100%" height="600px"></iframe>';

  // Initialize client testimonials
  const testimonials = document.getElementById('testimonials');
  testimonials.innerHTML = '<iframe src="https://static.photos/wedding/900x600/160.webp" width="100%" height="600px"></iframe>';

  // Initialize live social media feed
  const socialMediaFeed = document.getElementById('social-media-feed');
  socialMediaFeed.innerHTML = '<iframe src="https://static.photos/wedding/900x600/161.webp" width="100%" height="600px"></iframe>';
});
</script>