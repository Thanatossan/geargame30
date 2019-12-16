<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet" />
    <div class="container min-h-screen flex justify-center text-center mx-auto">
      <div class="w-5/6">
        <navbar />
        <!-- title section -->
        <div class="flex flex-col justify-center mb-4 bg-red-800 text-center lg:h-48 w-full">
          <label class="default-text" style="font-size:55px; color:white;">SPORTS</label>
        </div>
        <!-- content section -->
        <sportCon />
      </div>
    </div>

    <br />

    <!-- footer -->
    <br />
    <border />
    <div class="container flex justify-center items-center text-center mx-auto">
      <div class="w-4/6">
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
import sportCon from "~/components/Sport/sportCard";
import Footer from "~/components/Footer";
export default {
  components: {
    navbar,
    border,
    Footer,
    sportCon
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */
.default-text {
  font-family: Rubik;
}
</style>
