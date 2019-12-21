<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
      rel="stylesheet"
    />
    <div class="container min-h-screen flex justify-center text-center mx-auto">
      <div>
        <navbar />
        <div class="flex items-center flex-col lg:flex-row container">
          <div class="w-1/2 flex-col">
            <div class="card-body card-border m-3">
              <img
                src="~/assets/sport_img/running.PNG"
                class="object-fill"
                height="1000"
              />
              <br />
            </div>
          </div>
          <div class="w-1/2 flex-col">
            <br /><br /><br />
            <div class="flex flex-col justify-center mb-4 text-center lg:h-48 w-full">
              <label
                class="default-text"
                style="font-size:55px;"
              >ATHLETICS</label>
              <br /><br />
              <button
                class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 "
                onclick="window.location = 'https://drive.google.com/open?id=1gwKnH_hxs3serCu5_SEAyBfkXMjSivmq'"
              >
                กำหนดการแข่งขัน
              </button>
              <!--  <br /><br /><br />
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-5 px-4 "
                onclick="window.location = 'https://drive.google.com/file/d/1x0LzNiK5k2kqungn3Je1Ki4plV0ayKhU/view?usp=sharing'"
              >
                SCORE
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />

    <!-- footer -->
    <br />
    <border />
    <div class="container max-w-screen-xl lg:mx-auto px-6">
      <div>
        <div class="my-5 mx-auto text-right">
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "~/components/navbar";
import border from "~/components/border";

import Footer from "~/components/Footer";
export default {
  components: {
    navbar,
    border,
    Footer
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */
.default-text {
  font-family: Rubik;
}
</style>
