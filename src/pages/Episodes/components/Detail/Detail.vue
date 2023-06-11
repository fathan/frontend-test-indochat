<template>
  <div
    class="flex h-screen w-full bg-black bg-cover bg-no-repeat"
    style="background-image:url('https://static.tvmaze.com/uploads/images/original_untouched/1/3178.jpg')"
  >
    <div class="px-20 pt-10">
      <BackButton routeName="Episode List" />

      <section class="mt-40">
        <div>
          <div class="mb-3">
            <h2 class="text-white text-2xl lg:text-6xl">
              Lorem ipsum dolor sit amet
            </h2>
          </div>

          <Rating
            :withShowPoint="true"
            :point="8.1"
          />

          <div class="mt-20">
            <p class="text-white text-base lg:text-xl">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>
      </section>
    </div>    
  </div>
</template>