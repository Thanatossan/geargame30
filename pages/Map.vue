<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
      rel="stylesheet"
    />
    <div class="container max-w-screen-xl lg:mx-auto px-6">

      <div>

        <navbar />
        <Map />
        <border />
        <br>
        <h1 class="text-2xl text-center"> แผนที่หอพักนักศึกษา </h1>
        <div class="flex">
          <div>
            <img
              src="~/assets/Map/cmu_map.png"
              class=" object-center lg:w-3/4 lg:ml-40"
            />
          </div>

        </div>

        <h1 class="text-center text-2xl"> แผนที่ สนามแข่งกีฬา </h1>\
        <br>
        <border />

        <div class="flex">
          <div class="w-3/4">
            <img src="~/assets/Map/athletic & recreation map.png">
          </div>
          <div class="w-1/4">
            <h1 class=" text-center flex-col"> แผนที่ สนามแข่งกีฬา กรีฑา และ กีฬาสันทนาการ</h1>
          </div>

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