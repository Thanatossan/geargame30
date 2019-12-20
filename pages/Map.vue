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

        <h1 class="text-center text-2xl"> แผนที่ สนามแข่งกีฬา </h1>
        <br>
        <border />

        <div class="flex">
          <div class="w-3/4">
            <a href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7">
              <img src="~/assets/Map/athletic & recreation map.png">
            </a>
          </div>
          <div class="w-1/4">
            <br><br><br>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬากรีฑา</h1>
            <border />
            <br><br>
            <p class="text-right"> CMU Main Stadium
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <a
              href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7"
              class="text-right"
            > https://goo.gl/maps/2Z74oAbXGAj8gAqw7</a>
          </div>
        </div>
        <br><br>
        <div class="flex">
          <div class="w-3/4">
            <a href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7">
              <img src="~/assets/Map/badminton map.png">
            </a>
          </div>
          <div class="w-1/4">
            <br><br><br>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาแบดมินตัน</h1>
            <border />
            <br><br>
            <p class="text-right">Main Gymnasium Chiangmai University
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <a
              href="https://goo.gl/maps/p7tegmkVN88vv24x8"
              class="text-right"
            > https://goo.gl/maps/p7tegmkVN88vv24x8</a>
          </div>
        </div>
        <div class="flex">
          <div class="w-3/4">
            <a href="https://goo.gl/maps/2Z74oAbXGAj8gAqw7">
              <img src="~/assets/Map/basketball map.png">
            </a>
          </div>
          <div class="w-1/4">
            <br><br><br>
            <h1 class="text-center flex-col lg:text-lg sm:text-sm"> สนามแข่ง กีฬาบาสเก็ตบอล</h1>
            <border />
            <br><br>
            <p class="text-right">Main Gymnasium Chiangmai University
              Suthep, Mueang Chiang Mai District, Chiang Mai 50200</p>
            <br>
            <a
              href="https://goo.gl/maps/p7tegmkVN88vv24x8"
              class="text-right"
            > https://goo.gl/maps/p7tegmkVN88vv24x8</a>
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