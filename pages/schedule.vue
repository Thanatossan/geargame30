<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
      rel="stylesheet"
    />
    <div class="container min-h-screen flex justify-center  text-center mx-auto">

      <div class="w-5/6">
        <navbar />

      </div>
    </div>
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
import chaingmai from "~/components/about/chaingmai_history";
export default {
  components: {
    navbar,
    border,
    chaingmai,
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
