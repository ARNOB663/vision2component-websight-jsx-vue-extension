<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-cover bg-center h-64" :style="{ backgroundImage: 'url(https://picsum.photos/1600/900)' }">
      <div class="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-6xl">
        <h1 class="text-4xl font-bold leading-none sm:text-5xl text-white">Welcome to Our Restaurant</h1>
        <p class="pt-2 text-white">We are a family-owned restaurant dedicated to providing the best food in the city. Our dishes are made with fresh ingredients and cooked to perfection.</p>
      </div>
    </header>
    <main class="flex-grow">
      <div class="container mx-auto px-4 py-12">
        <!-- Reservation Form Placeholder -->
        <form class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-4">Book a Table</h2>
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" class="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" class="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div class="mb-4">
            <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" id="date" name="date" class="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div class="mb-4">
            <label for="time" class="block text-sm font-medium text-gray-700">Time</label>
            <input type="time" id="time" name="time" class="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div class="mb-4">
            <label for="guests" class="block text-sm font-medium text-gray-700">Number of Guests</label>
            <input type="number" id="guests" name="guests" class="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
        </form>

        <!-- Menu Placeholder -->
        <section class="mt-12">
          <h2 class="text-2xl font-bold mb-4">Menu</h2>
          <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li v-for="item in menuItems" :key="item.id" class="bg-white p-4 rounded-lg shadow-md">
              <img :src="'https://static.photos/restaurant/900x600/65.webp'" alt="Dish" class="w-full h-48 object-cover mb-4">
              <h3 class="text-xl font-bold">{{ item.name }}</h3>
              <p class="text-gray-700">{{ item.description }}</p>
              <p class="font-semibold">${{ item.price }}</p>
            </li>
          </ul>
        </section>

        <!-- Testimonials Placeholder -->
        <section class="mt-12">
          <h2 class="text-2xl font-bold mb-4">Testimonials</h2>
          <blockquote class="border-l-4 border-indigo-600 pl-4 italic">
            "The food was delicious and the service was excellent. Highly recommend!"
            <footer>- John Doe</footer>
          </blockquote>
        </section>
      </div>
    </main>
    <footer class="bg-gray-800 text-white">
      <div class="container mx-auto px-4 py-6">
        <div class="flex justify-between items-center">
          <div>
            <a href="#" class="text-white hover:text-gray-300 mr-4">Facebook</a>
            <a href="#" class="text-white hover:text-gray-300 mr-4">Twitter</a>
            <a href="#" class="text-white hover:text-gray-300">Instagram</a>
          </div>
          <div>
            <address class="text-white">
              Address: 123 Main St, City, Country<br>
              Phone: +1234567890<br>
              Email: info@example.com
            </address>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const menuItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic Italian pizza with tomato sauce, mozzarella cheese, and basil.',
    price: 12,
    image: 'https://picsum.photos/900/600'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce, croutons, parmesan cheese, and Caesar dressing.',
    price: 8,
    image: 'https://picsum.photos/900/600'
  },
  // Add more menu items as needed
]
</script>