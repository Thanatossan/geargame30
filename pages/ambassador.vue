<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
      rel="stylesheet"
    />
    <div class="container max-w-screen-xl lg:mx-auto px-6">
      <div class="justify-center text-center">
        <navbar />
        <!-- title section -->
        <div class="flex flex-col justify-center mb-4 bg-red-800 text-center lg:h-48 w-full">
          <label
            class="default-text"
            style="font-size:55px; color:white;"
          >Ambassadors</label>
        </div>
        <!-- content section -->
      </div>
      <div class="w-1/4">
        <h2 class="text-xl"> ผู้เข้าประกวด </h2>
        <border />
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
