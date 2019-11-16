<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap p-2">
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <img
            src="~/assets/image/JhangLekGames-Logo.png"
            width="141"
          />
        </div>
        <div class="text-gray-700 pt-3">
          <nuxt-link to="/">
            <a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
            >Home</a>
          </nuxt-link>
          <nuxt-link to="#">
            <!--<a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
            >Sport</a> -->
            <h1 class="block mt-4 lg:inline-block lg:mt-0 text-gray-400">Sport</h1>
          </nuxt-link>
          <nuxt-link to="#">
            <!--
            <a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
            >Mr. & Miss</a>
            -->
            <h1 class="block mt-4 lg:inline-block lg:mt-0 text-gray-400">Mr. & Miss</h1>
          </nuxt-link>
          <nuxt-link to="#">
            <!--<a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
            >News</a> -->
            <h1 class="block mt-4 lg:inline-block lg:mt-0 text-gray-400">News</h1>
          </nuxt-link>
          <nuxt-link to="#">
            <!--
            <a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
            >Sponcer</a> -->
            <h1 class="block mt-4 lg:inline-block lg:mt-0 text-gray-400">Sponser</h1>
          </nuxt-link>
          <nuxt-link to="/schedule">
            <a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
            >Schedule</a>
          </nuxt-link>
          <nuxt-link to="/Map">
            <a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
            >Map</a>
          </nuxt-link>
          <nuxt-link to="#">
            <!--  <a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
            >Score</a> -->
            <h1 class="block mt-4 lg:inline-block lg:mt-0 text-gray-400">Score</h1>
          </nuxt-link>
          <nuxt-link to="/about">
            <a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
            >About</a>
          </nuxt-link>
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
  margin: 0.5rem;
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
