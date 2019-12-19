<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
      rel="stylesheet"
    />
    <div class="container max-w-screen-xl lg:mx-auto px-6">
      <div>
        <navbar />
        <div class="flex flex-col justify-center mb-4 bg-red-800 text-center lg:h-48 w-full">
          <label
            class="default-text"
            style="font-size:55px; color:white;"
          >SPORTS</label>
        </div>
        <sportCard />
      </div>
    </div>
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
import sportCard from "~/components/Sport/sportCard";
import Footer from "~/components/Footer";
export default {
  components: {
    navbar,
    sportCard,
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
