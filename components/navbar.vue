<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap p-2">
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <img
            src="~/assets/image/JhangLekGames-Logo.png"
            class="sm:w-1/2 md:w-1/2 lg:w-1/4 object-fill"
          />
        </div>

        <div class="bg-gray-100 lg:bg-white ml-4">
          <label
            for="menu-toggle"
            class="pointer-cursor lg:hidden block py-2 px-1 border border-grey-light rounded hover:bg-gray-300"
          >
            <svg
              class="fill-current text-gray-900 h-9 w-9 w-full"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input
            class="hidden items-center"
            type="checkbox"
            id="menu-toggle"
          />

          <div
            class="hidden lg:flex lg:items-center lg:w-1/2 w-full"
            id="menu"
          >
            <nav class="flex flex-col lg:flex-row">
              <nuxt-link to="/">
                <span class="block my-2 lg:inline-block lg:my-0 hover-underline-animation ">Home</span>
              </nuxt-link>
              <nuxt-link to="/sport">
                <span class="block my-2 lg:inline-block lg:mt-0 hover-underline-animation">Sports</span>
              </nuxt-link>
              <nuxt-link to="/ambassador">

                <span class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation">Ambassadors</span>

              </nuxt-link>
              <!--<nuxt-link to="#">
                <a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
            >News</a> 
                <h1 class="block my-2 lg:inline-block lg:my-0 text-gray-400">News</h1>
              </nuxt-link>-->
              <nuxt-link to="#">
                <!--
            <a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
            >Sponcer</a> -->
                <h1 class="block my-2 lg:inline-block lg:my-0 text-gray-400">Sponsor</h1>
              </nuxt-link>
              <nuxt-link to="/schedule">
                <span class="block my-2 lg:inline-block lg:my-0 hover-underline-animation">Schedule</span>
              </nuxt-link>
              <nuxt-link to="/Map">
                <span class="block my-2 lg:inline-block lg:my-0 hover-underline-animation">Map</span>
              </nuxt-link>
              <nuxt-link to="/score">
                <!--  <a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
            >Score</a> -->
                <span class="block my-2 lg:inline-block lg:my-0 hover-underline-animation">Score</span>
              </nuxt-link>
              <nuxt-link to="/about">
                <span class="block my-2 lg:inline-block lg:my-0 hover-underline-animation">About</span>
              </nuxt-link>
            </nav>
          </div>
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

#menu-toggle:checked + #menu {
  display: block;
}
</style>
