<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
      rel="stylesheet"
    />
    <div class="container max-w-screen-xl lg:mx-auto px-6">
      <div>
        <navbar />
        <schedule />
        <h1 class="text-right text-red-500">หมายเหตุ: กำหนดการอาจมีการเปลี่ยนแปลงเพื่อความเหมาะสม</h1>
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
import schedule from "~/components/schedule/schedule";
import chaingmai from "~/components/about/chaingmai_history";
export default {
  components: {
    navbar,
    border,
    chaingmai,
    schedule,
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
