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
            class="hidden lg:flex lg:items-center lg:w-auto w-full"
            id="menu"
          >
            <nav class="flex flex-col lg:flex-row">
              <nuxt-link
                to="/"
                class="hover:bg-gray-200"
              >
                <a
                  href="#"
                  class="block my-2 lg:inline-block lg:my-0 hover-underline-animation "
                >Home</a>
              </nuxt-link>
              <nuxt-link
                to="#"
                class="hover:bg-gray-200"
              >
                <!--<a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
            >Sport</a> -->
                <h1 class="block my-2 lg:inline-block lg:my-0 text-gray-400">Sport</h1>
              </nuxt-link>
              <nuxt-link
                to="#"
                class="hover:bg-gray-200"
              >
                <!--
            <a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
            >Mr. & Miss</a>
            -->
                <h1 class="block my-2 lg:inline-block lg:my-0 text-gray-400">Mr. & Miss</h1>
              </nuxt-link>
              <nuxt-link
                to="#"
                class="hover:bg-gray-200"
              >
                <!--<a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
            >News</a> -->
                <h1 class="block my-2 lg:inline-block lg:my-0 text-gray-400">News</h1>
              </nuxt-link>
              <nuxt-link
                to="#"
                class="hover:bg-gray-200"
              >
                <!--
            <a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
            >Sponcer</a> -->
                <h1 class="block my-2 lg:inline-block lg:my-0 text-gray-400">Sponsor</h1>
              </nuxt-link>
              <nuxt-link
                to="/schedule"
                class="hover:bg-gray-200"
              >
                <a
                  href="#"
                  class="block my-2 lg:inline-block lg:my-0 hover-underline-animation"
                >Schedule</a>
              </nuxt-link>
              <nuxt-link
                to="/Map"
                class="hover:bg-gray-200"
              >
                <a
                  href="#"
                  class="block my-2 lg:inline-block lg:my-0 hover-underline-animation"
                >Map</a>
              </nuxt-link>
              <nuxt-link
                to="#"
                class="hover:bg-gray-200"
              >
                <!--  <a
              href="#"
              class="block mt-4 lg:inline-block lg:mt-0 hover-underline-animation"
            >Score</a> -->
                <h1 class="block my-2 lg:inline-block lg:my-0 text-gray-400">Score</h1>
              </nuxt-link>
              <nuxt-link
                to="/about"
                class="hover:bg-gray-200"
              >
                <a
                  href="#"
                  class="block my-2 lg:inline-block lg:my-0 hover-underline-animation"
                >About</a>
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
