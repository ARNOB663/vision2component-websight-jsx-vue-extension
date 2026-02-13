<template>
  <header class="fixed w-full bg-white shadow-md">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
      <div class="flex items-center">
        <img src="https://static.photos/education/300x300/155.webp" alt="Logo" class="h-10">
        <h1 class="ml-4 text-2xl font-bold">Education Institution</h1>
      </div>
      <nav>
        <ul class="flex">
          <li class="mr-4"><a href="#courses" class="text-gray-600 hover:text-gray-900">Courses</a></li>
          <li class="mr-4"><a href="#faculty" class="text-gray-600 hover:text-gray-900">Faculty</a></li>
          <li><a href="#campus" class="text-gray-600 hover:text-gray-900">Campus Facilities</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="container mx-auto pt-24 px-4">
    <section id="courses" class="mb-10">
      <h2 class="text-3xl font-bold mb-4">Courses</h2>
      <p>At our institution, we offer a wide range of courses to suit every student's interests and needs. Our courses are designed to provide students with a solid foundation in their chosen field, and to equip them with the knowledge and skills they need to succeed in their chosen career.</p>
    </section>

    <section id="faculty" class="mb-10">
      <h2 class="text-3xl font-bold mb-4">Faculty</h2>
      <p>Our faculty is composed of highly qualified and experienced professionals who are dedicated to providing the best possible education to our students. Our faculty members are experts in their fields, and they are committed to providing students with the knowledge and skills they need to succeed in their chosen career.</p>
    </section>

    <section id="campus">
      <h2 class="text-3xl font-bold mb-4">Campus Facilities</h2>
      <p>Our campus is equipped with state-of-the-art facilities that are designed to provide our students with a comfortable and conducive learning environment. Our campus includes a modern library, a well-equipped computer lab, and a variety of other facilities that are designed to support the academic and extracurricular activities of our students.</p>
    </section>
  </main>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>