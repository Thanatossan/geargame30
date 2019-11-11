<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap p-6">

      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <img
            src="~/assets/image/JhangLekGames-Logo.png"
            width="141"
          >
        </div>
        <div class="text-gray-700">
          <a
            href="#"
            class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
          >Home</a>
          <a
            href="#"
            class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation "
          >Sport</a>
          <a
            href="#"
            class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
          >Mr. $ Miss</a>
          <a
            href="#"
            class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
          >News</a>
          <a
            href="#"
            class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
          >Sponcer</a>
          <a
            href="#"
            class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
          >Schedule</a>
          <a
            href="#"
            class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
          >About</a>
          <a
            href="#"
            class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
          >Contact</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  margin: 10px;
}
.hover-underline-animation {
  display: inline-block;
  position: relative;
}
.hover-underline-animation::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #a80a0a;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>