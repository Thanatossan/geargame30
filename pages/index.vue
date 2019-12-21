<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
      rel="stylesheet"
    />
    <div class="container max-w-screen-xl lg:mx-auto px-6">

      <div>
        <navbar />
        <promote />
        <br />
        <border />

        <sponcer />
        <br />
        <border />

        <br />
        <Sport />
        <br />
        <!--<border />
        <br />
        <News />
        <br /> -->
        <!--<border />
        <br />
        <SponcerCon />
        <br />-->
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
import promote from "~/components/promote";
import sponcer from "~/components/sponcer";
import border from "~/components/border";
import Sport from "~/components/Sport";
import News from "~/components/News";
import SponcerCon from "~/components/SponcerCon";
import Footer from "~/components/Footer";
export default {
  components: {
    navbar,
    promote,
    sponcer,
    border,
    Sport,
    News,
    SponcerCon,
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
