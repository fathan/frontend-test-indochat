<template>
  <section class="flex items-center h-full p-16">
    <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div class="max-w-md text-center">
        <h2 class="mb-8 font-extrabold text-9xl">
          <span class="sr-only">Error</span>404
        </h2>
        <p class="text-2xl font-semibold md:text-3xl mb-10">
          Halaman tidak ditemukan
        </p>
        <router-link :to="{ path: '/' }">
          Back To Home
        </router-link>
      </div>
    </div>
  </section>
</template>
