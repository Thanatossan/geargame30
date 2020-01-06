<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
      rel="stylesheet"
    />
    <div class="container max-w-screen-xl lg:mx-auto px-6">
      <div>
        <navbar />
        <h1 class="text-center text-2xl"> SPONSOR BY</h1>
        <div class="flex justify-center">

          <img
            src="~/assets/sponcer/big/grandsport-800x400.png"
            class="max-h-small"
          >
          <img
            src="~/assets/sponcer/big/sfx-800x400.png"
            class="max-h-small"
          >
          <img
            src="~/assets/sponcer/big/SPNactive-800x400.png"
            class="max-h-small"
          >

          <img
            src="~/assets/sponcer/big/true-800x400.png"
            class="max-h-small"
          >
          <img
            src="~/assets/sponcer/big/ufare-800x400.png"
            class="max-h-small"
          >

        </div>
      </div>

    </div>
    <br>
    <border />
    <div class="container flex justify-center items-center text-center mx-auto">
      <div class="w-5/6">
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
import resultScore from "~/components/Sport/resultScore";
export default {
  components: {
    navbar,
    border,
    resultScore,
    Footer
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */

html {
  font-family: Rubik;
}
</style>
