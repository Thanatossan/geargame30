<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
      rel="stylesheet"
    />
    <div class="container min-h-screen flex justify-center text-center mx-auto">

      <div class="w-5/6">

        <navbar />
        <Map />

        <border />
        <div class="">
          <img src="~/assets/Map/cmu_map.png"/>
        </div>
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
import Map from "~/components/Map/Map";
import Footer from "~/components/Footer";
export default {
  components: {
    navbar,
    border,
    Map,
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